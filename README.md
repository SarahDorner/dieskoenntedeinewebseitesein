# entwurf.snackable-ads.de

Website-Entwürfe von Snackable Ads, gehostet mit GitHub Pages unter https://entwurf.snackable-ads.de (DNS: CNAME entwurf auf sarahdorner.github.io bei IONOS).

| Pfad | Entwurf |
|---|---|
| `/auto-schrottplatz/` | Auto-Schrottplatz.de (Autoverwertung Bochum, Abholung deutschlandweit): neue Startseite mit 3D-Scroll-Szene (Abschleppwagen lädt das Auto auf) plus Muster-Ortsseite `/auto-schrottplatz/hamburg/`. HTML und CSS ohne Build, Schriften lokal, Logo wird von auto-schrottplatz.de geladen. Anfrageformular öffnet WhatsApp mit den Angaben |
| `/legalpythia/` | Legal Pythia, Prototyp mit Partikel-Animation in 7 Kapiteln (Auge, Dokument, Netz, Fallakten, Festpreis-Siegel, Software, Schluss) |

## Legal Pythia neu bauen

```bash
cd quelltext/legalpythia
npm install three gsap esbuild @fontsource-variable/bodoni-moda @fontsource-variable/schibsted-grotesk @fontsource-variable/plus-jakarta-sans
node build.mjs
# Ergebnis liegt in dist/site/legalpythia, nach /legalpythia kopieren
```

## Auto-Schrottplatz: 3D-Szene neu bauen

Quelltext: `quelltext/auto-schrottplatz/szene.js` (Three.js 0.170). Die Szene lädt erst, wenn der Abschnitt "So läuft es ab" in die Nähe kommt. Ohne WebGL oder bei reduzierter Bewegung bleiben die drei Schritte als normale Liste stehen.

```bash
npm install three@0.170 esbuild
npx esbuild quelltext/auto-schrottplatz/szene.js --bundle --format=esm --minify --target=es2020 --outfile=auto-schrottplatz/szene.js
```
