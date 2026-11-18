// Scroll-Szene "So geht's": Abschleppwagen fährt vor, zieht das Auto auf die
// Ladefläche und fährt ab. Bauen: siehe README (esbuild, Ergebnis nach
// /auto-schrottplatz/szene.js).
import {
  Scene, PerspectiveCamera, WebGLRenderer, Color, Fog, Group, Mesh, Shape,
  ExtrudeGeometry, BoxGeometry, CylinderGeometry, PlaneGeometry,
  MeshStandardMaterial, MeshBasicMaterial, HemisphereLight, DirectionalLight,
  CanvasTexture, SRGBColorSpace, PCFSoftShadowMap, Vector3, MathUtils
} from "three";

const TEAL = 0x0097b2;
const A = Math.asin((0.95 - 0.03) / 3.5); // Kippwinkel der Ladefläche
const BED_H = 0.95;                        // Höhe der Ladefläche
const XP = 2.4;                            // Halteposition des Abschleppwagens (Drehpunkt)
const S_START = -6.9, S_JOIN = -2.1, S_END = -0.9;
const SLIDE = 2.0;                         // so weit fährt die Ladefläche zum Aufladen nach hinten
const CAB = 1.9;                           // Versatz des Fahrerhauses nach vorn

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const seg = (p, a, b) => clamp01((p - a) / (b - a));
const ease = (t) => t * t * (3 - 2 * t);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeIn = (t) => t * t * t;

function mat(color, opts) {
  return new MeshStandardMaterial(Object.assign({ color, roughness: 0.75, metalness: 0.05, flatShading: true }, opts || {}));
}

function extrude(points, width, material) {
  const sh = new Shape();
  points.forEach((p, i) => (i ? sh.lineTo(p[0], p[1]) : sh.moveTo(p[0], p[1])));
  sh.closePath();
  const g = new ExtrudeGeometry(sh, { depth: width, bevelEnabled: false });
  g.translate(0, 0, -width / 2);
  const m = new Mesh(g, material);
  m.castShadow = true;
  return m;
}

function box(w, h, d, material, x, y, z) {
  const m = new Mesh(new BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  m.castShadow = true;
  return m;
}

function wheel(r, w, x, z, list) {
  const g = new Group();
  const tire = new Mesh(new CylinderGeometry(r, r, w, 18), mat(0x23282b, { roughness: 0.95 }));
  tire.rotation.x = Math.PI / 2;
  tire.castShadow = true;
  const hub = new Mesh(new CylinderGeometry(r * 0.52, r * 0.52, w + 0.03, 6), mat(0xb9c0c4, { metalness: 0.4 }));
  hub.rotation.x = Math.PI / 2;
  g.add(tire, hub);
  g.position.set(x, r, z);
  list.push({ g, r });
  return g;
}

function buildCar(wheels) {
  const car = new Group();
  const paint = mat(0xb5412f);
  const glass = mat(0x1e2b31, { roughness: 0.25, metalness: 0.3 });
  car.add(extrude([[-2, 0.35], [-2, 0.8], [-1.75, 0.92], [-1.15, 0.95], [0.95, 0.95], [1.85, 0.85], [2, 0.62], [2, 0.35]], 1.62, paint));
  car.add(extrude([[-1.15, 0.95], [-0.75, 1.33], [0.45, 1.33], [0.95, 0.95]], 1.46, glass));
  car.add(box(1.28, 0.07, 1.5, paint, -0.15, 1.36, 0));
  car.add(box(0.1, 0.16, 1.66, mat(0x2a3034), 1.99, 0.42, 0));
  car.add(box(0.1, 0.16, 1.66, mat(0x2a3034), -1.99, 0.42, 0));
  const lamp = new MeshBasicMaterial({ color: 0xf4efd9 });
  const tail = new MeshBasicMaterial({ color: 0x8c1f17 });
  car.add(box(0.04, 0.12, 0.3, lamp, 2.0, 0.7, 0.55), box(0.04, 0.12, 0.3, lamp, 2.0, 0.7, -0.55));
  car.add(box(0.04, 0.1, 0.3, tail, -2.0, 0.72, 0.55), box(0.04, 0.1, 0.3, tail, -2.0, 0.72, -0.55));
  [[1.25, 0.8], [1.25, -0.8], [-1.25, 0.8], [-1.25, -0.8]].forEach(([x, z]) => car.add(wheel(0.32, 0.22, x, z, wheels)));
  return car;
}

function label() {
  const c = document.createElement("canvas");
  c.width = 1024; c.height = 128;
  const x = c.getContext("2d");
  x.fillStyle = "#0097b2"; x.fillRect(0, 0, 1024, 128);
  x.fillStyle = "#ffffff";
  x.font = "700 78px Archivo, Arial, sans-serif";
  x.textAlign = "center"; x.textBaseline = "middle";
  x.fillText("AUTO-SCHROTTPLATZ.DE", 512, 68);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

function buildTruck(wheels) {
  const truck = new Group();
  const teal = mat(TEAL);
  const dark = mat(0x2b3338);
  const glass = mat(0x1e2b31, { roughness: 0.25, metalness: 0.3 });

  truck.add(box(6.6, 0.3, 1.0, dark, 2.7, 0.6, 0));
  const cab = new Group();
  cab.position.x = CAB;
  truck.add(cab);
  cab.add(extrude([[1.95, 0.5], [1.95, 2.35], [3.2, 2.35], [3.75, 1.55], [4.25, 1.45], [4.3, 0.5]], 2.2, teal));
  cab.add(extrude([[2.15, 1.6], [2.15, 2.2], [3.12, 2.2], [3.55, 1.6]], 2.23, glass));
  // Frontscheibe
  const ws = new Mesh(new PlaneGeometry(0.82, 1.9), glass);
  ws.rotation.set(-Math.PI / 2, 0, 0);
  const wsHold = new Group();
  wsHold.add(ws);
  wsHold.rotation.z = Math.atan2(-0.8, 0.55);
  wsHold.position.set(3.49, 1.965, 0);
  cab.add(wsHold);
  cab.add(box(0.12, 0.3, 2.24, dark, 4.3, 0.62, 0));
  const lamp = new MeshBasicMaterial({ color: 0xf4efd9 });
  cab.add(box(0.04, 0.16, 0.34, lamp, 4.31, 1.0, 0.8), box(0.04, 0.16, 0.34, lamp, 4.31, 1.0, -0.8));

  const beacon = new Mesh(new BoxGeometry(0.7, 0.14, 0.26), new MeshBasicMaterial({ color: 0xffb300 }));
  beacon.position.set(2.6, 2.44, 0);
  cab.add(beacon);

  // Ladefläche, dreht um den Ursprung der Gruppe
  const bed = new Group();
  bed.position.set(0, BED_H, 0);
  bed.add(box(5.2, 0.12, 2.2, mat(0x3c474d), -0.9, -0.06, 0));
  bed.add(box(5.2, 0.2, 0.08, teal, -0.9, 0.06, 1.1), box(5.2, 0.2, 0.08, teal, -0.9, 0.06, -1.1));
  bed.add(box(0.1, 0.8, 2.2, dark, 1.7, 0.4, 0));
  const tex = label();
  [1.145, -1.145].forEach((z) => {
    const p = new Mesh(new PlaneGeometry(3.2, 0.4), new MeshBasicMaterial({ map: tex }));
    p.position.set(-0.9, -0.02, z);
    if (z < 0) p.rotation.y = Math.PI;
    bed.add(p);
  });
  truck.add(bed);

  [[3.3 + CAB, 1.02], [3.3 + CAB, -1.02]].forEach(([x, z]) => truck.add(wheel(0.45, 0.3, x, z, wheels)));
  [[0.95, 0.98], [0.95, -0.98], [0.05, 0.98], [0.05, -0.98]].forEach(([x, z]) => truck.add(wheel(0.42, 0.3, x, z, wheels)));
  return { truck, bed, beacon };
}

// Weg des Autos vom Boden auf die Ladefläche, rückwärts vom Übergabepunkt integriert
function buildPath() {
  const n = 240, pts = new Array(n + 1);
  const pitchAt = (s) => A * ease(seg(s, -4.9, S_JOIN));
  let x = XP + S_JOIN * Math.cos(A), y = BED_H + S_JOIN * Math.sin(A);
  const ds = (S_JOIN - S_START) / n;
  pts[n] = { x, y, pitch: A };
  for (let i = n - 1; i >= 0; i--) {
    const s = S_START + (i + 0.5) * ds, p = pitchAt(s);
    x -= Math.cos(p) * ds; y -= Math.sin(p) * ds;
    pts[i] = { x, y: Math.max(0, y), pitch: pitchAt(S_START + i * ds) };
  }
  return (s) => {
    const f = clamp01((s - S_START) / (S_JOIN - S_START)) * n;
    const i = Math.min(n - 1, Math.floor(f)), t = f - i, a = pts[i], b = pts[i + 1];
    return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, pitch: a.pitch + (b.pitch - a.pitch) * t };
  };
}

export function init(section) {
  const canvas = section.querySelector("canvas");
  const sticky = section.querySelector(".stage-sticky");
  const steps = [...section.querySelectorAll(".stage-steps li")];

  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  const SKY = 0xe4eaed;
  const scene = new Scene();
  scene.background = new Color(SKY);
  scene.fog = new Fog(SKY, 26, 60);

  const camera = new PerspectiveCamera(32, 1, 0.1, 120);

  scene.add(new HemisphereLight(0xffffff, 0xaab4b9, 1.15));
  const sun = new DirectionalLight(0xfff4e2, 2.1);
  sun.position.set(-7, 13, 9);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -20, right: 30, top: 12, bottom: -12, near: 1, far: 50 });
  sun.shadow.bias = -0.0015;
  scene.add(sun);

  const ground = new Mesh(new PlaneGeometry(240, 240), new MeshStandardMaterial({ color: 0xcdd5d9, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Parkbucht und Fahrbahnmarkierung
  const white = new MeshBasicMaterial({ color: 0xf6f8f9 });
  const line = (w, d, x, z) => { const m = new Mesh(new PlaneGeometry(w, d), white); m.rotation.x = -Math.PI / 2; m.position.set(x, 0.006, z); scene.add(m); };
  line(5.6, 0.1, -4.7, 1.55); line(5.6, 0.1, -4.7, -1.55); line(0.1, 3.2, -7.5, 0);
  for (let i = -8; i < 12; i++) line(1.6, 0.12, i * 4.2, 3.6);

  const wheelsCar = [], wheelsTruck = [];
  const car = buildCar(wheelsCar);
  const { truck, bed, beacon } = buildTruck(wheelsTruck);
  scene.add(car, truck);
  const path = buildPath();

  let target = 0, p = 0, visible = false, running = false, w = 0, h = 0;
  let lastTruckX = null, lastS = null, lastStep = -1;
  const look = new Vector3();

  function resize() {
    const r = sticky.getBoundingClientRect();
    w = Math.round(r.width); h = Math.round(r.height);
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Bild verschieben, damit die Fahrzeuge neben bzw. unter dem Textkasten stehen
    if (w >= 900) camera.setViewOffset(w, h, -w * 0.17, 0, w, h);
    else camera.setViewOffset(w, h, 0, -h * 0.17, w, h);
    camera.updateProjectionMatrix();
  }

  function readScroll() {
    const r = section.getBoundingClientRect();
    const span = r.height - sticky.offsetHeight;
    target = span > 0 ? clamp01((sticky.getBoundingClientRect().top - r.top) / span) : 0;
  }

  function frame(time) {
    if (!visible) { running = false; return; }
    p += (target - p) * 0.12;
    if (Math.abs(target - p) < 0.0004) p = target;

    const tIn = easeOut(seg(p, 0.14, 0.4));
    const tTilt = ease(seg(p, 0.4, 0.5));
    const tLoad = ease(seg(p, 0.5, 0.74));
    const tLevel = ease(seg(p, 0.74, 0.83));
    const tOut = easeIn(seg(p, 0.85, 1));

    const truckX = XP + (1 - tIn) * 22 + tOut * 24;
    const down = tTilt - tLevel;
    const angle = A * down;
    const shift = SLIDE * (1 - down);
    truck.position.x = truckX;
    bed.rotation.z = angle;
    bed.position.x = shift;

    const s = S_START + (S_END - S_START) * tLoad;
    if (s < S_JOIN) {
      const q = path(s);
      car.position.set(q.x, q.y, 0);
      car.rotation.z = q.pitch;
    } else {
      car.position.set(truckX + shift + s * Math.cos(angle), BED_H + s * Math.sin(angle), 0);
      car.rotation.z = angle;
    }

    if (lastTruckX !== null) wheelsTruck.forEach((o) => (o.g.rotation.z -= (truckX - lastTruckX) / o.r));
    if (lastS !== null) wheelsCar.forEach((o) => (o.g.rotation.z -= (s - lastS) / o.r));
    lastTruckX = truckX; lastS = s;

    beacon.material.color.setHex(Math.floor(time / 380) % 2 && p > 0.12 && p < 0.99 ? 0xffd36b : 0xe08a00);

    // Kamera: erst nah am Auto, dann weiter weg für das Aufladen, am Ende dem Wagen hinterher
    const wide = ease(seg(p, 0.1, 0.42));
    const follow = ease(seg(p, 0.85, 1));
    const narrow = camera.aspect < 1;
    const theta = MathUtils.degToRad(MathUtils.lerp(52, 24, wide) - follow * 30);
    let radius, tx;
    if (narrow) {
      // Hochformat: nah am Auto bleiben und mitfahren, statt alles zu zeigen
      radius = MathUtils.lerp(19, 31, wide);
      tx = car.position.x + MathUtils.lerp(0.2, 1.6, wide);
    } else {
      radius = (MathUtils.lerp(11.5, 30, wide) + follow * 3) * (camera.aspect < 1.5 ? 1.2 : 1);
      tx = MathUtils.lerp(-4.6, 0.6, wide) + follow * 8;
    }
    scene.fog.near = radius * 1.3 + 8;
    scene.fog.far = radius * 2.8 + 22;
    look.set(tx, MathUtils.lerp(0.75, 1.15, wide), 0);
    camera.position.set(tx + Math.sin(theta) * radius * 0.55 - radius * 0.1, MathUtils.lerp(3.4, 6.4, wide) * (narrow ? 1.3 : 1), Math.cos(theta) * radius);
    camera.lookAt(look);

    const step = p < 0.3 ? 0 : p < 0.86 ? 1 : 2;
    if (step !== lastStep) { steps.forEach((li, i) => li.classList.toggle("on", i === step)); section.setAttribute("data-step", step); lastStep = step; }

    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  function start() { if (!running && visible) { running = true; requestAnimationFrame(frame); } }

  section.classList.add("is3d");
  resize(); readScroll(); p = target;
  window.addEventListener("resize", () => { resize(); readScroll(); });
  window.addEventListener("scroll", readScroll, { passive: true });
  new IntersectionObserver((e) => { visible = e[0].isIntersecting; start(); }, { rootMargin: "100px" }).observe(section);
}
