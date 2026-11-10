import {
  WebGLRenderer, Scene, PerspectiveCamera, BufferGeometry, BufferAttribute,
  ShaderMaterial, Points, Vector2, Vector3, Vector4, Matrix3, NormalBlending,
  LinearSRGBColorSpace,
} from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { rng, buildEye, buildDoc, buildNet, assemble, EYE, DOC } from './shapes.js';
import { vertex, fragment } from './shaders.js';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse = matchMedia('(pointer: coarse)').matches;
if (reduced) root.classList.add('is-reduced');

/* ---------- timeline positions (in timeline seconds) ---------- */
const T = {
  heroOut: 0.6, morph1: 0.7, docIn: 1.9, scan: 2.5, scanDur: 3.0,
  docOut: 6.0, morph2: 6.2, netIn: 7.4, alarm: 8.3, end: 10.0, total: 10.8,
  ch2: 1.6, ch3: 6.3,
};

/* ---------- state driven by scroll + time ---------- */
const state = { m: 0, open: reduced ? 1 : 0, scan: 0, h1: 0, h2: 0, h3: 0, alarm: 0, fade: 1 };
const look = { x: 0, y: 0, tx: 0, ty: 0 };

/* ---------- mode / layout ---------- */
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
let renderer;
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

const uniforms = {
  uTime: { value: 0 }, uM: { value: 0 }, uOpen: { value: state.open }, uScan: { value: 0 },
  uHi: { value: new Vector3() }, uAlarm: { value: 0 }, uFade: { value: 1 },
  uLook: { value: new Vector2() }, uPx: { value: 1 }, uSize: { value: 2.2 },
  uView: { value: new Vector2(5, 3) }, uRows: { value: 50 },
  uReduced: { value: reduced ? 1 : 0 },
  uTA: { value: new Vector4(0, 0, 0, 1) }, uTB: { value: new Vector4(0, 0, 0, 1) }, uTC: { value: new Vector4(0, 0, 0, 1) },
  uRA: { value: new Matrix3() }, uRB: { value: new Matrix3() }, uRC: { value: new Matrix3() },
  cPaper: { value: new Vector3(0.925, 0.894, 0.824) },
  cAmber: { value: new Vector3(0.941, 0.655, 0.227) },
  cRed: { value: new Vector3(0.886, 0.333, 0.247) },
  cDust: { value: new Vector3(0.56, 0.6, 0.7) },
};

function particleCount() {
  if (mode === 'stacked') return lowPower ? 5200 : 6800;
  return lowPower ? 9000 : 14000;
}

function buildGeometry() {
  const N = particleCount();
  const k = N / 14000;
  const R = rng(7);
  const eye = assemble(buildEye(k, R), N, R, [8.5, 5.5, -4, 1.2]);
  const docShape = buildDoc(k, R);
  const doc = assemble(docShape, N, R, [5.5, 4.2, -5, -0.5]);
  const netShape = buildNet(k, R, mode !== 'stacked');
  const net = assemble(netShape, N, R, [6, 4.4, -5, -0.8]);
  anchors = { doc: docShape.anchors, net: netShape.anchors };

  const pos = new Float32Array(N * 3), aDoc = new Float32Array(N * 3), aNet = new Float32Array(N * 3);
  const aRnd = new Float32Array(N * 4), aEyeI = new Float32Array(N * 2), aDocI = new Float32Array(N * 2), aNetI = new Float32Array(N * 4);
  for (let i = 0; i < N; i++) {
    const e = eye[i], d = doc[i], n = net[i];
    pos.set([e[0], e[1], e[2]], i * 3);
    aDoc.set([d[0], d[1], d[2]], i * 3);
    aNet.set([n[0], n[1], n[2]], i * 3);
    aEyeI.set([e[3], e[4]], i * 2);
    aDocI.set([d[3], d[4]], i * 2);
    aNetI.set([n[3], n[4], n[5], n[6]], i * 4);
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

/* ---------- shape transforms (shape units -> world) ---------- */
const xf = { eye: { x: 0, y: 0, s: 1, rx: 0, ry: 0 }, doc: { x: 0, y: 0, s: 1, rx: 0, ry: 0 }, net: { x: 0, y: 0, s: 1, rx: 0, ry: 0 } };
let W = innerWidth, H = innerHeight, worldPerPx = 1;
let eyeCenter = [W / 2, H / 2];

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
  if (mode === 'stacked') {
    const top = 96, bottom = H * 0.5;
    const cy = (top + bottom) / 2;
    eyeCenter = [W / 2, cy];
    let [x, y] = toWorld(W / 2, cy);
    xf.eye = { x, y, s: (Math.min(W * 0.94, (bottom - top) * 2.2) * worldPerPx) / eyeW, rx: 0, ry: 0 };
    const dpx = Math.min(bottom - top - 10, W * 0.7 * (docH / docW));
    xf.doc = { x, y: y + 0.02, s: (dpx * worldPerPx) / docH, rx: 0.05, ry: -0.12 };
    const npx = Math.min(W * 0.96, (bottom - top) * 1.02);
    xf.net = { x, y, s: (npx * worldPerPx) / 4.0, rx: 0, ry: 0 };
  } else {
    // eye: right of the headline, big
    const ecx = W * 0.72;
    const ew = Math.min(W * (mode === 'wide' ? 0.5 : 0.48), H * 1.0);
    eyeCenter = [ecx, H * 0.47];
    let [ex, ey] = toWorld(ecx, H * 0.47);
    xf.eye = { x: ex, y: ey, s: (ew * worldPerPx) / eyeW, rx: 0, ry: 0 };
    // document
    const xL = Math.min(Math.max(W * 0.38, 420), 560);
    const xR = mode === 'wide' ? W - 330 : W - 48;
    const avail = xR - xL;
    const dH = Math.min(H * 0.8, avail * 0.92 * (docH / docW));
    const [dx, dy] = toWorld((xL + xR) / 2, H * 0.53);
    xf.doc = { x: dx, y: dy, s: (dH * worldPerPx) / docH, rx: 0.06, ry: -0.2 };
    // network
    const nW = Math.min(W - xL - 40, H * 0.8 * 1.75);
    const [nx, ny] = toWorld(xL + (W - xL - 20) / 2, H * 0.52);
    xf.net = { x: nx, y: ny, s: (nW * worldPerPx) / 6.2, rx: 0, ry: 0 };
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

const _m = new Matrix3();
function rotMat(rx, ry, out) {
  const cx = Math.cos(rx), sx = Math.sin(rx), cy = Math.cos(ry), sy = Math.sin(ry);
  // Ry * Rx
  out.set(
    cy, sy * sx, sy * cx,
    0, cx, -sx,
    -sy, cy * sx, cy * cx,
  );
  return out;
}
function applyXf() {
  uniforms.uTA.value.set(xf.eye.x, xf.eye.y, 0, xf.eye.s);
  uniforms.uTB.value.set(xf.doc.x, xf.doc.y, 0, xf.doc.s);
  uniforms.uTC.value.set(xf.net.x, xf.net.y, 0, xf.net.s);
  rotMat(xf.eye.rx, xf.eye.ry, uniforms.uRA.value);
  rotMat(xf.doc.rx, xf.doc.ry, uniforms.uRB.value);
  rotMat(xf.net.rx, xf.net.ry, uniforms.uRC.value);
}

const _v = new Vector3();
function project(key, p, rot) {
  const t = xf[key];
  _v.set(p[0], p[1], p[2]).applyMatrix3(rot).multiplyScalar(t.s);
  _v.x += t.x; _v.y += t.y;
  _v.project(camera);
  return [(_v.x + 1) * 0.5 * W, (1 - _v.y) * 0.5 * H];
}

/* ---------- overlay positioning ---------- */
const pins = $$('.pin[data-g]');
const sideNotes = $$('.side-note');
const connectors = $$('.connector');
const amounts = $$('.amount');
const flagTag = $('.flag-tag');
let noteHeights = [];

function measureNotes() {
  noteHeights = sideNotes.map((n) => n.firstElementChild.offsetHeight || 80);
}

function placeOverlays() {
  if (!renderer || !anchors.doc) return;
  const rB = uniforms.uRB.value, rC = uniforms.uRC.value;
  // doc badges
  const pts = ['g1', 'g2', 'g3'].map((g) => project('doc', anchors.doc[g], rB));
  pins.forEach((el, i) => {
    const [x, y] = pts[i];
    el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
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
      const c = connectors[i];
      const x1 = pts[i][0] + 13, y1 = pts[i][1];
      const x2 = nx - 6, y2 = y + 14;
      const len = Math.hypot(x2 - x1, y2 - y1);
      const ang = Math.atan2(y2 - y1, x2 - x1);
      c.style.width = `${Math.max(0, len).toFixed(1)}px`;
      c.style.transform = `translate3d(${x1.toFixed(1)}px,${y1.toFixed(1)}px,0) rotate(${ang}rad)`;
    });
  }
  // net amounts + flag
  amounts.forEach((el, i) => {
    const a = anchors.net.amounts[i];
    if (!a) { el.style.display = 'none'; return; }
    const [x, y] = project('net', a, rC);
    el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
  });
  const [fx, fy] = project('net', anchors.net.cluster, rC);
  flagTag.style.transform = `translate3d(${fx.toFixed(1)}px,${fy.toFixed(1)}px,0)`;
}

/* ---------- scroll timeline ---------- */
let tl;
const story = $('#story');

function setStoryHeight() {
  const unit = mode === 'stacked' ? 66 : 78;
  story.style.height = `calc(${(T.total * unit).toFixed(0)}vh + 100vh)`;
}

function scanTimeFor(y) {
  // shader: scanY = mix(1.95, -1.95, uScan)
  return T.scan + ((1.95 - y) / 3.9) * T.scanDur;
}

function buildTimeline() {
  if (tl) { tl.scrollTrigger.kill(); tl.kill(); }
  gsap.set(['.p-doc .panel-in', '.p-net .panel-in', '.pin .badge', '.side-note .note', '.connector', '.notes-inline li', '.amount span', '.flag-tag span', '.alarm'], { autoAlpha: 0 });
  gsap.set('.p-hero .panel-in', { autoAlpha: 1, y: 0 });
  const y = reduced ? 0 : 26;
  tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: story, start: 'top top', end: 'bottom bottom',
      scrub: reduced ? true : 0.9,
      onUpdate: (self) => updateChapter(self.progress * T.total),
    },
  });
  tl.to('.p-hero .panel-in', { autoAlpha: 0, y: -y, duration: 0.45 }, T.heroOut);
  tl.to('.scroll-cue', { autoAlpha: 0, duration: 0.3 }, T.heroOut - 0.2);
  tl.to(state, { m: 1, duration: 1.6, ease: 'power1.inOut' }, T.morph1);
  tl.fromTo('.p-doc .panel-in', { autoAlpha: 0, y }, { autoAlpha: 1, y: 0, duration: 0.5 }, T.docIn);
  tl.to(state, { scan: 1, duration: T.scanDur }, T.scan);

  const groups = [['g1', 'h1'], ['g2', 'h2'], ['g3', 'h3']];
  groups.forEach(([g, h], i) => {
    const t = scanTimeFor(anchors.doc ? anchors.doc[g][1] : 1 - i);
    tl.to(state, { [h]: 1, duration: 0.35 }, t);
    tl.fromTo(`.pin[data-g="${i + 1}"] .badge`, { autoAlpha: 0, scale: reduced ? 1 : 0.4 }, { autoAlpha: 1, scale: 1, duration: 0.2 }, t + 0.1);
    tl.fromTo(`.side-note[data-g="${i + 1}"] .note`, { autoAlpha: 0, x: reduced ? 0 : -12 }, { autoAlpha: 1, x: 0, duration: 0.3 }, t + 0.18);
    tl.fromTo(connectors[i], { autoAlpha: 0 }, { autoAlpha: 0.75, duration: 0.25 }, t + 0.15);
    tl.fromTo(`.notes-inline li[data-g="${i + 1}"]`, { autoAlpha: 0, y: reduced ? 0 : 10 }, { autoAlpha: 1, y: 0, duration: 0.3 }, t + 0.18);
    if (i === 0 && mode === 'stacked') tl.to('.p-doc .collapse', { autoAlpha: 0, height: 0, marginBottom: 0, duration: 0.3 }, t);
  });

  tl.to(['.p-doc .panel-in', '.pin .badge', '.side-note .note', '.connector'], { autoAlpha: 0, duration: 0.45 }, T.docOut);
  tl.to(state, { m: 2, duration: 1.6, ease: 'power1.inOut' }, T.morph2);
  tl.fromTo('.p-net .panel-in', { autoAlpha: 0, y }, { autoAlpha: 1, y: 0, duration: 0.5 }, T.netIn);
  tl.to(state, { alarm: 1, duration: 0.7 }, T.alarm);
  tl.fromTo('.flag-tag span', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, T.alarm + 0.35);
  tl.fromTo('.amount span', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3, stagger: 0.06 }, T.alarm + 0.25);
  tl.fromTo('.alarm', { autoAlpha: 0, y: reduced ? 0 : 10 }, { autoAlpha: 1, y: 0, duration: 0.35 }, T.alarm + 0.45);
  if (mode === 'stacked') tl.to('.p-net .collapse', { autoAlpha: 0, height: 0, marginBottom: 0, duration: 0.3 }, T.alarm + 0.2);
  tl.to(['.p-net .panel-in', '.amount span', '.flag-tag span'], { autoAlpha: 0, duration: 0.5 }, T.end);
  tl.to(state, { fade: mode === 'stacked' ? 0.14 : 0.24, duration: 0.8 }, T.end);
  tl.set({}, {}, T.total);
}

/* ---------- chapter indicator ---------- */
const chapterNum = $('.chapter-num');
const chapterName = $('.chapter-name');
const bars = $$('.progress i');
const chapters = ['The eye', 'The document', 'The money'];
let currentCh = -1;
function updateChapter(t) {
  const segs = [t / T.ch2, (t - T.ch2) / (T.ch3 - T.ch2), (t - T.ch3) / (T.total - T.ch3)];
  segs.forEach((v, i) => { bars[i].style.transform = `scaleX(${Math.min(1, Math.max(0, v)).toFixed(3)})`; });
  const ch = t < T.ch2 ? 0 : t < T.ch3 ? 1 : 2;
  if (ch !== currentCh) {
    currentCh = ch;
    chapterNum.textContent = `${ch + 1} / 7`;
    chapterName.textContent = chapters[ch];
  }
}

function scrollToTime(t) {
  if (!tl) return;
  const st = tl.scrollTrigger;
  const y = st.start + (st.end - st.start) * (t / tl.duration());
  window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
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

/* ---------- pointer: the eye follows ---------- */
addEventListener('pointermove', (e) => {
  if (coarse) return;
  const [ex, ey] = eyeCenter;
  look.tx = Math.max(-1, Math.min(1, (e.clientX - ex) / (W * 0.4)));
  look.ty = Math.max(-1, Math.min(1, (e.clientY - ey) / (H * 0.45)));
}, { passive: true });

/* ---------- intro + blink ---------- */
function intro() {
  if (reduced) { state.open = 1; return; }
  gsap.to(state, { open: 1, duration: 2.0, ease: 'power3.out', delay: 0.35 });
  gsap.from('.p-hero .reveal', { autoAlpha: 0, y: 18, duration: 1.0, ease: 'power3.out', stagger: 0.12, delay: 0.9 });
  const blink = () => {
    if (state.m < 0.05 && !document.hidden) {
      gsap.to(state, { open: 0.06, duration: 0.09, ease: 'power2.in', yoyo: true, repeat: 1 });
    }
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
  const ease = reduced ? 1 : 1 - Math.pow(0.001, dt);
  look.x += (look.tx - look.x) * ease;
  look.y += (look.ty - look.y) * ease;

  uniforms.uTime.value = time;
  uniforms.uM.value = state.m;
  uniforms.uOpen.value = state.open;
  uniforms.uScan.value = state.scan;
  uniforms.uHi.value.set(state.h1, state.h2, state.h3);
  uniforms.uAlarm.value = state.alarm;
  uniforms.uFade.value = state.fade;
  uniforms.uLook.value.set(reduced ? 0 : look.x * 0.17, reduced ? 0 : -look.y * 0.1);

  // gentle life in the shapes
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
      setStoryHeight();
      layout();
      measureNotes();
      buildTimeline();
      ScrollTrigger.refresh();
    } else {
      layout();
      measureNotes();
    }
  }, 150);
});

/* ---------- go ---------- */
function start() {
  initGL();
  setStoryHeight();
  layout();
  measureNotes();
  buildTimeline();
  updateChapter(0);
  const more = $('#more');
  const checkAfter = () => root.classList.toggle('is-after', more.getBoundingClientRect().top < 110);
  addEventListener('scroll', checkAfter, { passive: true });
  checkAfter();
  intro();
  if (renderer) requestAnimationFrame(frame);
  root.classList.add('is-ready');
}

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(start);
} else {
  start();
}
