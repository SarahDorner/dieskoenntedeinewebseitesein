// Point shapes for the particle story. All shapes live in their own "shape units".
// Each point: [x, y, z, a, b, c, d]  (a..d = per-shape info)

export function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------------- Eye: an engraved, guilloche-style eye ---------------- */
// a: type (0 dust, 1 lid, 2 iris, 3 pupil ring, 4 glint), b: param
export const EYE = { W: 2.0, H: 0.92 };

export function buildEye(k, R) {
  const P = [];
  const { W, H } = EYE;
  const lid = (x, e) => (H + e) * Math.pow(Math.max(0, 1 - (x / (W + e * 1.3)) ** 2), 1.05);
  const lines = [
    { s: 1, e: 0, d: 1 }, { s: 1, e: 0.085, d: 0.55 }, { s: 1, e: 0.2, d: 0.38 },
    { s: -1, e: 0, d: 1 }, { s: -1, e: 0.08, d: 0.42 },
  ];
  for (const L of lines) {
    const xr = W + L.e * 1.3;
    const step = 0.011 / (k * L.d);
    for (let x = -xr; x <= xr; x += step) {
      P.push([x, L.s * lid(x, L.e) + (R() - 0.5) * 0.006, (R() - 0.5) * 0.05, 1, L.e, 0, 0]);
    }
  }
  // radial engraved strokes of the iris
  const S = Math.round(96 * Math.sqrt(k));
  const rs = 0.015 / Math.sqrt(k);
  for (let i = 0; i < S; i++) {
    const th = (i / S) * Math.PI * 2;
    for (let r = 0.335; r < 0.77; r += rs) {
      const tw = th + 0.06 * Math.sin(r * 16 + i * 0.9);
      P.push([Math.cos(tw) * r, Math.sin(tw) * r, 0.02, 2, r, 0, 0]);
    }
  }
  // guilloche rings
  [[0.43, 24], [0.565, 30], [0.69, 36]].forEach(([r0, kw], j) => {
    const n = Math.round((2 * Math.PI * r0) / (0.009 / k));
    for (let i = 0; i < n; i++) {
      const th = (i / n) * Math.PI * 2;
      const r = r0 + 0.02 * Math.sin(kw * th + j);
      P.push([Math.cos(th) * r, Math.sin(th) * r, 0.03, 2, r, 0, 0]);
    }
  });
  // limbal ring
  [0.78, 0.8].forEach((r0) => {
    const n = Math.round((2 * Math.PI * r0) / (0.0075 / k));
    for (let i = 0; i < n; i++) {
      const th = (i / n) * Math.PI * 2;
      P.push([Math.cos(th) * r0, Math.sin(th) * r0, 0.02, 2, r0, 0, 0]);
    }
  });
  // pupil edge
  [0.3, 0.316].forEach((r0) => {
    const n = Math.round((2 * Math.PI * r0) / (0.0075 / k));
    for (let i = 0; i < n; i++) {
      const th = (i / n) * Math.PI * 2;
      P.push([Math.cos(th) * r0, Math.sin(th) * r0, 0.04, 3, r0, 0, 0]);
    }
  });
  // a thin engraved highlight inside the pupil
  [0.215, 0.235].forEach((r0, j) => {
    const n = Math.round(34 * k);
    for (let i = 0; i < n; i++) {
      const th = 1.95 + (i / n) * (0.75 - j * 0.15);
      P.push([Math.cos(th) * r0, Math.sin(th) * r0, 0.05, 4, 0, 0, 0]);
    }
  });
  return { primary: P, secondary: [] };
}

/* ---------------- Document: an invoice being checked ---------------- */
// a: type (0 dust, 1 page outline, 2 text, 3 highlight band, 4 scan beam, 5 back page), b: group / layer
export const DOC = { PW: 1.3, PH: 1.838 };

export function buildDoc(k, R) {
  const P = [], S = [];
  const { PW, PH } = DOC;
  const fold = 0.24;
  const sp = 0.0125 / Math.sqrt(k);
  const ls = 0.011 / k;
  const anchors = {};

  const seg = (arr, x0, y0, x1, y1, step, type, g = 0, z = 0) => {
    const L = Math.hypot(x1 - x0, y1 - y0);
    const n = Math.max(2, Math.round(L / step));
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      arr.push([x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, z, type, g, 0, 0]);
    }
  };
  const text = (arr, x0, y, len, rows = 2, g = 0, opt = {}) => {
    let x = x0;
    const xEnd = x0 + len;
    const type = opt.type ?? 2;
    const z = opt.z ?? 0;
    const step = opt.sp ?? sp;
    while (x < xEnd - 0.015) {
      let wl = opt.word ?? 0.05 + R() * 0.2;
      if (x + wl > xEnd) wl = xEnd - x;
      for (let xx = x; xx <= x + wl; xx += step) {
        for (let r = 0; r < rows; r++) {
          arr.push([xx + (R() - 0.5) * 0.002, y + (r - (rows - 1) / 2) * step * 0.95, z, type, g, 0, 0]);
        }
      }
      x += wl + (opt.gap ?? 0.034);
    }
    return xEnd;
  };
  const band = (x0, x1, y, h, g) => {
    const st = sp * 1.15;
    for (let x = x0; x <= x1; x += st)
      for (let yy = y - h / 2; yy <= y + h / 2; yy += st)
        P.push([x + (R() - 0.5) * 0.006, yy + (R() - 0.5) * 0.006, -0.01, 3, g, 0, 0]);
  };

  // page outline with folded corner
  seg(P, -PW, PH, PW - fold, PH, ls, 1);
  seg(P, PW - fold, PH, PW, PH - fold, ls, 1);
  seg(P, PW, PH - fold, PW, -PH, ls, 1);
  seg(P, PW, -PH, -PW, -PH, ls, 1);
  seg(P, -PW, -PH, -PW, PH, ls, 1);
  seg(P, PW - fold, PH, PW - fold, PH - fold, ls * 1.7, 1);
  seg(P, PW - fold, PH - fold, PW, PH - fold, ls * 1.7, 1);

  // sender emblem (a small round seal)
  const en = Math.round(150 * k);
  for (let i = 0; i < en; i++) {
    const a = R() * 6.283, r = 0.11 * Math.sqrt(R());
    P.push([-0.99 + Math.cos(a) * r, 1.56 + Math.sin(a) * r, 0, 2, 0, 0, 0]);
  }
  text(P, -0.78, 1.62, 0.62, 3);
  text(P, -0.78, 1.555, 0.48);
  text(P, -0.78, 1.5, 0.55);

  // title, big and heavy
  text(P, 0.42, 1.6, 0.68, 5, 0, { word: 0.68 });

  // meta block: number, DATE (flag 1), due
  text(P, 0.42, 1.4, 0.26); text(P, 0.78, 1.4, 0.32, 2, 0, { word: 0.045, gap: 0.012 });
  text(P, 0.42, 1.33, 0.2, 2, 1); const dEnd = text(P, 0.78, 1.33, 0.3, 2, 1, { word: 0.045, gap: 0.012 });
  text(P, 0.42, 1.26, 0.22); text(P, 0.78, 1.26, 0.3, 2, 0, { word: 0.045, gap: 0.012 });
  band(0.38, dEnd + 0.04, 1.33, 0.085, 1);
  anchors.g1 = [dEnd + 0.08, 1.33, 0];

  // recipient
  text(P, -1.1, 1.3, 0.62); text(P, -1.1, 1.24, 0.5); text(P, -1.1, 1.18, 0.56); text(P, -1.1, 1.12, 0.36);

  // subject + paragraph
  text(P, -1.1, 0.95, 1.2, 3);
  text(P, -1.1, 0.86, 2.18); text(P, -1.1, 0.8, 1.55);

  // table
  text(P, -1.1, 0.64, 0.5, 3); text(P, 0.36, 0.64, 0.14, 3); text(P, 0.6, 0.64, 0.2, 3); text(P, 0.9, 0.64, 0.2, 3);
  seg(P, -1.1, 0.585, 1.1, 0.585, ls * 1.2, 2);
  for (let i = 0; i < 5; i++) {
    const y = 0.5 - i * 0.095;
    text(P, -1.1, y, 0.55 + R() * 0.55);
    text(P, 0.4, y, 0.05, 2, 0, { word: 0.05 });
    text(P, 0.6, y, 0.2, 2, 0, { word: 0.045, gap: 0.012 });
    text(P, 0.9, y, 0.2, 2, 0, { word: 0.045, gap: 0.012 });
  }
  seg(P, 0.36, 0.0, 1.1, 0.0, ls * 1.2, 2);
  text(P, 0.36, -0.08, 0.36); text(P, 0.9, -0.08, 0.2, 2, 0, { word: 0.045, gap: 0.012 });
  text(P, 0.36, -0.15, 0.3); text(P, 0.9, -0.15, 0.2, 2, 0, { word: 0.045, gap: 0.012 });
  // TOTAL (flag 2)
  text(P, 0.36, -0.27, 0.26, 3, 2);
  const tEnd = text(P, 0.8, -0.27, 0.3, 3, 2, { word: 0.048, gap: 0.012 });
  band(0.32, tEnd + 0.04, -0.27, 0.095, 2);
  anchors.g2 = [tEnd + 0.08, -0.27, 0];
  seg(P, 0.36, -0.33, 1.1, -0.33, ls * 1.3, 2);
  seg(P, 0.36, -0.345, 1.1, -0.345, ls * 1.3, 2);

  // payment details
  text(P, -1.1, -0.52, 0.5, 3);
  text(P, -1.1, -0.6, 0.86);
  // IBAN (flag 3)
  text(P, -1.1, -0.68, 0.22, 2, 3);
  const iEnd = text(P, -0.82, -0.68, 1.02, 2, 3, { word: 0.05, gap: 0.03 });
  band(-1.14, iEnd + 0.04, -0.68, 0.085, 3);
  anchors.g3 = [iEnd + 0.08, -0.68, 0];
  text(P, -1.1, -0.76, 0.6); text(P, -1.1, -0.84, 0.8);

  text(P, -1.1, -1.02, 2.12); text(P, -1.1, -1.08, 1.38);

  // signature scribble + line
  const sn = Math.round(300 * k);
  for (let i = 0; i < sn; i++) {
    const t = i / sn;
    P.push([-1.05 + t * 0.72 + 0.03 * Math.sin(t * 40), -1.36 + 0.07 * Math.sin(t * 9.5) + 0.035 * Math.sin(t * 27), 0, 2, 0, 0, 0]);
  }
  seg(P, -1.1, -1.47, -0.3, -1.47, ls * 1.3, 2);
  text(P, -1.1, -1.53, 0.45);

  // round stamp, slightly rough
  [[0.2, 0.0085], [0.17, 0.009], [0.06, 0.012]].forEach(([r0, st]) => {
    const n = Math.round((2 * Math.PI * r0) / (st / k));
    for (let i = 0; i < n; i++) {
      if (R() < 0.16) continue;
      const th = (i / n) * Math.PI * 2;
      P.push([0.74 + Math.cos(th) * r0, -1.36 + Math.sin(th) * r0, 0, 2, 0, 0, 0]);
    }
  });
  const tn = Math.round(200 * k);
  for (let i = 0; i < tn; i++) {
    const th = R() * Math.PI * 2, r = 0.1 + R() * 0.045;
    if (R() < 0.35) continue;
    P.push([0.74 + Math.cos(th) * r, -1.36 + Math.sin(th) * r, 0, 2, 0, 0, 0]);
  }

  // footer
  text(P, -1.1, -1.72, 0.5, 1); text(P, -0.3, -1.72, 0.5, 1); text(P, 0.5, -1.72, 0.5, 1);

  // scan beam (y set in shader)
  const bs = 0.008 / k;
  for (let x = -1.5; x <= 1.5; x += bs) {
    P.push([x, 0, 0.06, 4, 0, 0, 0]);
    if (R() < 0.6) P.push([x + bs * 0.5, 0, 0.06, 4, 0, 0, 0]);
  }

  // two pages stacked behind (secondary)
  [[1, 0.16, 0.12, -0.6], [2, 0.32, 0.24, -1.2]].forEach(([layer, dx, dy, z]) => {
    const st = ls * 2.2;
    const x0 = -PW + dx, x1 = PW + dx, y0 = -PH + dy, y1 = PH + dy;
    seg(S, x0, y1, x1, y1, st, 5, layer, z);
    seg(S, x1, y1, x1, y0, st, 5, layer, z);
    // only the visible strip of text on the right and top
    for (let i = 0; i < 22; i++) {
      const y = y1 - 0.25 - i * 0.14;
      text(S, x1 - 0.32, y, 0.26 * R() + 0.06, 1, layer, { type: 5, z, sp: sp * 1.6 });
    }
  });

  return { primary: P, secondary: S, anchors };
}

/* ---------------- Network: transfers between accounts ---------------- */
// a: type (0 dust, 1 node, 2 edge, 3 background web), b: t along edge, c: cluster flag, d: signed speed
export function buildNet(k, R, wide) {
  const P = [], S = [];
  const HW = wide ? 3.0 : 1.95, HH = wide ? 1.72 : 1.9;
  const cc = wide ? [1.62, -0.42] : [0.62, -0.78];
  const cr = wide ? 0.56 : 0.5;
  const nodes = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.35;
    nodes.push({ x: cc[0] + Math.cos(a) * cr, y: cc[1] + Math.sin(a) * cr * 0.86, z: (R() - 0.5) * 0.3, r: 0.06 + R() * 0.025, cl: 1 });
  }
  const want = wide ? 26 : 17;
  let tries = 0;
  while (nodes.length - 6 < want && tries < 8000) {
    tries++;
    const x = (R() * 2 - 1) * HW, y = (R() * 2 - 1) * HH;
    if ((x / HW) ** 2 + (y / HH) ** 2 > 1) continue;
    if (Math.hypot(x - cc[0], y - cc[1]) < cr + 0.42) continue;
    if (nodes.some((n) => Math.hypot(n.x - x, n.y - y) < (wide ? 0.44 : 0.4))) continue;
    nodes.push({ x, y, z: (R() - 0.5) * 0.9, r: 0.03 + R() * 0.055, cl: 0 });
  }
  const dist = (a, b) => Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y);
  const edges = [];
  const keys = new Set();
  const add = (a, b, cl) => {
    const key = a < b ? a + '-' + b : b + '-' + a;
    if (keys.has(key)) return;
    keys.add(key);
    edges.push({ a, b, cl });
  };
  const others = nodes.map((_, i) => i).filter((i) => !nodes[i].cl);
  others.forEach((i) => {
    others.filter((j) => j !== i).sort((p, q) => dist(i, p) - dist(i, q)).slice(0, 2).forEach((j) => add(i, j, 0));
  });
  for (let i = 0; i < 6; i++) add(i, (i + 1) % 6, 1);
  add(1, 4, 1);
  [0, 3].forEach((ci) => {
    const j = others.slice().sort((p, q) => dist(ci, p) - dist(ci, q))[0];
    if (j !== undefined) add(j, ci, 0);
  });

  // nodes
  nodes.forEach((n) => {
    const m = Math.round((2 * Math.PI * n.r) / (0.0095 / Math.sqrt(k)));
    for (let i = 0; i < m; i++) {
      const th = (i / m) * Math.PI * 2;
      P.push([n.x + Math.cos(th) * n.r, n.y + Math.sin(th) * n.r, n.z, 1, 0, n.cl, 0]);
    }
    for (let i = 0; i < 5; i++) P.push([n.x + (R() - 0.5) * 0.02, n.y + (R() - 0.5) * 0.02, n.z, 1, 0, n.cl, 0]);
  });

  // edges as curved dotted lines
  const amountAnchors = [];
  const es = 0.019 / Math.sqrt(k);
  edges.forEach((e) => {
    const A = nodes[e.a], B = nodes[e.b];
    const mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2;
    const dx = B.x - A.x, dy = B.y - A.y;
    const L = Math.hypot(dx, dy);
    let px = -dy / L, py = dx / L;
    let sgn = R() < 0.5 ? 1 : -1;
    if (e.cl) {
      // bend away from the cluster centre
      const out = (mx + px * 0.1 - cc[0]) ** 2 + (my + py * 0.1 - cc[1]) ** 2 > (mx - cc[0]) ** 2 + (my - cc[1]) ** 2;
      sgn = out ? 1 : -1;
    }
    const bend = L * (e.cl ? 0.2 : 0.14) * sgn;
    const cx = mx + px * bend, cy = my + py * bend;
    const n = Math.max(6, Math.round((L * 1.05) / es));
    const speed = (0.18 + R() * 0.3) * (e.cl ? 1 : R() < 0.5 ? 1 : -1);
    for (let i = 1; i < n; i++) {
      const t = i / n;
      const u = 1 - t;
      const x = u * u * A.x + 2 * u * t * cx + t * t * B.x;
      const y = u * u * A.y + 2 * u * t * cy + t * t * B.y;
      const z = u * A.z + t * B.z;
      // skip the part inside the node rings
      if (Math.hypot(x - A.x, y - A.y) < A.r + 0.02 || Math.hypot(x - B.x, y - B.y) < B.r + 0.02) continue;
      P.push([x, y, z, 2, t, e.cl, speed]);
    }
    if (e.cl && Math.abs(e.b - e.a) === 1 || (e.cl && Math.abs(e.b - e.a) === 5)) {
      const t = 0.5, u = 0.5;
      const x = u * u * A.x + 2 * u * t * cx + t * t * B.x;
      const y = u * u * A.y + 2 * u * t * cy + t * t * B.y;
      const ox = x - cc[0], oy = y - cc[1];
      const ol = Math.hypot(ox, oy) || 1;
      amountAnchors.push([x + (ox / ol) * 0.25, y + (oy / ol) * 0.17, 0]);
    }
  });

  // background web (secondary): many small faint accounts further back
  const bg = [];
  const BW = HW * 1.7, BH = HH * 1.6;
  for (let i = 0; i < 150; i++) {
    const x = (R() * 2 - 1) * BW, y = (R() * 2 - 1) * BH;
    bg.push({ x, y, z: -1.6 + R() * 1.0 });
  }
  bg.forEach((n, i) => {
    for (let j = 0; j < 4; j++) S.push([n.x + (R() - 0.5) * 0.03, n.y + (R() - 0.5) * 0.03, n.z, 3, 0, 0, 0]);
    let best = -1, bd = 1e9;
    bg.forEach((m, jj) => {
      if (jj === i) return;
      const d = Math.hypot(m.x - n.x, m.y - n.y);
      if (d < bd) { bd = d; best = jj; }
    });
    if (best >= 0 && bd < 1.2) {
      const m = bg[best];
      const steps = Math.round(bd / (0.05 / Math.sqrt(k)));
      for (let s = 1; s < steps; s++) {
        const t = s / steps;
        S.push([n.x + (m.x - n.x) * t, n.y + (m.y - n.y) * t, n.z + (m.z - n.z) * t, 3, t, 0, 0.15]);
      }
    }
  });

  return {
    primary: P,
    secondary: S,
    anchors: { amounts: amountAnchors, cluster: [cc[0], cc[1] - cr - 0.22, 0], clusterCenter: [cc[0], cc[1], 0] },
  };
}

/* ---------------- assemble to exactly N points ---------------- */
export function assemble(shape, N, R, dust) {
  let pts = shape.primary.slice();
  shuffle(pts, R);
  if (pts.length > N) pts.length = N;
  const sec = shape.secondary.slice();
  shuffle(sec, R);
  for (let i = 0; pts.length < N && i < sec.length; i++) pts.push(sec[i]);
  while (pts.length < N) {
    pts.push([
      (R() * 2 - 1) * dust[0],
      (R() * 2 - 1) * dust[1],
      dust[2] + R() * (dust[3] - dust[2]),
      0, R(), 0, 0,
    ]);
  }
  shuffle(pts, R);
  return pts;
}

export function shuffle(a, R) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(R() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

/* ---------------- Legal Pythia logo eye (from their SVG, viewBox 24) ---------------- */
// path: M2.5 12C6 5.5 9.2 3.6 12 3.6s6 1.9 9.5 8.4C18 18.5 14.8 20.4 12 20.4S6 18.5 2.5 12Z, circle r 3.1
const LOGO_CURVES = [
  [[2.5, 12], [6, 5.5], [9.2, 3.6], [12, 3.6]],
  [[12, 3.6], [14.8, 3.6], [18, 5.5], [21.5, 12]],
  [[21.5, 12], [18, 18.5], [14.8, 20.4], [12, 20.4]],
  [[12, 20.4], [9.2, 20.4], [6, 18.5], [2.5, 12]],
];
function cubic(c, t) {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, d = 3 * u * t * t, e = t * t * t;
  return [a * c[0][0] + b * c[1][0] + d * c[2][0] + e * c[3][0], a * c[0][1] + b * c[1][1] + d * c[2][1] + e * c[3][1]];
}
// returns points of the logo eye in units where the eye is `width` wide, centred at 0
export function logoEyePoints(width, spacing, R, type) {
  const s = width / 19;
  const pts = [];
  const stroke = 1.8 * s;
  LOGO_CURVES.forEach((c) => {
    let len = 0, prev = cubic(c, 0);
    for (let i = 1; i <= 40; i++) { const q = cubic(c, i / 40); len += Math.hypot(q[0] - prev[0], q[1] - prev[1]); prev = q; }
    const n = Math.max(8, Math.round((len * s) / spacing));
    for (let i = 0; i < n; i++) {
      const [x, y] = cubic(c, i / n);
      for (let j = 0; j < 3; j++) {
        const off = (j - 1) * stroke * 0.36 + (R() - 0.5) * stroke * 0.2;
        // normal of the almond: approx towards centre
        const nx = x - 12, ny = y - 12, nl = Math.hypot(nx, ny) || 1;
        pts.push([(x - 12) * s + (nx / nl) * off, -(y - 12) * s - (ny / nl) * off, 0, type, 0, 0, 0]);
      }
    }
  });
  // filled pupil
  const pr = 3.1 * s;
  for (let x = -pr; x <= pr; x += spacing * 1.15)
    for (let y = -pr; y <= pr; y += spacing * 1.15)
      if (x * x + y * y <= pr * pr) pts.push([x + (R() - 0.5) * spacing * 0.3, y + (R() - 0.5) * spacing * 0.3, 0, type, 0, 0, 0]);
  return pts;
}

/* ---------------- Seal: fixed price, pressed into wax ---------------- */
// type: 0 dust, 1 rings, 2 ring text, 3 logo eye, 4 wax body
export function buildSeal(k, R) {
  const P = [];
  const sq = Math.sqrt(k);
  // wax body with an irregular edge
  const edge = (th) => 1.08 + 0.035 * Math.sin(5 * th + 1.3) + 0.02 * Math.sin(11 * th + 0.4) + 0.012 * Math.sin(23 * th);
  const fs = 0.03 / sq;
  for (let x = -1.15; x <= 1.15; x += fs)
    for (let y = -1.15; y <= 1.15; y += fs) {
      const r = Math.hypot(x, y), th = Math.atan2(y, x);
      if (r <= edge(th)) P.push([x + (R() - 0.5) * fs * 0.8, y + (R() - 0.5) * fs * 0.8, -0.01, 4, r, 0, 0]);
    }
  // rings
  [[0.98, 0.0075], [0.95, 0.0085], [0.665, 0.0085], [0.64, 0.009]].forEach(([r0, st]) => {
    const n = Math.round((2 * Math.PI * r0) / (st / k));
    for (let i = 0; i < n; i++) {
      const th = (i / n) * Math.PI * 2;
      const rr = r0 + (R() - 0.5) * 0.006;
      P.push([Math.cos(th) * rr, Math.sin(th) * rr, 0, 1, r0, 0, 0]);
    }
  });
  // engraved wave ring, the same guilloche motif as the big eye
  [0, Math.PI].forEach((ph) => {
    const n = Math.round((2 * Math.PI * 0.81) / (0.006 / k));
    for (let i = 0; i < n; i++) {
      const th = (i / n) * Math.PI * 2;
      const r = 0.805 + 0.085 * Math.sin(16 * th + ph);
      P.push([Math.cos(th) * r, Math.sin(th) * r, 0.01, 2, 0, 0, 0]);
    }
  });
  // Legal Pythia eye in the middle
  logoEyePoints(1.0, 0.0065 / k, R, 3).forEach((p) => P.push(p));
  return { primary: P, secondary: [] };
}

/* ---------------- App interface: the software side ---------------- */
// type: 0 dust, 1 lines/outlines, 2 text, 3 flag band, 4 soft fill, 5 chart line, 6 flagged text
export function buildApp(k, R, wide) {
  const P = [];
  const sq = Math.sqrt(k);
  const ls = 0.011 / k;
  const sp = 0.0125 / sq;
  const anchors = {};
  const seg = (x0, y0, x1, y1, type = 1, step = ls) => {
    const L = Math.hypot(x1 - x0, y1 - y0);
    const n = Math.max(2, Math.round(L / step));
    for (let i = 0; i <= n; i++) { const t = i / n; P.push([x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, 0, type, 0, 0, 0]); }
  };
  const arc = (cx, cy, r, a0, a1, type = 1) => {
    const n = Math.max(3, Math.round((Math.abs(a1 - a0) * r) / ls));
    for (let i = 0; i <= n; i++) { const a = a0 + ((a1 - a0) * i) / n; P.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r, 0, type, 0, 0, 0]); }
  };
  const rrect = (x0, y0, x1, y1, r, type = 1) => {
    seg(x0 + r, y1, x1 - r, y1, type); seg(x1, y1 - r, x1, y0 + r, type);
    seg(x1 - r, y0, x0 + r, y0, type); seg(x0, y0 + r, x0, y1 - r, type);
    arc(x1 - r, y1 - r, r, 0, Math.PI / 2, type); arc(x0 + r, y1 - r, r, Math.PI / 2, Math.PI, type);
    arc(x0 + r, y0 + r, r, Math.PI, Math.PI * 1.5, type); arc(x1 - r, y0 + r, r, Math.PI * 1.5, Math.PI * 2, type);
  };
  const circle = (cx, cy, r, type = 1) => arc(cx, cy, r, 0, Math.PI * 2, type);
  const text = (x0, y, len, rows = 2, type = 2, opt = {}) => {
    let x = x0; const xEnd = x0 + len;
    while (x < xEnd - 0.012) {
      let wl = opt.word ?? 0.05 + R() * 0.17;
      if (x + wl > xEnd) wl = xEnd - x;
      for (let xx = x; xx <= x + wl; xx += sp)
        for (let r = 0; r < rows; r++) P.push([xx, y + (r - (rows - 1) / 2) * sp * 0.95, 0, type, 0, 0, 0]);
      x += wl + (opt.gap ?? 0.032);
    }
    return xEnd;
  };
  const num = (xRight, y, len, rows = 2, type = 2) => text(xRight - len, y, len, rows, type, { word: 0.042, gap: 0.011 });
  const fill = (x0, y0, x1, y1, type = 4, step = sp * 1.5) => {
    for (let x = x0; x <= x1; x += step) for (let y = y0; y <= y1; y += step) P.push([x, y, -0.01, type, 0, 0, 0]);
  };
  const chart = (x0, x1, yb, yt, n) => {
    const vals = [];
    let v = 0.35;
    for (let i = 0; i < n; i++) { v += (R() - 0.45) * 0.22; v = Math.min(0.85, Math.max(0.1, v)); vals.push(v); }
    vals[Math.floor(n * 0.7)] = 0.95;
    const pts = vals.map((vv, i) => [x0 + ((x1 - x0) * i) / (n - 1), yb + (yt - yb) * vv]);
    for (let i = 0; i < pts.length - 1; i++) seg(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], 5, ls * 0.8);
    pts.forEach(([x, y]) => circle(x, y, 0.022, 1));
    // soft area under the line
    for (let i = 0; i < pts.length - 1; i++) {
      for (let x = pts[i][0]; x < pts[i + 1][0]; x += sp * 3) {
        const t = (x - pts[i][0]) / (pts[i + 1][0] - pts[i][0]);
        const top = pts[i][1] + (pts[i + 1][1] - pts[i][1]) * t;
        for (let y = yb; y < top; y += sp * 3) P.push([x, y, -0.01, 4, 0, 0, 0]);
      }
    }
  };

  if (wide) {
    const X0 = -2.6, X1 = 2.6, Y0 = -1.625, Y1 = 1.625;
    rrect(X0, Y0, X1, Y1, 0.12);
    seg(X0, 1.38, X1, 1.38);
    text(-2.45, 1.5, 0.42, 2);
    rrect(-0.7, 1.43, 0.75, 1.57, 0.07); text(-0.6, 1.5, 0.45, 1);
    circle(2.4, 1.5, 0.055);
    seg(-1.72, 1.38, -1.72, Y0);
    [0.55, 0.45, 0.6, 0.4, 0.5, 0.42].forEach((l, i) => text(-2.42, 1.18 - i * 0.2, l, 2));
    fill(-2.52, 1.1, -1.82, 1.26);
    circle(-2.36, -1.42, 0.07); text(-2.22, -1.42, 0.36);
    text(-1.55, 1.16, 1.05, 3); text(-1.55, 1.05, 0.8);
    rrect(1.75, 1.06, 2.45, 1.24, 0.09); text(1.9, 1.15, 0.4);
    const cw = (4.0 - 0.24) / 3;
    for (let i = 0; i < 3; i++) {
      const x = -1.55 + i * (cw + 0.12);
      rrect(x, 0.36, x + cw, 0.92, 0.06);
      text(x + 0.1, 0.8, 0.5);
      text(x + 0.1, 0.61, 0.56, 5, 2, { word: 0.085, gap: 0.02 });
      text(x + 0.1, 0.46, 0.4, 1);
    }
    // chart card
    rrect(-1.55, -1.5, 0.62, 0.24, 0.06);
    text(-1.45, 0.12, 0.6, 2);
    seg(-1.45, -1.32, 0.52, -1.32);
    [-0.97, -0.62, -0.27].forEach((y) => seg(-1.45, y, 0.52, y, 4, ls * 2.4));
    chart(-1.4, 0.48, -1.3, -0.15, 12);
    // table card with one flagged payment
    rrect(0.74, -1.5, 2.45, 0.24, 0.06);
    text(0.84, 0.11, 0.42, 2); text(1.52, 0.11, 0.26, 2); num(2.35, 0.11, 0.28, 2);
    seg(0.84, 0.02, 2.35, 0.02, 1, ls * 1.3);
    for (let i = 0; i < 7; i++) {
      const y = -0.12 - i * 0.19;
      const flagged = i === 3;
      const t = flagged ? 6 : 2;
      if (flagged) {
        for (let x = 0.8; x <= 2.4; x += sp * 1.15) for (let yy = y - 0.065; yy <= y + 0.065; yy += sp * 1.15) P.push([x, yy, -0.01, 3, 0, 0, 0]);
        anchors.flag = [2.45, y, 0];
      }
      text(0.84, y, 0.38 + R() * 0.18, 2, t);
      text(1.52, y, 0.24, 2, t);
      num(2.35, y, 0.3, 2, t);
    }
  } else {
    const X0 = -1.0, X1 = 1.0, Y0 = -1.95, Y1 = 1.95;
    rrect(X0, Y0, X1, Y1, 0.2);
    text(-0.82, 1.8, 0.22, 1); num(0.84, 1.8, 0.26, 1);
    text(-0.82, 1.58, 0.95, 3); circle(0.78, 1.6, 0.07);
    text(-0.82, 1.47, 0.6, 1);
    [[-0.88, -0.04], [0.04, 0.88]].forEach(([a, b]) => {
      rrect(a, 0.86, b, 1.34, 0.06);
      text(a + 0.08, 1.24, 0.42, 1);
      text(a + 0.08, 1.06, 0.5, 5, 2, { word: 0.08, gap: 0.02 });
      text(a + 0.08, 0.94, 0.32, 1);
    });
    rrect(-0.88, -0.1, 0.88, 0.76, 0.06);
    text(-0.8, 0.66, 0.5, 2);
    seg(-0.8, 0.02, 0.8, 0.02);
    chart(-0.78, 0.78, 0.04, 0.56, 10);
    for (let i = 0; i < 6; i++) {
      const y = -0.28 - i * 0.24;
      const flagged = i === 2;
      const t = flagged ? 6 : 2;
      if (flagged) {
        for (let x = -0.9; x <= 0.9; x += sp * 1.15) for (let yy = y - 0.08; yy <= y + 0.08; yy += sp * 1.15) P.push([x, yy, -0.01, 3, 0, 0, 0]);
        anchors.flag = [0.94, y, 0];
      }
      circle(-0.78, y, 0.05, flagged ? 6 : 1);
      text(-0.66, y, 0.6 + R() * 0.2, 2, t);
      num(0.84, y, 0.32, 2, t);
    }
    seg(X0, -1.68, X1, -1.68);
    [-0.6, -0.2, 0.2, 0.6].forEach((x) => circle(x, -1.82, 0.045));
  }
  return { primary: P, secondary: [], anchors };
}
