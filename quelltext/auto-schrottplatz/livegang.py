#!/usr/bin/env python3
"""Hilfen rund um den Livegang von Auto-Schrottplatz.de.

  python3 quelltext/auto-schrottplatz/livegang.py sitemap   schreibt sitemap.xml (jederzeit unkritisch)
  python3 quelltext/auto-schrottplatz/livegang.py live      NUR ZUM LIVEGANG: nimmt die Google-Sperre (noindex)
                                                            und den gelben Entwurfs-Hinweis aus allen Seiten
                                                            und schreibt robots.txt

"live" legt die Schalter-Datei LIVE neben dieses Skript. Solange sie existiert, schalten die Erzeuger
stadtseiten.py und ratgeber.py nach jedem Lauf von selbst wieder frei (sie rufen nach_erzeugen() auf).
Zurück in den Entwurf: Datei LIVE löschen und beide Erzeuger neu laufen lassen (index.html, en/ und 404.html
sind handgepflegt und müssten dann von Hand zurückgestellt werden).
"""
import datetime
import pathlib
import re
import sys

ZIEL = pathlib.Path(__file__).resolve().parents[2] / "auto-schrottplatz"
DOMAIN = "https://auto-schrottplatz.de"
NICHT_IN_SITEMAP = {"danke", "impressum", "datenschutz"}  # bleiben auch nach dem Livegang auf noindex
SCHALTER = pathlib.Path(__file__).resolve().parent / "LIVE"  # liegt diese Datei da, ist die Seite live


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
    fehler = ZIEL / "404.html"
    if fehler.exists():
        text = fehler.read_text(encoding="utf-8")
        neu = re.sub(r'\n<div class="draft">.*?</div>\n', "\n", text, flags=re.S)
        if neu != text:
            fehler.write_text(neu, encoding="utf-8")
    SCHALTER.write_text("Die Seite ist live. Siehe livegang.py.\n", encoding="utf-8")
    (ZIEL / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {DOMAIN}/sitemap.xml\n", encoding="utf-8")
    print(f"{n} Seiten freigeschaltet, robots.txt geschrieben")


def nach_erzeugen():
    """Von den Erzeugern am Ende aufgerufen: hält Sitemap und, falls live, die Freischaltung aktuell."""
    if SCHALTER.exists():
        live()
    sitemap()


if __name__ == "__main__":
    befehl = sys.argv[1] if len(sys.argv) > 1 else ""
    if befehl == "sitemap":
        sitemap()
    elif befehl == "live":
        live()
        sitemap()
    else:
        print(__doc__)
