# dieskönntedeinewebseitesein.de

Website-Entwürfe von Snackable Ads, gehostet mit GitHub Pages.

| Pfad | Entwurf |
|---|---|
| `/legalpythia/` | Legal Pythia, Prototyp mit Partikel-Animation in 7 Kapiteln (Auge, Dokument, Netz, Fallakten, Festpreis-Siegel, Software, Schluss) |

## Legal Pythia neu bauen

```bash
cd quelltext/legalpythia
npm install three gsap esbuild @fontsource-variable/bodoni-moda @fontsource-variable/schibsted-grotesk @fontsource-variable/plus-jakarta-sans
node build.mjs
# Ergebnis liegt in dist/site/legalpythia, nach /legalpythia kopieren
```
