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
        "slug": "auto-verschrotten-ohne-papiere",
        "titel": "Auto verschrotten ohne Papiere: Was tun, wenn Brief oder Schein fehlen?",
        "kurz": "Welche Unterlagen du für die Verwertung brauchst und wie du Ersatz bekommst, wenn Fahrzeugbrief oder Fahrzeugschein fehlen.",
        "datum": "2026-11-23",
    },
    {
        "slug": "roter-aufkleber-am-auto",
        "titel": "Roter Aufkleber am Auto: Was er bedeutet und was du jetzt tun solltest",
        "kurz": "Der rote Punkt vom Ordnungsamt setzt eine Frist. So vermeidest du Abschleppkosten und wirst dein Auto schnell los.",
        "datum": "2026-11-23",
    },
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
    <a class="logo" href="./"><img src="bilder/logo-auto-schrottplatz.png" width="250" height="125" alt="Auto-Schrottplatz.de"></a>
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
    <div><b>Seiten</b><a href="./">Startseite</a><a href="./#orte">Abholgebiete</a><a href="ratgeber/">Ratgeber</a><a href="en/" lang="en">English</a></div>
    <div class="legal"><a href="impressum/">Impressum</a><a href="datenschutz/">Datenschutz</a></div>
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
    stand = f"Veröffentlicht am {datum(b['datum'])}"
    if b["datum"] != GEAENDERT:
        stand += f", überarbeitet am {datum(GEAENDERT)}"
    inhalt = f"""<article>
  <div class="wrap artikel">
    <p class="crumb"><a href="./">Startseite</a> / <a href="ratgeber/">Ratgeber</a></p>
    <h1>{e(b['titel'])}</h1>
    <p class="stand">{stand}</p>
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


def danke():
    ld = {"@context": "https://schema.org", "@type": "WebPage", "name": "Danke für deine Anfrage"}
    inhalt = """<section>
  <div class="wrap artikel">
    <h1>Danke, deine Anfrage ist da.</h1>
    <p class="lead">Wir melden uns so schnell wie möglich bei dir, meist per Anruf oder WhatsApp.</p>
    <p class="more"><a href="./">Zurück zur Startseite</a></p>
  </div>
</section>
"""
    return rahmen("Danke für deine Anfrage | Auto-Schrottplatz.de", "Deine Anfrage ist bei uns angekommen.", inhalt, ld)


# Angaben für Impressum und Datenschutz. Stand 23.11.2026: Adam soll im Impressum stehen,
# die Angaben des alten Impressums (14.09.2026) stimmen laut Sarah.
FIRMA = "Bochumer Autohandel"
INHABER = "Adam El Lahib"
STRASSE = "Dieselstraße 33"
ORT = "44805 Bochum"


def rechtsseite(titel, beschreibung, h1, stand, koerper):
    ld = {"@context": "https://schema.org", "@type": "WebPage", "name": h1}
    inhalt = f"""<section>
  <div class="wrap artikel">
    <h1>{h1}</h1>
    <p class="stand">Stand: {stand}</p>
    <div class="prose">
{koerper}
    </div>
  </div>
</section>
"""
    return rahmen(titel, beschreibung, inhalt, ld)


def impressum():
    k = f"""<h2>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</h2>
<p>{FIRMA}<br>Inhaber: {INHABER}<br>{STRASSE}<br>{ORT}<br>Deutschland</p>

<h2>Kontakt</h2>
<p>Telefon: <a href="{TEL_LINK}">{TEL}</a><br>E-Mail: <a href="mailto:{MAIL}">{MAIL}</a><br>Website: www.auto-schrottplatz.de</p>

<h2>Umsatzsteuer-ID</h2>
<p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE453941222</p>

<h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
<p>{INHABER}, {STRASSE}, {ORT}</p>

<h2>Verbraucherschlichtung</h2>
<p>Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

<h2>Haftung für Inhalte</h2>
<p>Für die eigenen Inhalte dieser Website sind wir nach den allgemeinen Gesetzen verantwortlich (§ 7 Abs. 1 DDG). Wir sind aber nicht verpflichtet, fremde Informationen zu überwachen, die wir übermitteln oder speichern (§§ 8 bis 10 DDG). Erfahren wir von einer Rechtsverletzung, entfernen wir den betroffenen Inhalt umgehend.</p>

<h2>Haftung für Links</h2>
<p>Diese Website verlinkt auf Seiten anderer Anbieter, zum Beispiel auf WhatsApp. Auf deren Inhalte haben wir keinen Einfluss, verantwortlich ist der jeweilige Anbieter. Erfahren wir von rechtswidrigen Inhalten auf einer verlinkten Seite, entfernen wir den Link.</p>

<h2>Urheberrecht</h2>
<p>Texte, Bilder und Gestaltung dieser Website sind urheberrechtlich geschützt. Wer sie über den privaten Gebrauch hinaus nutzen möchte, braucht vorher unsere schriftliche Zustimmung.</p>"""
    return rechtsseite("Impressum | Auto-Schrottplatz.de", "Impressum von Auto-Schrottplatz.de.", "Impressum", "November 2026", k)


def datenschutz():
    k = f"""<p>Hier steht, welche Daten wir verarbeiten, wenn du diese Website besuchst oder uns eine Anfrage schickst. Kurz gesagt: Wir setzen keine Cookies, messen keine Besucher und nutzen deine Angaben nur, um dir ein Angebot zu machen und dein Fahrzeug abzuholen.</p>

<h2>Wer ist verantwortlich?</h2>
<p>{INHABER}<br>{FIRMA}<br>{STRASSE}<br>{ORT}<br>Telefon: <a href="{TEL_LINK}">{TEL}</a><br>E-Mail: <a href="mailto:{MAIL}">{MAIL}</a></p>

<h2>Hosting und Server-Protokolle</h2>
<p>Diese Website liegt bei Netlify (Netlify, Inc., San Francisco, USA). Wenn du eine Seite aufrufst, verarbeitet Netlify technisch notwendige Daten: deine IP-Adresse, Datum und Uhrzeit, die aufgerufene Seite und Angaben zu Browser und Gerät. Das ist nötig, um die Seite auszuliefern und sie vor Angriffen zu schützen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DS-GVO. Unser berechtigtes Interesse ist der sichere und stabile Betrieb der Website.</p>
<p>Netlify verarbeitet Daten auch auf Servern in den USA. Mit Netlify besteht ein Vertrag zur Auftragsverarbeitung.</p>

<h2>Anfrageformular</h2>
<p>Wenn du das Anfrageformular nutzt, verarbeiten wir deine Angaben: Marke, Modell, Baujahr, Ort, Zustand des Fahrzeugs, deine Telefonnummer, auf Wunsch deinen Namen und bis zu drei Fotos. Wir brauchen sie, um dir einen Preis zu nennen und einen Abholtermin abzustimmen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DS-GVO (Schritte vor einem Vertrag).</p>
<p>Technisch läuft das Formular über Netlify Forms. Deine Angaben und Fotos werden dort gespeichert und uns per E-Mail zugeschickt. Fotos verkleinert dein Browser vor dem Senden.</p>

<h2>Telefon, E-Mail und WhatsApp</h2>
<p>Rufst du uns an oder schreibst du uns eine E-Mail, verarbeiten wir deine Angaben, um dein Anliegen zu bearbeiten (Art. 6 Abs. 1 lit. b DS-GVO).</p>
<p>Die WhatsApp-Knöpfe auf dieser Website sind einfache Links. Erst wenn du darauf tippst, öffnet sich WhatsApp. Ab dann gelten die Datenschutzregeln von WhatsApp (WhatsApp Ireland Limited). Wenn du das nicht möchtest, ruf uns an oder nutze das Formular.</p>

<h2>Cookies, Statistik und Schriften</h2>
<p>Diese Website setzt keine Cookies und nutzt keine Statistik- oder Werbedienste. Deshalb gibt es auch kein Cookie-Banner. Schriften, Bilder und Skripte laden wir vom eigenen Speicherplatz, nicht von Servern Dritter.</p>

<h2>Weitergabe von Daten</h2>
<p>Wir verkaufen deine Daten nicht und geben sie nicht zu Werbezwecken weiter. Eine Weitergabe gibt es nur, soweit sie für die Abholung und Verwertung deines Fahrzeugs nötig ist (zum Beispiel an die Zulassungsstelle für die Abmeldung) oder ein Gesetz sie vorschreibt.</p>

<h2>Wie lange speichern wir?</h2>
<p>Anfragen, aus denen kein Auftrag wird, löschen wir, sobald sie erledigt sind. Kaufverträge und Nachweise bewahren wir so lange auf, wie es Handels- und Steuerrecht verlangen.</p>

<h2>Deine Rechte</h2>
<p>Du kannst Auskunft über deine gespeicherten Daten verlangen, falsche Angaben berichtigen lassen, die Löschung oder Einschränkung der Verarbeitung verlangen, der Verarbeitung widersprechen und deine Daten in einem gängigen Format erhalten. Schreib uns dafür einfach an <a href="mailto:{MAIL}">{MAIL}</a>.</p>
<p>Du kannst dich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel bei der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.</p>

<h2>Änderungen</h2>
<p>Wenn sich an der Website etwas ändert, passen wir diese Erklärung an. Hier steht immer die aktuelle Fassung.</p>"""
    return rechtsseite("Datenschutz | Auto-Schrottplatz.de", "Datenschutzerklärung von Auto-Schrottplatz.de.", "Datenschutz", "November 2026", k)


if __name__ == "__main__":
    seiten = {"ratgeber": uebersicht(), "danke": danke(), "impressum": impressum(), "datenschutz": datenschutz()}
    seiten.update({b["slug"]: beitrag(b) for b in BEITRAEGE})
    for slug, text in seiten.items():
        ziel = ZIEL / slug / "index.html"
        ziel.parent.mkdir(parents=True, exist_ok=True)
        ziel.write_text(text, encoding="utf-8")
        print("geschrieben:", ziel.relative_to(ZIEL.parent))
    import livegang
    livegang.nach_erzeugen()
