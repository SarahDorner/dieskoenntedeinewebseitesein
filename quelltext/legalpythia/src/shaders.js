export const vertex = /* glsl */ `
precision highp float;
uniform float uTime, uM, uOpen, uClose, uScan, uAlarm, uPx, uSize, uReduced, uInk, uPress, uFlag, uRows;
uniform vec3 uHi;
uniform vec2 uLook, uView;
uniform vec4 uGrid;
uniform vec4 uTA, uTB, uTC, uTE, uTF, uTG;
uniform mat3 uRA, uRB, uRC, uRF;
uniform vec3 cPaper, cInk, cAmber, cRed, cDust, cDustInk, cWax, cWaxHi;

attribute vec3 aDoc;
attribute vec3 aNet;
attribute vec4 aRnd;
attribute vec2 aEyeI;
attribute vec2 aDocI;
attribute vec4 aNetI;
attribute vec4 aSeal;
attribute vec4 aApp;

varying vec3 vCol;
varying float vA;

struct St { vec3 p; float a; float s; vec3 c; };

float ease(float t) { return t * t * (3.0 - 2.0 * t); }
vec3 baseC() { return mix(cPaper, cInk, uInk); }
vec3 dustC() { return mix(cDust, cDustInk, uInk); }

vec3 drift(vec3 p, float amt) {
  return p + amt * vec3(
    sin(uTime * 0.21 + aRnd.y * 6.283),
    cos(uTime * 0.17 + aRnd.z * 6.283),
    sin(uTime * 0.13 + aRnd.w * 6.283));
}

/* ---- 0 and 6: the eye ---- */
St eyeS(float open, vec4 T) {
  St o;
  vec3 e = position;
  float t = aEyeI.x;
  o.a = 0.0; o.s = 1.0; o.c = baseC();
  const float W = 2.0;
  const float H = 0.92;
  if (t < 0.5) {
    e = drift(e, 0.12);
    o.a = 0.2; o.s = 0.75; o.c = dustC();
  } else if (t < 1.5) {
    float closedY = -0.07 * (1.0 - (e.x / 2.3) * (e.x / 2.3));
    e.y = mix(closedY, e.y, open);
    o.a = 0.92 - aEyeI.y * 1.8;
  } else {
    e.xy += uLook;
    float lid = open * H * pow(max(0.0, 1.0 - (e.x / W) * (e.x / W)), 1.05);
    float vis = 1.0 - smoothstep(lid - 0.035, lid + 0.005, abs(e.y));
    if (t < 2.5) o.a = vis * (0.45 + 0.5 * smoothstep(0.3, 0.8, aEyeI.y));
    else if (t < 3.5) o.a = vis * 0.95;
    else o.a = vis * 0.9;
  }
  o.p = uRA * e * T.w + T.xyz;
  return o;
}

/* ---- 1: the document ---- */
St docS() {
  St o;
  vec3 b = aDoc;
  float t = aDocI.x, g = aDocI.y;
  o.a = 0.0; o.s = 1.0; o.c = baseC();
  float scanY = mix(1.95, -1.95, uScan);
  float hiRaw = g < 0.5 ? 0.0 : (g < 1.5 ? uHi.x : (g < 2.5 ? uHi.y : uHi.z));
  float u = (b.x + 1.3) / 2.6;
  float hi = clamp(hiRaw * 1.8 - u * 0.8, 0.0, 1.0);
  if (t < 0.5) {
    b = drift(b, 0.1);
    o.a = 0.12; o.s = 0.7; o.c = dustC();
  } else if (t < 1.5) {
    o.a = 0.55;
  } else if (t < 2.5) {
    float scanned = step(scanY, b.y) * step(0.001, uScan);
    o.a = 0.5 + 0.3 * scanned;
    o.c = mix(o.c, cAmber, hi * step(0.5, g));
    o.a = mix(o.a, 1.0, hi * step(0.5, g));
  } else if (t < 3.5) {
    o.c = cAmber; o.a = 0.34 * hi; o.s = 1.3;
  } else if (t < 4.5) {
    b.y = scanY + (aRnd.y - 0.5) * 0.018;
    float on = smoothstep(0.0, 0.03, uScan) * (1.0 - smoothstep(0.97, 1.0, uScan));
    o.a = 0.95 * on; o.s = 1.15;
  } else {
    o.a = g < 1.5 ? 0.24 : 0.13; o.s = 0.85;
  }
  float near = exp(-pow((b.y - scanY) * 13.0, 2.0)) * step(1.5, t) * step(t, 2.5) * step(0.001, uScan) * (1.0 - step(0.999, uScan));
  o.a = min(1.0, o.a + near * 0.45);
  o.s += near * 0.5;
  o.p = uRB * b * uTB.w + uTB.xyz;
  return o;
}

/* ---- 2: the money ---- */
St netS() {
  St o;
  vec3 c = aNet;
  float t = aNetI.x, tt = aNetI.y, cl = aNetI.z, sp = aNetI.w;
  o.a = 0.0; o.s = 1.0; o.c = baseC();
  if (t < 0.5) {
    c = drift(c, 0.12);
    o.a = 0.12; o.s = 0.7; o.c = dustC();
  } else if (t < 1.5) {
    o.a = 0.9; o.s = 1.1;
  } else if (t < 2.5) {
    float t2 = sp >= 0.0 ? tt : 1.0 - tt;
    float speed = abs(sp) * (1.0 + 2.2 * uAlarm * cl);
    float ph = fract(t2 * 1.6 - uTime * speed);
    float pulse = pow(ph, 7.0);
    o.a = 0.32 + 0.68 * pulse;
    o.s = 0.95 + 0.9 * pulse;
  } else {
    o.a = 0.16; o.s = 0.75; o.c = dustC();
  }
  float alarmPulse = 0.5 + 0.5 * sin(uTime * 5.0);
  o.c = mix(o.c, cRed, uAlarm * cl);
  o.s *= 1.0 + 0.3 * uAlarm * cl * alarmPulse;
  o.a = mix(o.a, max(o.a, 0.85), uAlarm * cl * step(0.5, t));
  o.a *= 1.0 - 0.5 * uAlarm * (1.0 - cl);
  o.p = uRC * c * uTC.w + uTC.xyz;
  return o;
}

/* ---- 3: dotted paper for the case files ---- */
St gridS() {
  St o;
  float cols = uGrid.x, rows = uGrid.y, sp = uGrid.z;
  float id = float(gl_VertexID);
  float cells = cols * rows;
  float cell = mod(id, cells);
  float col = mod(cell, cols);
  float row = floor(cell / cols);
  o.p = vec3((col - (cols - 1.0) * 0.5) * sp, (row - (rows - 1.0) * 0.5) * sp, 0.0);
  o.a = id < cells ? 0.34 : 0.0;
  o.s = 0.85;
  o.c = baseC();
  return o;
}

/* ---- 4: the seal ---- */
St sealS() {
  St o;
  float t = aSeal.w;
  if (t < 0.5) {
    o = gridS();
    o.a = 0.0;
    return o;
  }
  vec3 q = aSeal.xyz;
  float pr = clamp(uPress, 0.0, 1.0);
  float sc = mix(1.8, 1.0, pr * pr);
  float ang = (1.0 - pr) * 0.55;
  float bump = smoothstep(0.84, 0.95, pr) * (1.0 - smoothstep(0.95, 1.0, pr));
  q.xy *= 1.0 + 0.06 * bump;
  float ca = cos(ang), sa = sin(ang);
  q.xy = vec2(ca * q.x - sa * q.y, sa * q.x + ca * q.y);
  o.p = q * sc * uTE.w + uTE.xyz;
  o.p.z += (1.0 - pr) * 1.2;
  o.s = 1.0;
  if (t < 1.5) { o.c = cWaxHi; o.a = 0.9; o.s = 0.9; }
  else if (t < 2.5) { o.c = cWaxHi; o.a = 0.85; o.s = 0.85; }
  else if (t < 3.5) { o.c = cWaxHi; o.a = 1.0; o.s = 0.95; }
  else { o.c = cWax * (0.88 + 0.24 * aRnd.y); o.a = 0.92; o.s = 2.2; }
  o.a *= mix(0.45, 1.0, pr);
  return o;
}

/* ---- 5: the software ---- */
St appS() {
  St o;
  float t = aApp.w;
  if (t < 0.5) {
    o = gridS();
    o.a = 0.0;
    return o;
  }
  o.p = uRF * aApp.xyz * uTF.w + uTF.xyz;
  o.c = baseC();
  o.s = 1.0;
  if (t < 1.5) { o.a = 0.78; }
  else if (t < 2.5) { o.a = 0.68; }
  else if (t < 3.5) { o.c = cAmber; o.a = 0.42 * uFlag; o.s = 1.3; }
  else if (t < 4.5) { o.a = 0.16; o.s = 0.9; }
  else if (t < 5.5) { o.a = 0.92; o.s = 1.1; }
  else { o.c = mix(o.c, cAmber, uFlag); o.a = mix(0.68, 1.0, uFlag); }
  return o;
}

St stateFor(int k) {
  if (k == 0) return eyeS(uOpen, uTA);
  if (k == 1) return docS();
  if (k == 2) return netS();
  if (k == 3) return gridS();
  if (k == 4) return sealS();
  if (k == 5) return appS();
  return eyeS(1.0 - uClose, uTG);
}

void main() {
  float M = clamp(uM, 0.0, 6.0);
  float segF = min(floor(M), 5.0);
  int seg = int(segF);
  float local = M - segF;
  St A = stateFor(seg);
  St B = stateFor(seg + 1);

  vec3 p;
  float a, s;
  vec3 col;
  if (uReduced > 0.5) {
    bool first = local < 0.5;
    float w = first ? 1.0 - smoothstep(0.35, 0.5, local) : smoothstep(0.5, 0.65, local);
    p = first ? A.p : B.p;
    a = (first ? A.a : B.a) * w;
    s = first ? A.s : B.s;
    col = first ? A.c : B.c;
  } else {
    float dMax = seg < 2 ? 0.14 : 0.3;
    float d = aRnd.x * dMax;
    if (seg == 2) d = (0.5 - 0.5 * clamp(B.p.y / uView.y, -1.0, 1.0)) * dMax;
    if (seg == 4) d = (0.5 - 0.5 * clamp((B.p.y - uTF.y) / max(0.001, uTF.w * 2.0), -1.0, 1.0)) * dMax;
    float t = clamp((local - d) / (1.0 - dMax), 0.0, 1.0);
    float k = ease(t);
    float bell = sin(3.14159 * t);
    if (seg < 2) {
      vec3 mid;
      if (seg == 0) {
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
        // a ledger: rows of amounts in columns
        float rows2 = floor(uRows * 0.62);
        float row = floor(aRnd.z * rows2);
        float colI = floor(aRnd.y * 6.0);
        float f = fract(aRnd.y * 6.0);
        float cellW = uView.x * 2.1 / 6.0;
        float len = 0.25 + 0.6 * fract(sin(row * 12.9898 + colI * 78.233) * 43758.5453);
        float x0 = -uView.x * 1.05 + colI * cellW;
        mid = vec3(x0 + cellW * (0.9 - len * f), mix(-0.92, 0.74, row / (rows2 - 1.0)) * uView.y, 0.0);
      }
      if (t < 0.4) p = mix(A.p, mid, ease(t / 0.4));
      else if (t < 0.6) p = mid;
      else p = mix(mid, B.p, ease((t - 0.6) / 0.4));
      p.x += sin(aRnd.w * 12.57 + uTime * 0.6) * 0.05 * bell;
      a = max(mix(A.a, B.a, k), 0.5 * bell);
      col = mix(mix(A.c, B.c, k), baseC(), 0.6 * bell * (1.0 - step(0.5, uAlarm)));
    } else {
      p = mix(A.p, B.p, k);
      vec3 sw = vec3(
        sin(aRnd.y * 12.57 + uTime * 0.7 + p.y * 0.5),
        cos(aRnd.z * 12.57 + uTime * 0.6 + p.x * 0.4),
        sin(aRnd.w * 12.57 + uTime * 0.5) * 1.4);
      p += sw * bell * (0.12 + 0.5 * aRnd.w);
      a = max(mix(A.a, B.a, k), 0.2 * bell * step(0.001, A.a + B.a));
      col = mix(A.c, B.c, clamp(t * 2.2, 0.0, 1.0));
    }
    s = mix(A.s, B.s, k);
  }

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * s * uPx * (12.0 / -mv.z);
  vCol = col;
  vA = a;
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
