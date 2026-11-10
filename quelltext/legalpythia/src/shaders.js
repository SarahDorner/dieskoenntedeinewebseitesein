export const vertex = /* glsl */ `
precision highp float;
uniform float uTime, uM, uOpen, uScan, uAlarm, uFade, uPx, uSize, uReduced;
uniform vec3 uHi;
uniform vec2 uLook;
uniform vec2 uView;
uniform float uRows;
uniform vec4 uTA, uTB, uTC;
uniform mat3 uRA, uRB, uRC;
uniform vec3 cPaper, cAmber, cRed, cDust;

attribute vec3 aDoc;
attribute vec3 aNet;
attribute vec4 aRnd;
attribute vec2 aEyeI;
attribute vec2 aDocI;
attribute vec4 aNetI;

varying vec3 vCol;
varying float vA;

float ease(float t) { return t * t * (3.0 - 2.0 * t); }

vec3 drift(vec3 p, float amt) {
  return p + amt * vec3(
    sin(uTime * 0.21 + aRnd.y * 6.283),
    cos(uTime * 0.17 + aRnd.z * 6.283),
    sin(uTime * 0.13 + aRnd.w * 6.283));
}

void main() {
  /* ---------------- eye ---------------- */
  vec3 e = position;
  float eT = aEyeI.x;
  float eA = 0.0, eS = 1.0;
  vec3 eC = cPaper;
  const float W = 2.0;
  const float H = 0.92;
  if (eT < 0.5) {
    e = drift(e, 0.12);
    eA = 0.2; eS = 0.75; eC = cDust;
  } else if (eT < 1.5) {
    float closedY = -0.07 * (1.0 - (e.x / 2.3) * (e.x / 2.3));
    e.y = mix(closedY, e.y, uOpen);
    eA = 0.92 - aEyeI.y * 1.8;
  } else {
    e.xy += uLook;
    float lid = uOpen * H * pow(max(0.0, 1.0 - (e.x / W) * (e.x / W)), 1.05);
    float vis = 1.0 - smoothstep(lid - 0.035, lid + 0.005, abs(e.y));
    if (eT < 2.5) {
      // iris: brighter towards the rim
      eA = vis * (0.45 + 0.5 * smoothstep(0.3, 0.8, aEyeI.y));
    } else if (eT < 3.5) {
      eA = vis * 0.95;
    } else {
      eA = vis * 0.9; eS = 1.0;
    }
  }
  vec3 pA = uRA * e * uTA.w + uTA.xyz;

  /* ---------------- document ---------------- */
  vec3 b = aDoc;
  float bT = aDocI.x;
  float g = aDocI.y;
  float bA = 0.0, bS = 1.0;
  vec3 bC = cPaper;
  float scanY = mix(1.95, -1.95, uScan);
  float hiRaw = g < 0.5 ? 0.0 : (g < 1.5 ? uHi.x : (g < 2.5 ? uHi.y : uHi.z));
  float u = (b.x + 1.3) / 2.6;
  float hi = clamp(hiRaw * 1.8 - u * 0.8, 0.0, 1.0);
  if (bT < 0.5) {
    b = drift(b, 0.1);
    bA = 0.12; bS = 0.7; bC = cDust;
  } else if (bT < 1.5) {
    bA = 0.55;
  } else if (bT < 2.5) {
    float scanned = step(scanY, b.y) * step(0.001, uScan);
    bA = 0.5 + 0.3 * scanned;
    bC = mix(cPaper, cAmber, hi * step(0.5, g));
    bA = mix(bA, 1.0, hi * step(0.5, g));
  } else if (bT < 3.5) {
    bC = cAmber; bA = 0.34 * hi; bS = 1.3;
  } else if (bT < 4.5) {
    b.y = scanY + (aRnd.y - 0.5) * 0.018;
    float on = smoothstep(0.0, 0.03, uScan) * (1.0 - smoothstep(0.97, 1.0, uScan));
    bA = 0.95 * on; bS = 1.15;
  } else {
    bA = g < 1.5 ? 0.24 : 0.13; bS = 0.85;
  }
  float near = exp(-pow((b.y - scanY) * 13.0, 2.0)) * step(1.5, bT) * step(bT, 2.5) * step(0.001, uScan) * (1.0 - step(0.999, uScan));
  bA = min(1.0, bA + near * 0.45);
  bS += near * 0.5;
  vec3 pB = uRB * b * uTB.w + uTB.xyz;

  /* ---------------- network ---------------- */
  vec3 c = aNet;
  float cT = aNetI.x;
  float tt = aNetI.y;
  float cl = aNetI.z;
  float sp = aNetI.w;
  float cA = 0.0, cS = 1.0;
  vec3 cC = cPaper;
  if (cT < 0.5) {
    c = drift(c, 0.12);
    cA = 0.12; cS = 0.7; cC = cDust;
  } else if (cT < 1.5) {
    cA = 0.9; cS = 1.1;
  } else if (cT < 2.5) {
    float t2 = sp >= 0.0 ? tt : 1.0 - tt;
    float speed = abs(sp) * (1.0 + 2.2 * uAlarm * cl);
    float ph = fract(t2 * 1.6 - uTime * speed);
    float pulse = pow(ph, 7.0);
    cA = 0.32 + 0.68 * pulse;
    cS = 0.95 + 0.9 * pulse;
  } else {
    cA = 0.16; cS = 0.75; cC = cDust;
  }
  float alarmPulse = 0.5 + 0.5 * sin(uTime * 5.0);
  cC = mix(cC, cRed, uAlarm * cl);
  cS *= 1.0 + 0.3 * uAlarm * cl * alarmPulse;
  cA = mix(cA, max(cA, 0.85), uAlarm * cl * step(0.5, cT));
  cA *= 1.0 - 0.5 * uAlarm * (1.0 - cl);
  vec3 pC = uRC * c * uTC.w + uTC.xyz;

  /* ---------------- mix ---------------- */
  vec3 p;
  float a, s;
  vec3 col;
  if (uReduced > 0.5) {
    float wA = 1.0 - smoothstep(0.35, 0.5, uM);
    float wB = smoothstep(0.5, 0.65, uM) * (1.0 - smoothstep(1.35, 1.5, uM));
    float wC = smoothstep(1.5, 1.65, uM);
    p = uM < 0.5 ? pA : (uM < 1.5 ? pB : pC);
    a = eA * wA + bA * wB + cA * wC;
    s = uM < 0.5 ? eS : (uM < 1.5 ? bS : cS);
    col = uM < 0.5 ? eC : (uM < 1.5 ? bC : cC);
  } else {
    float d = aRnd.x * 0.14;
    float tAB = clamp((uM - d) / 0.86, 0.0, 1.0);
    float tBC = clamp((uM - 1.0 - d) / 0.86, 0.0, 1.0);
    // colour / alpha weights
    float kAB = ease(tAB), kBC = ease(tBC);
    float wA = 1.0 - kAB;
    float wC = kBC;
    float wB = kAB - kBC;
    // paths: shape -> full-screen pattern -> shape
    vec3 from, to, mid;
    float t;
    if (uM <= 1.0) {
      from = pA; to = pB; t = tAB;
      // the whole screen becomes lines of text for a moment
      float rows1 = floor(uRows * 0.8);
      float row = floor(aRnd.z * rows1);
      float words = 19.0;
      float wd = floor(aRnd.y * words);
      float f = fract(aRnd.y * words);
      float cellW = uView.x * 2.1 / words;
      float len = 0.45 + 0.5 * fract(sin(row * 91.17 + wd * 17.31) * 43758.5453);
      float lineEnd = 0.55 + 0.45 * fract(sin(row * 7.31) * 1531.7);
      float x = -uView.x * 1.05 + wd * cellW + cellW * len * f;
      float left = -uView.x * 1.05;
      float span = uView.x * 2.1 * lineEnd;
      x = left + mod(x - left, span);
      mid = vec3(x, mix(-0.92, 0.74, row / (rows1 - 1.0)) * uView.y, 0.0);
    } else {
      from = pB; to = pC; t = tBC;
      // the whole screen becomes a ledger: rows of amounts in columns
      float rows2 = floor(uRows * 0.62);
      float row = floor(aRnd.z * rows2);
      float col = floor(aRnd.y * 6.0);
      float f = fract(aRnd.y * 6.0);
      float cellW = uView.x * 2.1 / 6.0;
      float len = 0.25 + 0.6 * fract(sin(row * 12.9898 + col * 78.233) * 43758.5453);
      float x0 = -uView.x * 1.05 + col * cellW;
      mid = vec3(x0 + cellW * (0.9 - len * f), mix(-0.92, 0.74, row / (rows2 - 1.0)) * uView.y, 0.0);
    }
    // travel, hold the full-screen pattern for a moment, travel on
    if (t < 0.4) {
      p = mix(from, mid, ease(t / 0.4));
    } else if (t < 0.6) {
      p = mid;
    } else {
      p = mix(mid, to, ease((t - 0.6) / 0.4));
    }
    float bell = sin(3.14159 * tAB) + sin(3.14159 * tBC);
    p.x += sin(aRnd.w * 12.57 + uTime * 0.6) * 0.05 * bell;
    a = eA * wA + bA * wB + cA * wC;
    a = max(a, 0.5 * bell);
    s = eS * wA + bS * wB + cS * wC;
    col = eC * wA + bC * wB + cC * wC;
    col = mix(col, cPaper, 0.6 * bell * (1.0 - step(0.5, uAlarm)));
  }

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * s * uPx * (12.0 / -mv.z);
  vCol = col;
  vA = a * uFade;
}
`;

export const fragment = /* glsl */ `
precision highp float;
varying vec3 vCol;
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c);
  float m = smoothstep(0.5, 0.3, r);
  float alpha = m * vA;
  if (alpha < 0.008) discard;
  gl_FragColor = vec4(vCol, alpha);
}
`;
