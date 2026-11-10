import {
  WebGLRenderer, Scene, PerspectiveCamera, BufferGeometry, BufferAttribute,
  ShaderMaterial, Points, Vector2, Vector3, Vector4, Matrix3, NormalBlending,
  LinearSRGBColorSpace,
} from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { rng, buildEye, buildDoc, buildNet, buildSeal, buildApp, assemble, EYE, DOC } from './shapes.js';
import { vertex, fragment } from './shaders.js';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse = matchMedia('(pointer: coarse)').matches;
if (reduced) root.classList.add('is-reduced');

/* ---------- timeline positions (timeline seconds) ---------- */
const T = {
  heroOut: 0.6, morph1: 0.7, docIn: 1.9, scan: 2.5, scanDur: 3.0,
  docOut: 6.0, morph2: 6.2, netIn: 7.4, alarm: 8.3, netOut: 9.8,
  flip: 10.0, casesIn: 10.9, track: 11.3, trackEnd: 15.0, casesOut: 15.3,
  morph4: 15.4, priceIn: 15.7, press: 16.8, pressDur: 0.55, priceOut: 18.2,
  morph5: 18.4, appIn: 19.4, flag: 20.0, appOut: 21.0,
  unflip: 21.1, morph6: 21.2, total: 23.0,
};
const CH = [0, 1.6, 6.2, 10.0, 15.35, 18.3, 21.1, T.total];
const CH_NAMES = ['The eye', 'The document', 'The money', 'The case files', 'The price', 'The software', 'The answer'];

/* ---------- state ---------- */
const state = { m: 0, open: reduced ? 1 : 0, close: 0, scan: 0, h1: 0, h2: 0, h3: 0, alarm: 0, ink: 0, press: 0, flag: 0 };
const look = { x: 0, y: 0, tx: 0, ty: 0 };

/* ---------- mode ---------- */
function getMode() {
  const w = innerWidth, h = innerHeight;
  if (w < 760 || w / h < 0.95) return 'stacked';
  if (w >= 1180 && w / h >= 1.2) return 'wide';
  return 'medium';
}
let mode = getMode();
root.dataset.mode = mode;

/* ---------- WebGL ---------- */
const canvas = $('#gl');
let renderer = null;
try {
  renderer = new WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
} catch (e) {
  renderer = null;
}
if (!renderer) root.classList.add('no-gl');

const camera = new PerspectiveCamera(30, innerWidth / innerHeight, 0.1, 100);
camera.position.z = 12;
const scene = new Scene();
let points, material, geometry, anchors = {};
const lowPower = (navigator.hardwareConcurrency || 8) <= 4;

const v4 = () => new Vector4(0, 0, 0, 1);
const uniforms = {
  uTime: { value: 0 }, uM: { value: 0 }, uOpen: { value: state.open }, uClose: { value: 0 }, uScan: { value: 0 },
  uHi: { value: new Vector3() }, uAlarm: { value: 0 }, uInk: { value: 0 }, uPress: { value: 0 }, uFlag: { value: 0 },
  uLook: { value: new Vector2() }, uPx: { value: 1 }, uSize: { value: 2.2 },
  uView: { value: new Vector2(5, 3) }, uRows: { value: 50 }, uGrid: { value: new Vector4(40, 24, 0.2, 0) },
  uReduced: { value: reduced ? 1 : 0 },
  uTA: { value: v4() }, uTB: { value: v4() }, uTC: { value: v4() }, uTE: { value: v4() }, uTF: { value: v4() }, uTG: { value: v4() },
  uRA: { value: new Matrix3() }, uRB: { value: new Matrix3() }, uRC: { value: new Matrix3() }, uRF: { value: new Matrix3() },
  cPaper: { value: new Vector3(0.925, 0.894, 0.824) },
  cInk: { value: new Vector3(0.09, 0.125, 0.212) },
  cAmber: { value: new Vector3(0.941, 0.655, 0.227) },
  cRed: { value: new Vector3(0.886, 0.333, 0.247) },
  cDust: { value: new Vector3(0.56, 0.6, 0.7) },
  cDustInk: { value: new Vector3(0.45, 0.47, 0.55) },
  cWax: { value: new Vector3(0.62, 0.16, 0.12) },
  cWaxHi: { value: new Vector3(0.98, 0.8, 0.72) },
};

function particleCount() {
  if (mode === 'stacked') return lowPower ? 5200 : 6800;
  return lowPower ? 9000 : 14000;
}

function buildGeometry() {
  const N = particleCount();
  const k = N / 14000;
  const R = rng(7);
  const wide = mode !== 'stacked';
  const eye = assemble(buildEye(k, R), N, R, [8.5, 5.5, -4, 1.2]);
  const docShape = buildDoc(k, R);
  const doc = assemble(docShape, N, R, [5.5, 4.2, -5, -0.5]);
  const netShape = buildNet(k, R, wide);
  const net = assemble(netShape, N, R, [6, 4.4, -5, -0.8]);
  // highlights drawn last so they sit on top of the wax
  const order = [0, 4, 1, 2, 3];
  const seal = assemble(buildSeal(k, R), N, R, [1, 1, 0, 0]).sort((a, b) => order.indexOf(a[3]) - order.indexOf(b[3]));
  const appShape = buildApp(k, R, wide);
  const app = assemble(appShape, N, R, [1, 1, 0, 0]);
  anchors = { doc: docShape.anchors, net: netShape.anchors, app: appShape.anchors };

  const pos = new Float32Array(N * 3), aDoc = new Float32Array(N * 3), aNet = new Float32Array(N * 3);
  const aRnd = new Float32Array(N * 4), aEyeI = new Float32Array(N * 2), aDocI = new Float32Array(N * 2), aNetI = new Float32Array(N * 4);
  const aSeal = new Float32Array(N * 4), aApp = new Float32Array(N * 4);
  for (let i = 0; i < N; i++) {
    const e = eye[i], d = doc[i], n = net[i], s = seal[i], a = app[i];
    pos.set([e[0], e[1], e[2]], i * 3);
    aDoc.set([d[0], d[1], d[2]], i * 3);
    aNet.set([n[0], n[1], n[2]], i * 3);
    aEyeI.set([e[3], e[4]], i * 2);
    aDocI.set([d[3], d[4]], i * 2);
    aNetI.set([n[3], n[4], n[5], n[6]], i * 4);
    aSeal.set([s[0], s[1], s[2], s[3]], i * 4);
    aApp.set([a[0], a[1], a[2], a[3]], i * 4);
    aRnd.set([R(), R(), R(), R()], i * 4);
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(pos, 3));
  g.setAttribute('aDoc', new BufferAttribute(aDoc, 3));
  g.setAttribute('aNet', new BufferAttribute(aNet, 3));
  g.setAttribute('aRnd', new BufferAttribute(aRnd, 4));
  g.setAttribute('aEyeI', new BufferAttribute(aEyeI, 2));
  g.setAttribute('aDocI', new BufferAttribute(aDocI, 2));
  g.setAttribute('aNetI', new BufferAttribute(aNetI, 4));
  g.setAttribute('aSeal', new BufferAttribute(aSeal, 4));
  g.setAttribute('aApp', new BufferAttribute(aApp, 4));
  return g;
}

function initGL() {
  if (!renderer) return;
  material = new ShaderMaterial({
    uniforms, vertexShader: vertex, fragmentShader: fragment,
    transparent: true, depthWrite: false, depthTest: false, blending: NormalBlending,
  });
  geometry = buildGeometry();
  points = new Points(geometry, material);
  points.frustumCulled = false;
  scene.add(points);
  renderer.outputColorSpace = LinearSRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
}

/* ---------- shape transforms ---------- */
const xf = {
  eye: { x: 0, y: 0, s: 1, rx: 0, ry: 0 }, doc: { x: 0, y: 0, s: 1, rx: 0, ry: 0 },
  net: { x: 0, y: 0, s: 1, rx: 0, ry: 0 }, seal: { x: 0, y: 0, s: 1 },
  app: { x: 0, y: 0, s: 1, rx: 0, ry: 0 }, end: { x: 0, y: 0, s: 1 },
};
let W = innerWidth, H = innerHeight, worldPerPx = 1;
let eyeCenter = [W / 2, H / 2], endCenter = [W / 2, H / 3];

function layout() {
  W = innerWidth; H = innerHeight;
  camera.aspect = W / H;
  camera.updateProjectionMatrix();
  const wh = 2 * 12 * Math.tan((15 * Math.PI) / 180);
  worldPerPx = wh / H;
  const toWorld = (px, py) => [(px - W / 2) * worldPerPx, (H / 2 - py) * worldPerPx];
  const eyeW = 2 * (EYE.W + 0.3);
  const docH = 2 * DOC.PH, docW = 2 * DOC.PW;
  uniforms.uView.value.set((W / 2) * worldPerPx, (H / 2) * worldPerPx);
  uniforms.uRows.value = Math.max(18, Math.round(H / 17));
  const gsp = mode === 'stacked' ? 26 : 30;
  uniforms.uGrid.value.set(Math.ceil(W / gsp) + 1, Math.ceil(H / gsp) + 1, gsp * worldPerPx, 0);

  if (mode === 'stacked') {
    const top = 96, bottom = H * 0.5;
    const cy = (top + bottom) / 2;
    eyeCenter = [W / 2, cy];
    const [x, y] = toWorld(W / 2, cy);
    xf.eye = { x, y, s: (Math.min(W * 0.94, (bottom - top) * 2.2) * worldPerPx) / eyeW, rx: 0, ry: 0 };
    const dpx = Math.min(bottom - top - 10, W * 0.7 * (docH / docW));
    xf.doc = { x, y: y + 0.02, s: (dpx * worldPerPx) / docH, rx: 0.05, ry: -0.12 };
    const npx = Math.min(W * 0.96, (bottom - top) * 1.02);
    xf.net = { x, y, s: (npx * worldPerPx) / 4.0, rx: 0, ry: 0 };
    const apx = Math.min(bottom - top - 6, W * 0.62 * 1.95);
    xf.app = { x, y, s: (apx * worldPerPx) / 3.9, rx: 0, ry: 0.1 };
    endCenter = [W / 2, H * 0.3];
    const [ex, ey] = toWorld(W / 2, H * 0.3);
    xf.end = { x: ex, y: ey, s: (W * 0.86 * worldPerPx) / eyeW };
  } else {
    const ecx = W * 0.735;
    const ew = Math.min(W * (mode === 'wide' ? 0.46 : 0.44), H * 1.0);
    eyeCenter = [ecx, H * 0.47];
    let [ex, ey] = toWorld(ecx, H * 0.47);
    xf.eye = { x: ex, y: ey, s: (ew * worldPerPx) / eyeW, rx: 0, ry: 0 };
    const xL = Math.min(Math.max(W * 0.38, 420), 560);
    const xR = mode === 'wide' ? W - 330 : W - 48;
    const avail = xR - xL;
    const dH = Math.min(H * 0.8, avail * 0.92 * (docH / docW));
    const [dx, dy] = toWorld((xL + xR) / 2, H * 0.53);
    xf.doc = { x: dx, y: dy, s: (dH * worldPerPx) / docH, rx: 0.06, ry: -0.2 };
    const nW = Math.min(W - xL - 40, H * 0.8 * 1.75);
    const [nx, ny] = toWorld(xL + (W - xL - 20) / 2, H * 0.52);
    xf.net = { x: nx, y: ny, s: (nW * worldPerPx) / 6.2, rx: 0, ry: 0 };
    const pad = Math.min(68, Math.max(20, W * 0.046));
    const axL = mode === 'medium' ? Math.max(xL, pad + Math.min(400, W * 0.4) + 34) : xL;
    const aW = Math.min(W - axL - 70, H * 0.74 * 1.6);
    const [ax, ay] = toWorld(axL + 10 + (W - axL - 40) / 2, H * 0.53);
    xf.app = { x: ax, y: ay, s: (aW * worldPerPx) / 5.2, rx: 0.05, ry: 0.16 };
    endCenter = [W / 2, H * 0.34];
    const [fx, fy] = toWorld(W / 2, H * 0.34);
    xf.end = { x: fx, y: fy, s: (Math.min(W * 0.44, H * 0.85) * worldPerPx) / eyeW };
  }
  // seal sits on the corner of the price card
  const card = $('.price-wrap');
  const amt = $('.amt');
  if (card && amt) {
    const r = card.getBoundingClientRect();
    const ra = amt.getBoundingClientRect();
    const rad = mode === 'wide' ? 100 : mode === 'medium' ? 88 : 62;
    const cx = r.right - rad * 0.32, cy = ra.top + rad * 0.9;
    const [sx, sy] = toWorld(cx, cy);
    xf.seal = { x: sx, y: sy, s: (rad * worldPerPx) / 1.1 };
  }
  if (renderer) {
    const dpr = Math.min(devicePixelRatio || 1, mode === 'stacked' ? 1.6 : 1.75);
    renderer.setPixelRatio(dpr);
    renderer.setSize(W, H, false);
    uniforms.uPx.value = dpr;
    uniforms.uSize.value = mode === 'stacked' ? 2.0 : 2.3;
  }
  applyXf();
}

function rotMat(rx, ry, out) {
  const cx = Math.cos(rx), sx = Math.sin(rx), cy = Math.cos(ry), sy = Math.sin(ry);
  out.set(cy, sy * sx, sy * cx, 0, cx, -sx, -sy, cy * sx, cy * cx);
  return out;
}
function applyXf() {
  const u = uniforms;
  u.uTA.value.set(xf.eye.x, xf.eye.y, 0, xf.eye.s);
  u.uTB.value.set(xf.doc.x, xf.doc.y, 0, xf.doc.s);
  u.uTC.value.set(xf.net.x, xf.net.y, 0, xf.net.s);
  u.uTE.value.set(xf.seal.x, xf.seal.y, 0, xf.seal.s);
  u.uTF.value.set(xf.app.x, xf.app.y, 0, xf.app.s);
  u.uTG.value.set(xf.end.x, xf.end.y, 0, xf.end.s);
  rotMat(xf.eye.rx, xf.eye.ry, u.uRA.value);
  rotMat(xf.doc.rx, xf.doc.ry, u.uRB.value);
  rotMat(xf.net.rx, xf.net.ry, u.uRC.value);
  rotMat(xf.app.rx, xf.app.ry, u.uRF.value);
}

const _v = new Vector3();
function project(key, p, rot) {
  const t = xf[key];
  _v.set(p[0], p[1], p[2]).applyMatrix3(rot).multiplyScalar(t.s);
  _v.x += t.x; _v.y += t.y;
  _v.project(camera);
  return [(_v.x + 1) * 0.5 * W, (1 - _v.y) * 0.5 * H];
}

/* ---------- overlays that follow the particles ---------- */
const pins = $$('.pin[data-g]');
const sideNotes = $$('.side-note');
const connectors = $$('.connector');
const amounts = $$('.amount');
const flagTag = $('.flag-tag');
const appPin = $('.app-pin');
let noteHeights = [];

function measureNotes() {
  noteHeights = sideNotes.map((n) => n.firstElementChild.offsetHeight || 80);
}

function placeOverlays() {
  if (!renderer || !anchors.doc) return;
  const M = state.m;
  const rB = uniforms.uRB.value, rC = uniforms.uRC.value, rF = uniforms.uRF.value;
  if (M > 0.5 && M < 2) {
    const pts = ['g1', 'g2', 'g3'].map((g) => project('doc', anchors.doc[g], rB));
    pins.forEach((el, i) => {
      el.style.transform = `translate3d(${pts[i][0].toFixed(1)}px,${pts[i][1].toFixed(1)}px,0)`;
    });
    if (mode === 'wide') {
      const right = Math.max(project('doc', [DOC.PW, DOC.PH, 0], rB)[0], project('doc', [DOC.PW, -DOC.PH, 0], rB)[0]);
      const nx = right + 46;
      let lastBottom = -1e9;
      sideNotes.forEach((el, i) => {
        let y = pts[i][1] - 14;
        if (y < lastBottom + 18) y = lastBottom + 18;
        y = Math.min(y, H - noteHeights[i] - 24);
        lastBottom = y + noteHeights[i];
        el.style.transform = `translate3d(${nx.toFixed(1)}px,${y.toFixed(1)}px,0)`;
        const x1 = pts[i][0] + 13, y1 = pts[i][1];
        const x2 = nx - 6, y2 = y + 14;
        connectors[i].style.width = `${Math.max(0, Math.hypot(x2 - x1, y2 - y1)).toFixed(1)}px`;
        connectors[i].style.transform = `translate3d(${x1.toFixed(1)}px,${y1.toFixed(1)}px,0) rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`;
      });
    }
  }
  if (M > 1.5 && M < 3) {
    amounts.forEach((el, i) => {
      const a = anchors.net.amounts[i];
      if (!a) { el.style.display = 'none'; return; }
      const [x, y] = project('net', a, rC);
      el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
    });
    const [fx, fy] = project('net', anchors.net.cluster, rC);
    flagTag.style.transform = `translate3d(${fx.toFixed(1)}px,${fy.toFixed(1)}px,0)`;
  }
  if (M > 4.5 && M < 6 && anchors.app.flag) {
    const [x, y] = project('app', anchors.app.flag, rF);
    appPin.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
  }
}

/* ---------- counters ---------- */
const counters = $$('.count').map((el) => ({
  el, to: parseFloat(el.dataset.to), pre: el.dataset.pre || '', suf: el.dataset.suf || '', v: { n: 0 },
}));
const fmt = (n) => Math.round(n).toLocaleString('en-GB');
function setCounter(c) {
  c.el.innerHTML = (c.pre ? `<span class="sym">${c.pre}</span>` : '') + fmt(c.v.n) + (c.suf ? `<span class="sym">${c.suf}</span>` : '');
}

/* ---------- scroll timeline ---------- */
let tl, talkTween;
const story = $('#story');
const track = $('.case-track');

function setStoryHeight() {
  const unit = mode === 'stacked' ? 58 : 70;
  story.style.height = `calc(${(T.total * unit).toFixed(0)}vh + 100vh)`;
}
function scanTimeFor(y) { return T.scan + ((1.95 - y) / 3.9) * T.scanDur; }

function buildTimeline() {
  if (tl) { tl.scrollTrigger.kill(); tl.kill(); }
  if (talkTween) { talkTween.scrollTrigger.kill(); talkTween.kill(); }
  const hidden = ['.p-doc .panel-in', '.p-net .panel-in', '.p-cases .panel-in', '.p-price .panel-in', '.p-app .panel-in',
    '.pin .badge', '.side-note .note', '.connector', '.notes-inline li', '.amount span', '.flag-tag span', '.alarm',
    '.case-track', '.price-card', '.app-pin .badge', '.app-note'];
  gsap.set(hidden, { autoAlpha: 0 });
  gsap.set('.p-hero .panel-in', { autoAlpha: 1, y: 0 });
  gsap.set('.sheet', { rotationX: 84, transformPerspective: 1500, transformOrigin: '50% 100%', autoAlpha: 0 });
  gsap.set('.sheet-shade', { opacity: 0.55 });
  counters.forEach((c) => { c.v.n = 0; setCounter(c); });

  const y = reduced ? 0 : 26;
  const inn = (sel, t, d = 0.5) => tl.fromTo(sel, { autoAlpha: 0, y }, { autoAlpha: 1, y: 0, duration: d }, t);
  const out = (sel, t, d = 0.45) => tl.to(sel, { autoAlpha: 0, duration: d }, t);

  tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: story, start: 'top top', end: 'bottom bottom',
      scrub: reduced ? true : 0.9,
      onUpdate: (self) => updateChapter(self.progress * T.total, 0),
    },
  });

  /* 1 eye -> 2 document */
  tl.to('.p-hero .panel-in', { autoAlpha: 0, y: -y, duration: 0.45 }, T.heroOut);
  tl.to('.scroll-cue', { autoAlpha: 0, duration: 0.3 }, T.heroOut - 0.2);
  tl.to(state, { m: 1, duration: 1.6, ease: 'power1.inOut' }, T.morph1);
  inn('.p-doc .panel-in', T.docIn);
  tl.to(state, { scan: 1, duration: T.scanDur }, T.scan);
  [['g1', 'h1'], ['g2', 'h2'], ['g3', 'h3']].forEach(([g, h], i) => {
    const t = scanTimeFor(anchors.doc ? anchors.doc[g][1] : 1 - i);
    tl.to(state, { [h]: 1, duration: 0.35 }, t);
    tl.fromTo(`.pin[data-g="${i + 1}"] .badge`, { autoAlpha: 0, scale: reduced ? 1 : 0.4 }, { autoAlpha: 1, scale: 1, duration: 0.2 }, t + 0.1);
    tl.fromTo(`.side-note[data-g="${i + 1}"] .note`, { autoAlpha: 0, x: reduced ? 0 : -12 }, { autoAlpha: 1, x: 0, duration: 0.3 }, t + 0.18);
    tl.fromTo(connectors[i], { autoAlpha: 0 }, { autoAlpha: 0.75, duration: 0.25 }, t + 0.15);
    tl.fromTo(`.notes-inline li[data-g="${i + 1}"]`, { autoAlpha: 0, y: reduced ? 0 : 10 }, { autoAlpha: 1, y: 0, duration: 0.3 }, t + 0.18);
    if (i === 0 && mode === 'stacked') tl.to('.p-doc .collapse', { autoAlpha: 0, height: 0, marginBottom: 0, duration: 0.3 }, t);
  });
  out(['.p-doc .panel-in', '.pin .badge', '.side-note .note', '.connector'], T.docOut);

  /* 3 money */
  tl.to(state, { m: 2, duration: 1.6, ease: 'power1.inOut' }, T.morph2);
  inn('.p-net .panel-in', T.netIn);
  tl.to(state, { alarm: 1, duration: 0.7 }, T.alarm);
  tl.fromTo('.flag-tag span', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, T.alarm + 0.35);
  tl.fromTo('.amount span', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3, stagger: 0.06 }, T.alarm + 0.25);
  tl.fromTo('.alarm', { autoAlpha: 0, y: reduced ? 0 : 10 }, { autoAlpha: 1, y: 0, duration: 0.35 }, T.alarm + 0.45);
  if (mode === 'stacked') tl.to('.p-net .collapse', { autoAlpha: 0, height: 0, marginBottom: 0, duration: 0.3 }, T.alarm + 0.2);
  out(['.p-net .panel-in', '.amount span', '.flag-tag span'], T.netOut);

  /* 4 the page tips over to paper, case files */
  tl.set('.sheet', { autoAlpha: 1 }, T.flip);
  tl.to('.sheet', { rotationX: 0, duration: 1.0, ease: reduced ? 'none' : 'power2.inOut' }, T.flip);
  tl.to('.sheet-shade', { opacity: 0, duration: 1.0 }, T.flip);
  tl.to(state, { ink: 1, duration: 0.7 }, T.flip + 0.25);
  tl.to('.vignette', { opacity: 0, duration: 0.6 }, T.flip + 0.3);
  tl.to(state, { m: 3, duration: 1.2, ease: 'power1.inOut' }, T.flip);
  inn('.p-cases .panel-in', T.casesIn);
  const cards = $$('.case');
  const cardW = cards[0].offsetWidth || 380;
  const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 28;
  const startX = W + 10;
  const centerX = (i) => W / 2 - (i * (cardW + gap) + cardW / 2);
  const endX = centerX(cards.length - 1);
  tl.set(track, { x: startX }, T.casesIn - 0.01);
  tl.to(track, { autoAlpha: 1, duration: 0.2 }, T.track - 0.2);
  tl.to(track, { x: endX, duration: T.trackEnd - T.track, ease: 'none' }, T.track);
  cards.forEach((card, i) => {
    const tc = T.track + ((startX - centerX(i)) / (startX - endX)) * (T.trackEnd - T.track);
    counters.filter((c) => card.contains(c.el)).forEach((c) => {
      tl.to(c.v, { n: c.to, duration: 0.7, ease: 'power1.out', onUpdate: () => setCounter(c) }, tc - 0.55);
    });
  });
  out(['.p-cases .panel-in', '.case-track'], T.casesOut);

  /* 5 the price is sealed */
  tl.to(state, { m: 4, duration: 1.2, ease: 'power1.inOut' }, T.morph4);
  inn('.p-price .panel-in', T.priceIn);
  tl.fromTo('.price-card', { autoAlpha: 0, y: reduced ? 0 : 30, rotation: reduced ? 0 : -2 }, { autoAlpha: 1, y: 0, rotation: 0, duration: 0.6 }, T.priceIn + 0.1);
  tl.to(state, { press: 1, duration: T.pressDur, ease: 'power2.in' }, T.press);
  if (!reduced) tl.to('.price-card', { keyframes: { x: [0, -4, 3, -2, 0], y: [0, 2, -1, 0, 0] }, duration: 0.2 }, T.press + T.pressDur - 0.03);
  out(['.p-price .panel-in', '.price-card'], T.priceOut);

  /* 6 the software */
  tl.to(state, { m: 5, duration: 1.4, ease: 'power1.inOut' }, T.morph5);
  inn('.p-app .panel-in', T.appIn);
  tl.to(state, { flag: 1, duration: 0.4 }, T.flag);
  tl.fromTo('.app-pin .badge', { autoAlpha: 0, scale: reduced ? 1 : 0.4 }, { autoAlpha: 1, scale: 1, duration: 0.2 }, T.flag + 0.1);
  tl.fromTo('.app-note', { autoAlpha: 0, y: reduced ? 0 : 10 }, { autoAlpha: 1, y: 0, duration: 0.3 }, T.flag + 0.2);
  if (mode === 'stacked') tl.to('.p-app .collapse', { autoAlpha: 0, height: 0, marginBottom: 0, duration: 0.3 }, T.flag);
  out(['.p-app .panel-in', '.app-pin .badge'], T.appOut);

  /* 7 back to ink, the eye returns */
  tl.to('.sheet', { rotationX: 84, duration: 0.9, ease: reduced ? 'none' : 'power2.inOut' }, T.unflip);
  tl.to('.sheet-shade', { opacity: 0.55, duration: 0.9 }, T.unflip);
  tl.set('.sheet', { autoAlpha: 0 }, T.unflip + 0.9);
  tl.to(state, { ink: 0, duration: 0.6 }, T.unflip + 0.1);
  tl.to('.vignette', { opacity: 1, duration: 0.6 }, T.unflip + 0.3);
  tl.to(state, { m: 6, duration: 1.4, ease: 'power1.inOut' }, T.morph6);
  tl.set({}, {}, T.total);

  // the eye closes as the last screen arrives
  talkTween = gsap.fromTo(state, { close: 0 }, {
    close: 1, ease: 'none',
    scrollTrigger: {
      trigger: '#talk', start: 'top bottom', end: 'bottom bottom', scrub: reduced ? true : 0.6,
      onUpdate: (self) => updateChapter(T.total, self.progress),
    },
  });
}

/* ---------- chapter indicator + paper theme ---------- */
const chapterNum = $('.chapter-num');
const chapterName = $('.chapter-name');
const bars = $$('.progress i');
let currentCh = -1;
let lastT = 0, lastTalk = 0;
function updateChapter(t, talk) {
  if (t !== undefined) lastT = t;
  if (talk !== undefined) lastTalk = talk;
  t = lastT;
  for (let i = 0; i < 7; i++) {
    let v = (t - CH[i]) / (CH[i + 1] - CH[i]);
    if (i === 6) v = v * 0.6 + lastTalk * 0.4;
    bars[i].style.transform = `scaleX(${Math.min(1, Math.max(0, v)).toFixed(3)})`;
  }
  let ch = 0;
  for (let i = 0; i < 7; i++) if (t >= CH[i]) ch = i;
  if (ch !== currentCh) {
    currentCh = ch;
    chapterNum.textContent = `${ch + 1} / 7`;
    chapterName.textContent = CH_NAMES[ch];
  }
  root.classList.toggle('is-paper', t > T.flip + 0.8 && t < T.unflip + 0.45);
  root.classList.toggle('is-seal', t > T.morph4 + 0.25 && t < T.priceOut + 0.45);
}

function scrollToTime(t) {
  if (!tl) return;
  const st = tl.scrollTrigger;
  window.scrollTo({ top: st.start + (st.end - st.start) * (t / tl.duration()), behavior: reduced ? 'auto' : 'smooth' });
}
window.__pythiaGoto = (t) => {
  const st = tl.scrollTrigger;
  window.scrollTo({ top: st.start + (st.end - st.start) * (t / tl.duration()), behavior: 'auto' });
};
$$('[data-goto]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const t = parseFloat(a.dataset.goto);
    if (Number.isNaN(t)) return;
    e.preventDefault();
    scrollToTime(t);
  });
});

/* ---------- pointer ---------- */
addEventListener('pointermove', (e) => {
  if (coarse) return;
  const [ex, ey] = state.m > 5.5 ? endCenter : eyeCenter;
  look.tx = Math.max(-1, Math.min(1, (e.clientX - ex) / (W * 0.4)));
  look.ty = Math.max(-1, Math.min(1, (e.clientY - ey) / (H * 0.45)));
}, { passive: true });

/* ---------- intro + blink ---------- */
function intro() {
  if (reduced) { state.open = 1; return; }
  gsap.to(state, { open: 1, duration: 2.0, ease: 'power3.out', delay: 0.35 });
  gsap.from('.p-hero .reveal', { autoAlpha: 0, y: 18, duration: 1.0, ease: 'power3.out', stagger: 0.12, delay: 0.9 });
  const blink = () => {
    if (state.m < 0.05 && !document.hidden) gsap.to(state, { open: 0.06, duration: 0.09, ease: 'power2.in', yoyo: true, repeat: 1 });
    gsap.delayedCall(4.5 + Math.random() * 4, blink);
  };
  gsap.delayedCall(5, blink);
}

/* ---------- render loop ---------- */
let last = performance.now(), time = 0, running = true;
function frame(now) {
  if (!running) return;
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (!reduced) time += dt;
  if (coarse && !reduced) {
    look.tx = Math.sin(time * 0.37) * 0.55;
    look.ty = Math.sin(time * 0.23 + 1) * 0.35;
  }
  const k = reduced ? 1 : 1 - Math.pow(0.001, dt);
  look.x += (look.tx - look.x) * k;
  look.y += (look.ty - look.y) * k;

  const u = uniforms;
  u.uTime.value = time;
  u.uM.value = state.m;
  u.uOpen.value = state.open;
  u.uClose.value = state.close;
  u.uScan.value = state.scan;
  u.uHi.value.set(state.h1, state.h2, state.h3);
  u.uAlarm.value = state.alarm;
  u.uInk.value = state.ink;
  u.uPress.value = state.press;
  u.uFlag.value = state.flag;
  u.uLook.value.set(reduced ? 0 : look.x * 0.17, reduced ? 0 : -look.y * 0.1);

  xf.eye.ry = reduced ? 0 : look.x * 0.12;
  xf.eye.rx = reduced ? 0 : look.y * 0.08;
  if (!reduced) {
    xf.net.ry = Math.sin(time * 0.12) * 0.16;
    xf.net.rx = Math.sin(time * 0.09) * 0.05;
  }
  applyXf();
  placeOverlays();
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) running = false;
  else if (!running && renderer) { running = true; last = performance.now(); requestAnimationFrame(frame); }
});

/* ---------- resize ---------- */
let resizeTimer;
addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const m = getMode();
    if (m !== mode) {
      mode = m;
      root.dataset.mode = mode;
      if (renderer) {
        geometry.dispose();
        geometry = buildGeometry();
        points.geometry = geometry;
      }
    }
    setStoryHeight();
    layout();
    measureNotes();
    buildTimeline();
    ScrollTrigger.refresh();
  }, 180);
});

/* ---------- go ---------- */
function start() {
  initGL();
  setStoryHeight();
  layout();
  measureNotes();
  buildTimeline();
  updateChapter(0, 0);
  const talk = $('#talk');
  const checkAfter = () => root.classList.toggle('is-after', talk.getBoundingClientRect().bottom < innerHeight * 0.6);
  addEventListener('scroll', checkAfter, { passive: true });
  checkAfter();
  intro();
  if (renderer) requestAnimationFrame(frame);
  root.classList.add('is-ready');
}

if (document.fonts && document.fonts.ready) document.fonts.ready.then(start);
else start();
