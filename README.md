# entwurf.snackable-ads.de

Website-Entwürfe von Snackable Ads, gehostet mit GitHub Pages unter https://entwurf.snackable-ads.de (DNS: CNAME entwurf auf sarahdorner.github.io bei IONOS).

| Pfad | Entwurf |
|---|---|
| `/auto-schrottplatz/` | Auto-Schrottplatz.de (Autoverwertung Bochum, Abholung deutschlandweit): neue Startseite plus Muster-Ortsseite `/auto-schrottplatz/hamburg/`. Reines HTML und CSS ohne Build, Schriften lokal. Anfrageformular öffnet WhatsApp mit den Angaben |
| `/legalpythia/` | Legal Pythia, Prototyp mit Partikel-Animation in 7 Kapiteln (Auge, Dokument, Netz, Fallakten, Festpreis-Siegel, Software, Schluss) |

## Legal Pythia neu bauen

```bash
cd quelltext/legalpythia
npm install three gsap esbuild @fontsource-variable/bodoni-moda @fontsource-variable/schibsted-grotesk @fontsource-variable/plus-jakarta-sans
node build.mjs
# Ergebnis liegt in dist/site/legalpythia, nach /legalpythia kopieren
```
