#!/usr/bin/env python3
"""Baut den Ratgeber für Auto-Schrottplatz.de: Übersicht und Beiträge.

Aufruf im Repo-Hauptordner:  python3 quelltext/auto-schrottplatz/ratgeber.py
Die Beitragstexte liegen als HTML-Ausschnitte in quelltext/auto-schrottplatz/ratgeber/.
Die Adressen der Beiträge sind die der alten WordPress-Seite und dürfen sich nicht ändern.
"""
import html
import json
import pathlib

HIER = pathlib.Path(__file__).resolve().parent
ZIEL = HIER.parents[1] / "auto-schrottplatz"
TEL = "0152 313 444 44"
TEL_LINK = "tel:+4915231344444"
WA = "https://wa.me/4915231344444"
MAIL = "info@auto-schrottplatz.de"

BEITRAEGE = [
    {
        "slug": "auto-schrottplatz-de-auf-trustpilot",
        "titel": "auto-schrottplatz.de jetzt auch bei Trustpilot",
        "kurz": "Warum wir aktiv um Bewertungen bitten und wie aus über 20 Jahren Praxis eine digitale Autoverwertung wurde.",
        "datum": "2026-02-20",
    },
    {
        "slug": "der-weckruf-von-2026-warum-millionenstrafen-gegen-autohersteller-die-autoverwertung-revolutionieren",
        "titel": "Der „Weckruf“ von 2026: Warum Millionenstrafen gegen Autohersteller die Autoverwertung verändern",
        "kurz": "Was die Strafen der EU-Kommission für dich als Fahrzeughalter bedeuten und worauf du bei der Verwertung achten solltest.",
        "datum": "2026-02-19",
    },
    {
        "slug": "zwischen-export-markt-und-nachhaltiger-kreislaufwirtschaft",
        "titel": "Zwischen Export-Markt und Kreislaufwirtschaft: So wird dein Altauto sauber verwertet",
        "kurz": "Warum ein Verwertungsnachweis dich schützt, was im Demontagebetrieb passiert und wie die Abholung abläuft.",
        "datum": "2026-02-18",
    },
]
GEAENDERT = "2026-11-23"
MONATE = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]


def datum(d):
    j, m, t = d.split("-")
    return f"{int(t)}. {MONATE[int(m) - 1]} {j}"


def rahmen(titel, beschreibung, inhalt, ld):
    e = html.escape
    j = json.dumps(ld, ensure_ascii=False, separators=(",", ":"))
    return f"""<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(titel)}</title>
<meta name="description" content="{e(beschreibung)}">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27%3E%3Crect width=%2732%27 height=%2732%27 rx=%275%27 fill=%27%230097b2%27/%3E%3Cpath d=%27M7 18l2-6h14l2 6v5h-3v-2H10v2H7z%27 fill=%27%23fff%27/%3E%3C/svg%3E">
<base href="../">
<link rel="preload" href="fonts/archivo.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="style.css">
<script type="application/ld+json">
{j}
</script>
</head>
<body>

<div class="draft">Entwurf von <a href="https://snackable-ads.de">Snackable Ads</a> für Auto-Schrottplatz.de. Diese Vorschau ist bei Google nicht auffindbar.</div>

<header class="top">
  <div class="wrap">
    <a class="logo" href="./"><img src="https://auto-schrottplatz.de/wp-content/uploads/2025/06/Logo_Autoschrottplatz.png" width="250" height="125" alt="Auto-Schrottplatz.de"></a>
    <nav class="nav" aria-label="Hauptmenü">
      <a href="./#ablauf">So geht's</a>
      <a href="./#fahrzeuge">Was wir abholen</a>
      <a href="./#orte">Abholgebiete</a>
      <a href="ratgeber/">Ratgeber</a>
    </nav>
    <a class="tel" href="{TEL_LINK}"><small>Anruf oder WhatsApp</small>{TEL}</a>
  </div>
</header>

<main>
{inhalt}
<section class="final">
  <div class="wrap">
    <h2>Dein Auto soll weg? Wir holen es ab.</h2>
    <p>Eckdaten oder Fotos schicken, Festpreis bekommen, Termin abstimmen. Unverbindlich und kostenlos. Per Anruf, WhatsApp oder E-Mail.</p>
    <a class="bigtel" href="{TEL_LINK}">{TEL}</a>
    <div class="cta">
      <a class="btn" href="{WA}">Fotos per WhatsApp schicken</a>
      <a class="btn line" href="mailto:{MAIL}">E-Mail schreiben</a>
      <a class="btn line" href="./#anfrage">Zum Anfrageformular</a>
    </div>
  </div>
</section>
</main>

<footer>
  <div class="wrap">
    <div><b>Auto-Schrottplatz.de</b>Autoverwertung mit kostenloser Abholung<br>in ganz Deutschland</div>
    <div><b>Kontakt</b><a href="{TEL_LINK}">{TEL}</a><a href="{WA}">WhatsApp</a><a href="mailto:{MAIL}">{MAIL}</a></div>
    <div><b>Seiten</b><a href="./">Startseite</a><a href="./#orte">Abholgebiete</a><a href="ratgeber/">Ratgeber</a></div>
    <div class="legal"><a href="https://auto-schrottplatz.de/impressum/">Impressum</a><a href="https://auto-schrottplatz.de/datenschutz/">Datenschutz</a></div>
  </div>
</footer>

<div class="bar">
  <a class="btn" href="{TEL_LINK}">Anrufen</a>
  <a class="btn line" href="{WA}">WhatsApp</a>
</div>
</body>
</html>
"""


def beitrag(b):
    e = html.escape
    text = (HIER / "ratgeber" / f"{b['slug']}.html").read_text(encoding="utf-8")
    ld = {"@context": "https://schema.org", "@type": "Article", "headline": b["titel"],
          "datePublished": b["datum"], "dateModified": GEAENDERT,
          "author": {"@type": "Organization", "name": "Auto-Schrottplatz.de"},
          "publisher": {"@type": "Organization", "name": "Auto-Schrottplatz.de"},
          "mainEntityOfPage": f"https://auto-schrottplatz.de/{b['slug']}/"}
    inhalt = f"""<article>
  <div class="wrap artikel">
    <p class="crumb"><a href="./">Startseite</a> / <a href="ratgeber/">Ratgeber</a></p>
    <h1>{e(b['titel'])}</h1>
    <p class="stand">Veröffentlicht am {datum(b['datum'])}, überarbeitet am {datum(GEAENDERT)}</p>
    <div class="prose">
{text.rstrip()}
    </div>
    <p class="more"><a href="ratgeber/">Alle Ratgeber-Beiträge</a></p>
  </div>
</article>
"""
    return rahmen(f"{b['titel']} | Auto-Schrottplatz.de", b["kurz"], inhalt, ld)


def uebersicht():
    e = html.escape
    karten = "\n".join(
        f"""      <li><a href="{b['slug']}/"><h2>{e(b['titel'])}</h2></a><p>{e(b['kurz'])}</p><p class="stand">{datum(b['datum'])}</p></li>"""
        for b in BEITRAEGE)
    ld = {"@context": "https://schema.org", "@type": "CollectionPage", "name": "Ratgeber: Auto verschrotten",
          "url": "https://auto-schrottplatz.de/ratgeber/"}
    inhalt = f"""<section>
  <div class="wrap artikel">
    <p class="crumb"><a href="./">Startseite</a> / Ratgeber</p>
    <h1>Ratgeber: Auto verschrotten</h1>
    <p class="lead">Neuigkeiten von auto-schrottplatz.de und Wissen rund ums alte Auto: Abholung, Verwertungsnachweis und worauf du achten solltest.</p>
    <ul class="beitraege">
{karten}
    </ul>
  </div>
</section>
"""
    return rahmen("Ratgeber: Auto verschrotten, Tipps und Hintergründe | Auto-Schrottplatz.de",
                  "Ratgeber rund ums alte Auto: Ablauf der Abholung, Verwertungsnachweis und Tipps, worauf du bei der Verwertung achten solltest.",
                  inhalt, ld)


if __name__ == "__main__":
    seiten = {"ratgeber": uebersicht()}
    seiten.update({b["slug"]: beitrag(b) for b in BEITRAEGE})
    for slug, text in seiten.items():
        ziel = ZIEL / slug / "index.html"
        ziel.parent.mkdir(parents=True, exist_ok=True)
        ziel.write_text(text, encoding="utf-8")
        print("geschrieben:", ziel.relative_to(ZIEL.parent))
