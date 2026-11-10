import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.dirname(new URL(import.meta.url).pathname);
const out = path.join(root, 'dist');
const site = path.join(out, 'site', 'legalpythia');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(site, 'fonts'), { recursive: true });

const res = await build({
  entryPoints: [path.join(root, 'src/main.js')],
  bundle: true, minify: true, format: 'iife', target: ['es2019'], write: false,
  legalComments: 'none',
});
const js = res.outputFiles[0].text;
const hash = crypto.createHash('sha1').update(js).digest('hex').slice(0, 8);

const fonts = [
  { fam: 'Bodoni Moda Variable', style: 'normal', w: '400 900', file: '@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-opsz-normal.woff2', name: 'bodoni-moda.woff2' },
  { fam: 'Bodoni Moda Variable', style: 'italic', w: '400 900', file: '@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-opsz-italic.woff2', name: 'bodoni-moda-italic.woff2' },
  { fam: 'Schibsted Grotesk Variable', style: 'normal', w: '400 900', file: '@fontsource-variable/schibsted-grotesk/files/schibsted-grotesk-latin-wght-normal.woff2', name: 'schibsted-grotesk.woff2' },
  { fam: 'Plus Jakarta Sans Variable', style: 'normal', w: '200 800', file: '@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2', name: 'plus-jakarta-sans.woff2' },
];
const face = (f, src) => `@font-face{font-family:'${f.fam}';font-style:${f.style};font-display:swap;font-weight:${f.w};src:url(${src}) format('woff2-variations'),url(${src}) format('woff2');}`;

const tpl = fs.readFileSync(path.join(root, 'src/index.html'), 'utf8');

// deployable version: separate cached files
const deployCss = fonts.map((f) => {
  fs.copyFileSync(path.join(root, 'node_modules', f.file), path.join(site, 'fonts', f.name));
  return face(f, `fonts/${f.name}`);
}).join('\n');
const preload = `<link rel="preload" href="fonts/bodoni-moda.woff2" as="font" type="font/woff2" crossorigin>`;
fs.writeFileSync(path.join(site, `app.${hash}.js`), js);
fs.writeFileSync(
  path.join(site, 'index.html'),
  tpl.replace('/*FONTS*/', `${preload}\n<style>${deployCss}</style>`).replace('/*SCRIPT*/', `<script src="app.${hash}.js" defer></script>`),
);

// single-file preview
const inlineCss = fonts.map((f) => {
  const b64 = fs.readFileSync(path.join(root, 'node_modules', f.file)).toString('base64');
  return face(f, `data:font/woff2;base64,${b64}`);
}).join('\n');
fs.writeFileSync(
  path.join(out, 'legalpythia-preview.html'),
  tpl.replace('/*FONTS*/', `<style>${inlineCss}</style>`).replace('/*SCRIPT*/', () => `<script>${js.replace(/<\/script/g, '<\\/script')}</script>`),
);

console.log('js', (js.length / 1024).toFixed(0) + 'KB', 'hash', hash);
for (const f of fs.readdirSync(site)) console.log(' ', f);
console.log('single', (fs.statSync(path.join(out, 'legalpythia-preview.html')).size / 1024).toFixed(0) + 'KB');
