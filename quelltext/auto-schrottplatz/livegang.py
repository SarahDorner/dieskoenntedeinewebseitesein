#!/usr/bin/env python3
"""Hilfen rund um den Livegang von Auto-Schrottplatz.de.

  python3 quelltext/auto-schrottplatz/livegang.py sitemap   schreibt sitemap.xml (jederzeit unkritisch)
  python3 quelltext/auto-schrottplatz/livegang.py live      NUR ZUM LIVEGANG: nimmt die Google-Sperre (noindex)
                                                            und den gelben Entwurfs-Hinweis aus allen Seiten
                                                            und schreibt robots.txt

Achtung: Die Erzeuger stadtseiten.py und ratgeber.py schreiben noindex und den Entwurfs-Hinweis wieder hinein.
Nach "live" also entweder die Vorlagen dort anpassen oder "live" nach jedem Erzeugen erneut ausführen.
"""
import datetime
import pathlib
import re
import sys

ZIEL = pathlib.Path(__file__).resolve().parents[2] / "auto-schrottplatz"
DOMAIN = "https://auto-schrottplatz.de"
NICHT_IN_SITEMAP = {"danke"}


def seiten():
    yield "", ZIEL / "index.html"
    for d in sorted(p for p in ZIEL.iterdir() if p.is_dir() and (p / "index.html").exists()):
        yield d.name + "/", d / "index.html"


def sitemap():
    heute = datetime.date.today().isoformat()
    zeilen = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    n = 0
    for pfad, _ in seiten():
        if pfad.strip("/") in NICHT_IN_SITEMAP:
            continue
        zeilen.append(f"  <url><loc>{DOMAIN}/{pfad}</loc><lastmod>{heute}</lastmod></url>")
        n += 1
    zeilen.append("</urlset>")
    (ZIEL / "sitemap.xml").write_text("\n".join(zeilen) + "\n", encoding="utf-8")
    print(f"sitemap.xml mit {n} Adressen geschrieben")


def live():
    n = 0
    for pfad, datei in seiten():
        text = datei.read_text(encoding="utf-8")
        neu = re.sub(r'\n<div class="draft">.*?</div>\n', "\n", text, flags=re.S)
        if pfad.strip("/") not in NICHT_IN_SITEMAP:
            neu = neu.replace('<meta name="robots" content="noindex, nofollow">\n', "")
        if neu != text:
            datei.write_text(neu, encoding="utf-8")
            n += 1
    (ZIEL / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {DOMAIN}/sitemap.xml\n", encoding="utf-8")
    print(f"{n} Seiten freigeschaltet, robots.txt geschrieben")


if __name__ == "__main__":
    befehl = sys.argv[1] if len(sys.argv) > 1 else ""
    if befehl == "sitemap":
        sitemap()
    elif befehl == "live":
        live()
        sitemap()
    else:
        print(__doc__)
