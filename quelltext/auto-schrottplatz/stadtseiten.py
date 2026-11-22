#!/usr/bin/env python3
"""Baut die Stadtseiten für Auto-Schrottplatz.de aus einer Vorlage.

Aufruf im Repo-Hauptordner:  python3 quelltext/auto-schrottplatz/stadtseiten.py
Schreibt nach auto-schrottplatz/<slug>/index.html.

Jede Stadt braucht eigene, echte Ortsangaben (Bezirke, Zulassungsstelle,
Besonderheiten, Umland). Nur den Stadtnamen tauschen reicht nicht, das wertet
Google als Brückenseite. Anrede gegenüber den Kunden: Du (Wunsch Adam, 22.11.2026).
"""
import html
import json
import pathlib

ZIEL = pathlib.Path(__file__).resolve().parents[2] / "auto-schrottplatz"
TEL = "0152 313 444 44"
TEL_LINK = "tel:+4915231344444"
WA = "https://wa.me/4915231344444"
MAIL = "info@auto-schrottplatz.de"
ADRESSE = {"@type": "PostalAddress", "streetAddress": "Hauptstr. 131", "postalCode": "51465",
           "addressLocality": "Bergisch Gladbach", "addressCountry": "DE"}

STAEDTE = [
    {
        "slug": "koeln",
        "name": "Köln",
        "bewohner": "Kölner",
        "in": "in Köln",
        "lead": "Von Chorweiler bis Porz, von Lindenthal bis Mülheim: Wir holen dein Fahrzeug kostenlos bei dir ab, zahlen dir den Restwert bei der Übergabe und melden das Auto kostenlos für dich ab.",
        "fakt_bezirke": "Abholung in allen neun Stadtbezirken, kostenlos",
        "ort_beispiel": "z. B. 50823 Ehrenfeld",
        "marke_beispiel": ("Ford", "Fiesta"),
        "meta": "Auto verschrotten in Köln: kostenlose Abholung in allen neun Stadtbezirken, oft schon in 6 Stunden, Restwert bei Übergabe, Abmeldung kostenlos. Jetzt anfragen.",
        "praktisch": "Gerade in Köln ist das praktisch. Wer ein Auto ohne TÜV oder mit Motorschaden hat, darf damit nicht mehr quer durch die Stadt fahren, und ein Abschleppdienst zum nächsten Verwerter kostet schnell mehr, als das Auto wert ist.",
        "eng_titel": "Enge Veedel, Tiefgaragen, Hinterhöfe",
        "eng_text": "Viele Kölner Autos stehen dort, wo ein Abschleppwagen nicht einfach vorfahren kann: in der Tiefgarage in Deutz, im Hinterhof in Ehrenfeld, in der zugeparkten Straße in Nippes oder der Südstadt. Das ist für uns kein Problem. Wir holen dein Auto überall raus und bringen das passende Werkzeug mit. Schreib uns kurz, wie das Fahrzeug steht und ob es noch rollt.",
        "abmelden": "Für die Abmeldung ist die Kfz-Zulassungsstelle der Stadt Köln zuständig, alternativ geht es online über die internetbasierte Fahrzeugzulassung. Den Weg kannst du dir sparen: Wir melden dein Auto kostenlos für dich ab. Die Abmeldebescheinigung und den Verwertungsnachweis bekommst du per WhatsApp, E-Mail oder Post.",
        "abmelden_kurz": "Bei der Kfz-Zulassungsstelle der Stadt Köln oder online über die internetbasierte Fahrzeugzulassung. Einfacher: Wir melden dein Auto kostenlos für dich ab und schicken dir die Abmeldebescheinigung per WhatsApp, E-Mail oder Post.",
        "bezirke_titel": "Alle neun Kölner Stadtbezirke",
        "bezirke": [
            ("Innenstadt", "Altstadt-Nord, Altstadt-Süd, Neustadt-Nord, Neustadt-Süd, Deutz"),
            ("Rodenkirchen", "Bayenthal, Marienburg, Zollstock, Sürth, Rondorf, Weiß"),
            ("Lindenthal", "Sülz, Klettenberg, Braunsfeld, Junkersdorf, Weiden, Lövenich"),
            ("Ehrenfeld", "Ehrenfeld, Neuehrenfeld, Bickendorf, Vogelsang, Ossendorf"),
            ("Nippes", "Nippes, Riehl, Niehl, Weidenpesch, Longerich, Bilderstöckchen"),
            ("Chorweiler", "Chorweiler, Heimersdorf, Pesch, Worringen, Merkenich"),
            ("Porz", "Porz, Wahn, Urbach, Eil, Ensen, Zündorf"),
            ("Kalk", "Kalk, Vingst, Höhenberg, Ostheim, Merheim, Brück"),
            ("Mülheim", "Mülheim, Buchforst, Holweide, Dellbrück, Höhenhaus, Dünnwald"),
        ],
        "umland_titel": "Auch im Kölner Umland",
        "umland": [("LEV", "Leverkusen"), ("GL", "Bergisch Gladbach"), ("BM", "Hürth"), ("BM", "Frechen"),
                   ("BM", "Pulheim"), ("BM", "Brühl"), ("SU", "Troisdorf"), ("NE", "Dormagen")],
        "faq_titel": "Was Kölner uns oft fragen",
    },
    {
        "slug": "hamburg",
        "name": "Hamburg",
        "bewohner": "Hamburger",
        "in": "in Hamburg",
        "lead": "Von Blankenese bis Bergedorf, von Langenhorn bis Harburg: Wir holen dein Fahrzeug kostenlos bei dir ab, zahlen dir den Restwert bei der Übergabe und melden das Auto kostenlos für dich ab.",
        "fakt_bezirke": "Abholung in allen sieben Bezirken, kostenlos",
        "ort_beispiel": "z. B. 22765 Ottensen",
        "marke_beispiel": ("VW", "Polo"),
        "meta": "Auto verschrotten in Hamburg: kostenlose Abholung in allen sieben Bezirken, oft schon in 6 Stunden, Restwert bei Übergabe, Abmeldung kostenlos. Jetzt anfragen.",
        "praktisch": "Gerade in Hamburg ist das praktisch. Wer ein Auto ohne TÜV oder mit Motorschaden hat, darf damit nicht mehr quer durch die Stadt fahren, und ein Abschleppdienst zum nächsten Verwerter kostet schnell mehr, als das Auto wert ist.",
        "eng_titel": "Enge Straßen, Tiefgaragen, Hinterhöfe",
        "eng_text": "Viele Hamburger Autos stehen dort, wo ein Abschleppwagen nicht einfach vorfahren kann: in der Tiefgarage in Eimsbüttel, im Hinterhof in Ottensen, in der zugeparkten Wohnstraße in Barmbek. Das ist für uns kein Problem. Wir holen dein Auto überall raus und bringen das passende Werkzeug mit. Schreib uns kurz, wie das Fahrzeug steht und ob es noch rollt.",
        "abmelden": "Für die Abmeldung ist in Hamburg der Landesbetrieb Verkehr (LBV) zuständig, alternativ geht es online über die internetbasierte Fahrzeugzulassung. Den Weg kannst du dir sparen: Wir melden dein Auto kostenlos für dich ab. Die Abmeldebescheinigung und den Verwertungsnachweis bekommst du per WhatsApp, E-Mail oder Post.",
        "abmelden_kurz": "Beim Landesbetrieb Verkehr (LBV) oder online über die internetbasierte Fahrzeugzulassung. Einfacher: Wir melden dein Auto kostenlos für dich ab und schicken dir die Abmeldebescheinigung per WhatsApp, E-Mail oder Post.",
        "bezirke_titel": "Alle sieben Hamburger Bezirke",
        "bezirke": [
            ("Hamburg-Mitte", "St. Pauli, St. Georg, Hamm, Billstedt, Wilhelmsburg, Finkenwerder"),
            ("Altona", "Ottensen, Bahrenfeld, Lurup, Osdorf, Blankenese, Rissen"),
            ("Eimsbüttel", "Eimsbüttel, Stellingen, Lokstedt, Niendorf, Schnelsen, Eidelstedt"),
            ("Hamburg-Nord", "Winterhude, Barmbek, Eppendorf, Fuhlsbüttel, Langenhorn"),
            ("Wandsbek", "Wandsbek, Bramfeld, Rahlstedt, Farmsen-Berne, Poppenbüttel, Volksdorf"),
            ("Bergedorf", "Bergedorf, Lohbrügge, Neuallermöhe, Kirchwerder"),
            ("Harburg", "Harburg, Heimfeld, Eißendorf, Neugraben-Fischbek, Hausbruch"),
        ],
        "umland_titel": "Auch im Hamburger Umland",
        "umland": [("SE", "Norderstedt"), ("PI", "Pinneberg"), ("PI", "Elmshorn"), ("STD", "Buxtehude"),
                   ("STD", "Stade"), ("WL", "Seevetal"), ("WL", "Buchholz"), ("LG", "Lüneburg")],
        "faq_titel": "Was Hamburger uns oft fragen",
    },
    {
        "slug": "leverkusen", "name": "Leverkusen", "bewohner": "Leverkusener",
        "von_bis": "Von Hitdorf bis Schlebusch, von Opladen bis Wiesdorf",
        "fakt_bezirke": "Abholung in allen drei Stadtbezirken, kostenlos",
        "ort_beispiel": "z. B. 51379 Opladen", "marke_beispiel": ("Opel", "Astra"),
        "eng_orte": "in der Tiefgarage in Wiesdorf, im Hinterhof in Opladen, auf dem engen Stellplatz in Manfort",
        "bezirke_titel": "Alle drei Leverkusener Stadtbezirke",
        "bezirke": [("Stadtbezirk I", "Wiesdorf, Manfort, Rheindorf, Hitdorf"),
                    ("Stadtbezirk II", "Opladen, Küppersteg, Bürrig, Quettingen, Bergisch Neukirchen"),
                    ("Stadtbezirk III", "Schlebusch, Steinbüchel, Lützenkirchen, Alkenrath")],
        "umland": [("K", "Köln"), ("GL", "Bergisch Gladbach"), ("GL", "Burscheid"), ("GL", "Leichlingen"),
                   ("ME", "Langenfeld"), ("ME", "Monheim"), ("GL", "Odenthal"), ("SG", "Solingen")],
    },
    {
        "slug": "bergisch-gladbach", "name": "Bergisch Gladbach", "bewohner": "Bergisch Gladbacher",
        "von_bis": "Von Schildgen bis Herkenrath, von Refrath bis Bensberg",
        "fakt_bezirke": "Abholung in allen Stadtteilen, kostenlos",
        "ort_beispiel": "z. B. 51427 Refrath", "marke_beispiel": ("VW", "Golf"),
        "stelle": "das Straßenverkehrsamt des Rheinisch-Bergischen Kreises",
        "eng_orte": "in der Tiefgarage in der Stadtmitte, am Hang in Bensberg, in der schmalen Einfahrt in Refrath",
        "bezirke_titel": "Alle Stadtteile von Bergisch Gladbach", "spalte": "Bereich",
        "bezirke": [("Stadtmitte und Norden", "Stadtmitte, Hebborn, Paffrath, Nussbaum, Katterbach, Schildgen, Hand"),
                    ("Gronau und Heidkamp", "Gronau, Heidkamp"),
                    ("Bensberg", "Bensberg, Kaule, Bockenberg, Moitzfeld, Lückerath"),
                    ("Refrath", "Refrath, Frankenforst, Lustheide, Kippekausen"),
                    ("Osten", "Herkenrath, Sand, Herrenstrunden, Bärbroich, Romaney")],
        "umland": [("K", "Köln"), ("LEV", "Leverkusen"), ("GL", "Overath"), ("GL", "Rösrath"),
                   ("GL", "Kürten"), ("GL", "Odenthal"), ("GL", "Wermelskirchen"), ("GM", "Lindlar")],
    },
    {
        "slug": "bonn", "name": "Bonn", "bewohner": "Bonner",
        "von_bis": "Von Tannenbusch bis Mehlem, von Duisdorf bis Beuel",
        "fakt_bezirke": "Abholung in allen vier Stadtbezirken, kostenlos",
        "ort_beispiel": "z. B. 53225 Beuel", "marke_beispiel": ("Ford", "Focus"),
        "eng_orte": "in der Tiefgarage in der Südstadt, im Hinterhof in der Nordstadt, in der engen Straße in Poppelsdorf",
        "bezirke_titel": "Alle vier Bonner Stadtbezirke",
        "bezirke": [("Bonn", "Zentrum, Südstadt, Nordstadt, Poppelsdorf, Kessenich, Endenich, Tannenbusch, Dottendorf"),
                    ("Bad Godesberg", "Friesdorf, Plittersdorf, Rüngsdorf, Muffendorf, Lannesdorf, Mehlem"),
                    ("Beuel", "Beuel-Mitte, Limperich, Pützchen, Vilich, Holzlar, Oberkassel"),
                    ("Hardtberg", "Duisdorf, Lengsdorf, Brüser Berg, Hardthöhe")],
        "umland": [("SU", "Sankt Augustin"), ("SU", "Troisdorf"), ("SU", "Siegburg"), ("SU", "Königswinter"),
                   ("SU", "Bornheim"), ("SU", "Meckenheim"), ("SU", "Bad Honnef"), ("BM", "Wesseling")],
    },
    {
        "slug": "duesseldorf", "name": "Düsseldorf", "bewohner": "Düsseldorfer",
        "von_bis": "Von Kaiserswerth bis Garath, von Oberkassel bis Gerresheim",
        "fakt_bezirke": "Abholung in allen zehn Stadtbezirken, kostenlos",
        "ort_beispiel": "z. B. 40227 Oberbilk", "marke_beispiel": ("Opel", "Corsa"),
        "eng_orte": "in der Tiefgarage in Pempelfort, im Hinterhof in Flingern, in der zugeparkten Straße in Bilk",
        "bezirke_titel": "Alle zehn Düsseldorfer Stadtbezirke",
        "bezirke": [("Stadtbezirk 1", "Altstadt, Carlstadt, Stadtmitte, Pempelfort, Derendorf, Golzheim"),
                    ("Stadtbezirk 2", "Flingern, Düsseltal"),
                    ("Stadtbezirk 3", "Bilk, Oberbilk, Unterbilk, Friedrichstadt, Hafen, Hamm, Flehe"),
                    ("Stadtbezirk 4", "Oberkassel, Niederkassel, Heerdt, Lörick"),
                    ("Stadtbezirk 5", "Kaiserswerth, Stockum, Lohausen, Wittlaer, Angermund"),
                    ("Stadtbezirk 6", "Rath, Unterrath, Lichtenbroich, Mörsenbroich"),
                    ("Stadtbezirk 7", "Gerresheim, Grafenberg, Ludenberg, Hubbelrath"),
                    ("Stadtbezirk 8", "Eller, Lierenfeld, Vennhausen, Unterbach"),
                    ("Stadtbezirk 9", "Benrath, Wersten, Holthausen, Hassels, Reisholz, Urdenbach"),
                    ("Stadtbezirk 10", "Garath, Hellerhof")],
        "umland": [("NE", "Neuss"), ("NE", "Meerbusch"), ("ME", "Ratingen"), ("ME", "Hilden"),
                   ("ME", "Erkrath"), ("ME", "Mettmann"), ("ME", "Langenfeld"), ("NE", "Dormagen")],
    },
    {
        "slug": "frankfurt", "name": "Frankfurt", "bewohner": "Frankfurter", "in": "in Frankfurt am Main",
        "stelle": "die Kfz-Zulassungsbehörde der Stadt Frankfurt",
        "von_bis": "Von Höchst bis Fechenheim, von Nieder-Eschbach bis Sachsenhausen",
        "fakt_bezirke": "Abholung in allen 16 Ortsbezirken, kostenlos",
        "ort_beispiel": "z. B. 60385 Bornheim", "marke_beispiel": ("Opel", "Corsa"),
        "eng_orte": "in der Tiefgarage im Nordend, im Hinterhof in Bockenheim, in der zugeparkten Straße in Sachsenhausen",
        "bezirke_titel": "Ganz Frankfurt, alle 16 Ortsbezirke", "spalte": "Gebiet",
        "bezirke": [("Innenstadt", "Altstadt, Innenstadt, Bahnhofsviertel, Gallus, Gutleutviertel, Nordend, Westend"),
                    ("Westen", "Höchst, Nied, Griesheim, Sossenheim, Unterliederbach, Zeilsheim, Sindlingen"),
                    ("Nordwesten", "Bockenheim, Rödelheim, Hausen, Praunheim, Heddernheim, Niederursel"),
                    ("Norden", "Eschersheim, Dornbusch, Bonames, Nieder-Eschbach, Kalbach-Riedberg, Harheim"),
                    ("Osten", "Bornheim, Ostend, Seckbach, Riederwald, Fechenheim, Bergen-Enkheim"),
                    ("Süden", "Sachsenhausen, Oberrad, Niederrad, Schwanheim")],
        "umland": [("OF", "Offenbach"), ("OF", "Neu-Isenburg"), ("HG", "Bad Homburg"), ("HG", "Oberursel"),
                   ("MTK", "Eschborn"), ("MTK", "Hofheim"), ("FB", "Bad Vilbel"), ("HU", "Maintal")],
    },
    {
        "slug": "mainz", "name": "Mainz", "bewohner": "Mainzer",
        "von_bis": "Von Mombach bis Laubenheim, von Finthen bis in die Neustadt",
        "fakt_bezirke": "Abholung in allen 15 Ortsbezirken, kostenlos",
        "ort_beispiel": "z. B. 55118 Neustadt", "marke_beispiel": ("Opel", "Astra"),
        "eng_orte": "in der Tiefgarage in der Oberstadt, im Hinterhof in der Neustadt, in der engen Gasse in der Altstadt",
        "bezirke_titel": "Alle 15 Mainzer Ortsbezirke", "spalte": "Gebiet",
        "bezirke": [("Innenstadt", "Altstadt, Neustadt, Oberstadt, Hartenberg-Münchfeld"),
                    ("Norden und Westen", "Mombach, Gonsenheim, Finthen, Drais"),
                    ("Südwesten", "Bretzenheim, Marienborn, Lerchenberg"),
                    ("Süden", "Weisenau, Laubenheim, Hechtsheim, Ebersheim")],
        "umland": [("WI", "Wiesbaden"), ("MZ", "Ingelheim"), ("MZ", "Budenheim"), ("MZ", "Nieder-Olm"),
                   ("MZ", "Bodenheim"), ("GG", "Rüsselsheim"), ("KH", "Bad Kreuznach"), ("AZ", "Alzey")],
    },
    {
        "slug": "wiesbaden", "name": "Wiesbaden", "bewohner": "Wiesbadener",
        "von_bis": "Von Dotzheim bis Nordenstadt, von Sonnenberg bis Mainz-Kastel",
        "fakt_bezirke": "Abholung in allen 26 Ortsbezirken, kostenlos",
        "ort_beispiel": "z. B. 65203 Biebrich", "marke_beispiel": ("VW", "Polo"),
        "eng_orte": "in der Tiefgarage im Westend, im Hinterhof im Rheingauviertel, am Hang in Sonnenberg",
        "bezirke_titel": "Alle 26 Wiesbadener Ortsbezirke", "spalte": "Gebiet",
        "bezirke": [("Innenstadt", "Mitte, Westend, Nordost, Südost, Rheingauviertel, Klarenthal"),
                    ("Am Rhein", "Biebrich, Schierstein, Mainz-Kastel, Mainz-Kostheim, Mainz-Amöneburg"),
                    ("Westen", "Dotzheim, Frauenstein"),
                    ("Osten", "Bierstadt, Erbenheim, Nordenstadt, Delkenheim, Igstadt, Kloppenheim"),
                    ("Nordosten", "Sonnenberg, Rambach, Naurod, Auringen, Medenbach, Breckenheim, Heßloch")],
        "umland": [("MZ", "Mainz"), ("RÜD", "Taunusstein"), ("RÜD", "Eltville"), ("RÜD", "Idstein"),
                   ("RÜD", "Niedernhausen"), ("RÜD", "Walluf"), ("MTK", "Hochheim"), ("MTK", "Hofheim")],
    },
    {
        "slug": "offenbach", "name": "Offenbach", "bewohner": "Offenbacher", "in": "in Offenbach am Main",
        "von_bis": "Von Kaiserlei bis Bieber, von Rumpenheim bis Lauterborn",
        "fakt_bezirke": "Abholung in allen Stadtteilen, kostenlos",
        "ort_beispiel": "z. B. 63075 Bürgel", "marke_beispiel": ("Opel", "Zafira"),
        "eng_orte": "in der Tiefgarage in der Innenstadt, im Hinterhof im Nordend, im Mathildenviertel mit seinen engen Straßen",
        "bezirke_titel": "Alle Offenbacher Stadtteile", "spalte": "Gebiet",
        "bezirke": [("Innenstadt und Norden", "Innenstadt, Nordend, Hafen, Kaiserlei, Mathildenviertel"),
                    ("Westen und Süden", "Westend, Lauterborn, Rosenhöhe, Tempelsee, Buchrain"),
                    ("Osten", "Bürgel, Rumpenheim, Waldheim, Bieber")],
        "umland": [("F", "Frankfurt"), ("OF", "Mühlheim"), ("OF", "Obertshausen"), ("OF", "Heusenstamm"),
                   ("OF", "Neu-Isenburg"), ("OF", "Dietzenbach"), ("OF", "Dreieich"), ("OF", "Rodgau")],
    },
    {
        "slug": "hanau", "name": "Hanau", "bewohner": "Hanauer",
        "stelle": "die Kfz-Zulassungsstelle in Hanau",
        "von_bis": "Von Kesselstadt bis Großauheim, von Mittelbuchen bis Steinheim",
        "fakt_bezirke": "Abholung in allen Stadtteilen, kostenlos",
        "ort_beispiel": "z. B. 63456 Steinheim", "marke_beispiel": ("Opel", "Meriva"),
        "eng_orte": "in der Tiefgarage in der Innenstadt, im Hinterhof im Lamboy, in der Altstadt von Steinheim",
        "bezirke_titel": "Alle Hanauer Stadtteile", "spalte": "Gebiet",
        "bezirke": [("Kernstadt", "Innenstadt, Nordwest, Südost, Lamboy"),
                    ("Westen", "Kesselstadt, Wilhelmsbad, Hohe Tanne"),
                    ("Am Main", "Steinheim, Klein-Auheim, Großauheim"),
                    ("Außenbereich", "Wolfgang, Mittelbuchen")],
        "umland": [("HU", "Maintal"), ("HU", "Bruchköbel"), ("HU", "Erlensee"), ("HU", "Rodenbach"),
                   ("HU", "Großkrotzenburg"), ("OF", "Mühlheim"), ("OF", "Seligenstadt"), ("AB", "Kahl am Main")],
    },
    {
        "slug": "darmstadt", "name": "Darmstadt", "bewohner": "Darmstädter",
        "von_bis": "Von Wixhausen bis Eberstadt, von der Waldkolonie bis ins Woogsviertel",
        "fakt_bezirke": "Abholung in allen neun Stadtteilen, kostenlos",
        "ort_beispiel": "z. B. 64297 Eberstadt", "marke_beispiel": ("Opel", "Astra"),
        "eng_orte": "in der Tiefgarage in der Innenstadt, im Hinterhof im Martinsviertel, in der engen Straße in Bessungen",
        "bezirke_titel": "Alle neun Darmstädter Stadtteile", "spalte": "Stadtteil",
        "bezirke": [("Darmstadt-Mitte", "Stadtzentrum, Kapellplatzviertel, St. Ludwig"),
                    ("Darmstadt-Nord", "Martinsviertel, Johannesviertel, Bürgerparkviertel"),
                    ("Darmstadt-Ost", "Woogsviertel, Mathildenhöhe, Edelsteinviertel"),
                    ("Darmstadt-West", "Waldkolonie, Heimstättensiedlung, Verlegerviertel"),
                    ("Bessungen", "Alt-Bessungen, Paulusviertel, Lincoln-Siedlung"),
                    ("Norden", "Arheilgen, Kranichstein, Wixhausen"),
                    ("Süden", "Eberstadt")],
        "umland": [("DA", "Griesheim"), ("DA", "Weiterstadt"), ("DA", "Pfungstadt"), ("DA", "Mühltal"),
                   ("DA", "Ober-Ramstadt"), ("DA", "Roßdorf"), ("DA", "Dieburg"), ("DA", "Seeheim-Jugenheim")],
    },
]


def ergaenze(s):
    """Füllt Texte, die bei den meisten Städten gleich aufgebaut sind, aus den Ortsangaben."""
    s = dict(s)
    n, b = s["name"], s["bewohner"]
    if "in" not in s:
        s["in"] = f"in {n}"
    if "stelle" not in s:
        s["stelle"] = f"die Kfz-Zulassungsstelle der Stadt {n}"
    if "lead" not in s:
        s["lead"] = f"{s['von_bis']}: Wir holen dein Fahrzeug kostenlos bei dir ab, zahlen dir den Restwert bei der Übergabe und melden das Auto kostenlos für dich ab."
    if "meta" not in s:
        s["meta"] = f"Autoverwertung in {n}: kostenlose Abholung in allen Stadtteilen, oft schon in 6 Stunden, Restwert bei Übergabe, Abmeldung kostenlos. Jetzt anfragen."
    if "praktisch" not in s:
        s["praktisch"] = f"Gerade in {n} ist das praktisch. Wer ein Auto ohne TÜV oder mit Motorschaden hat, darf damit nicht mehr durch die Stadt fahren, und ein Abschleppdienst zum nächsten Verwerter kostet schnell mehr, als das Auto wert ist."
    if "eng_titel" not in s:
        s["eng_titel"] = "Tiefgaragen, Hinterhöfe, enge Straßen"
    if "eng_text" not in s:
        s["eng_text"] = f"Viele Autos in {n} stehen dort, wo ein Abschleppwagen nicht einfach vorfahren kann: {s['eng_orte']}. Das ist für uns kein Problem. Wir holen dein Auto überall raus und bringen das passende Werkzeug mit. Schreib uns kurz, wie das Fahrzeug steht und ob es noch rollt."
    if "abmelden" not in s:
        s["abmelden"] = f"Für die Abmeldung ist {s['stelle']} zuständig, alternativ geht es online über die internetbasierte Fahrzeugzulassung. Den Weg kannst du dir sparen: Wir melden dein Auto kostenlos für dich ab. Die Abmeldebescheinigung und den Verwertungsnachweis bekommst du per WhatsApp, E-Mail oder Post."
    if "abmelden_kurz" not in s:
        s["abmelden_kurz"] = f"Zuständig ist {s['stelle']}, alternativ geht es online über die internetbasierte Fahrzeugzulassung. Einfacher: Wir melden dein Auto kostenlos für dich ab und schicken dir die Abmeldebescheinigung per WhatsApp, E-Mail oder Post."
    if "umland_titel" not in s:
        s["umland_titel"] = f"Auch im {b} Umland"
    if "faq_titel" not in s:
        s["faq_titel"] = f"Was {b} uns oft fragen"
    return s


def faq(s):
    n = s["name"]
    return [
        (f"Habt ihr einen Schrottplatz in {n}?",
         f"Wir arbeiten in ganz Deutschland mit Partnerbetrieben zusammen. Wenn du dein Auto selbst bringen möchtest, ruf unsere Hotline an: {TEL}. Wir nennen dir die nächste Annahmestelle in deiner Nähe. Bequemer ist die Abholung: Unsere eigenen Fahrer kommen kostenlos direkt zu dir."),
        (f"Was kostet die Abholung in {n}?",
         "Nichts. Die Abholung ist kostenlos, in allen Stadtteilen und im Umland."),
        ("Bekomme ich für mein altes Auto noch Geld?",
         "Ja. Du bekommst immer den Restwert für dein Fahrzeug. Wir nennen dir vorab einen Festpreis und zahlen bei der Übergabe."),
        ("Wie schnell holt ihr ab?",
         "Oft schon innerhalb von 6 Stunden. Oder zum Wunschtermin: Wenn du noch auf dein neues Auto wartest, holen wir das alte auch erst in ein paar Wochen ab."),
        (f"Wo melde ich mein Auto in {n} ab?", s["abmelden_kurz"]),
        ("Holt ihr auch aus der Tiefgarage ab?",
         "Ja. Wir holen dein Auto aus der Tiefgarage, vom Hinterhof oder sogar aus dem Graben. Das passende Werkzeug bringen wir mit. Sag uns vorab die Durchfahrtshöhe und ob das Fahrzeug noch rollt."),
        ("Mein Auto steht ohne Zulassung an der Straße. Was nun?",
         "Abgemeldete Fahrzeuge dürfen nicht im öffentlichen Straßenraum stehen. Melde dich zeitnah, damit wir einen schnellen Abholtermin finden."),
        ("Nehmt ihr nur Autos?",
         "Nein. Wir nehmen alles, was auf Reifen läuft: Autos, Transporter, Motorräder und Wohnmobile."),
    ]


def seite(s):
    e = html.escape
    s = ergaenze(s)
    n, slug = s["name"], s["slug"]
    fragen = faq(s)
    ld_service = {"@context": "https://schema.org", "@type": "Service", "serviceType": "Autoverwertung mit Abholung",
                  "name": f"Auto verschrotten in {n}",
                  "provider": {"@type": "AutomotiveBusiness", "name": "Auto-Schrottplatz.de",
                               "telephone": "+4915231344444", "address": ADRESSE},
                  "areaServed": {"@type": "City", "name": n}}
    ld_crumb = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://auto-schrottplatz.de/"},
        {"@type": "ListItem", "position": 2, "name": "Abholgebiete", "item": "https://auto-schrottplatz.de/autoschrottplaetze-orte/"},
        {"@type": "ListItem", "position": 3, "name": n, "item": f"https://auto-schrottplatz.de/{slug}/"}]}
    ld_faq = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
        {"@type": "Question", "name": f, "acceptedAnswer": {"@type": "Answer", "text": a}} for f, a in fragen]}
    j = lambda d: json.dumps(d, ensure_ascii=False, separators=(",", ":"))
    bezirke = "\n".join(f"          <tr><td>{e(b)}</td><td>{e(t)}</td></tr>" for b, t in s["bezirke"])
    umland = "\n".join(f'      <li><span class="plate"><i>D</i><b>{k}</b><span>{e(o)}</span></span></li>' for k, o in s["umland"])
    faq_html = "\n".join(
        f'      <details{" open" if i == 0 else ""}><summary>{e(f)}</summary><p>{e(a)}</p></details>'
        for i, (f, a) in enumerate(fragen))
    return f"""<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Autoverwertung {n}: Autoschrottplatz mit kostenloser Abholung</title>
<meta name="description" content="{e(s['meta'])}">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27%3E%3Crect width=%2732%27 height=%2732%27 rx=%275%27 fill=%27%230097b2%27/%3E%3Cpath d=%27M7 18l2-6h14l2 6v5h-3v-2H10v2H7z%27 fill=%27%23fff%27/%3E%3C/svg%3E">
<base href="../">
<link rel="preload" href="fonts/archivo.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="style.css">
<script type="application/ld+json">
{j(ld_service)}
</script>
<script type="application/ld+json">
{j(ld_crumb)}
</script>
<script type="application/ld+json">
{j(ld_faq)}
</script>
</head>
<body>

<div class="draft">Entwurf von <a href="https://snackable-ads.de">Snackable Ads</a> für Auto-Schrottplatz.de. Muster für eine Stadtseite, bei Google nicht auffindbar.</div>

<header class="top">
  <div class="wrap">
    <a class="logo" href="./"><img src="https://auto-schrottplatz.de/wp-content/uploads/2025/06/Logo_Autoschrottplatz.png" width="250" height="125" alt="Auto-Schrottplatz.de"></a>
    <nav class="nav" aria-label="Hauptmenü">
      <a href="./#ablauf">So geht's</a>
      <a href="./#fahrzeuge">Was wir abholen</a>
      <a href="./#orte">Abholgebiete</a>
      <a href="{slug}/#fragen">Fragen</a>
    </nav>
    <a class="tel" href="{TEL_LINK}"><small>Anruf oder WhatsApp</small>{TEL}</a>
  </div>
</header>

<main>
<div class="hero">
  <div class="wrap">
    <div>
      <p class="crumb"><a href="./">Startseite</a> / <a href="./#orte">Abholgebiete</a> / {n}</p>
      <h1>Auto verschrotten {s['in']}. <em>Wir holen es ab.</em></h1>
      <p class="lead">{e(s['lead'])}</p>
      <ul class="facts">
        <li>{e(s['fakt_bezirke'])}</li>
        <li>Oft schon innerhalb von 6 Stunden oder zum Wunschtermin</li>
        <li>Du bekommst immer den Restwert, Abmeldung kostenlos</li>
      </ul>
      <p class="callline">Am schnellsten geht es am Telefon: <a href="{TEL_LINK}">{TEL}</a></p>
    </div>

    <form class="card" id="anfrage" autocomplete="on">
      <h2>Was ist dein Auto noch wert?</h2>
      <p class="sub">Fünf Angaben reichen für ein Angebot.</p>
      <div class="grid2">
        <div class="field"><label for="marke">Marke</label><input id="marke" name="marke" placeholder="z. B. {s['marke_beispiel'][0]}" required></div>
        <div class="field"><label for="modell">Modell</label><input id="modell" name="modell" placeholder="z. B. {s['marke_beispiel'][1]}" required></div>
      </div>
      <div class="grid2">
        <div class="field"><label for="baujahr">Baujahr</label><input id="baujahr" name="baujahr" inputmode="numeric" placeholder="z. B. 2006"></div>
        <div class="field"><label for="ort">PLZ oder Stadtteil</label><input id="ort" name="ort" placeholder="{e(s['ort_beispiel'])}" required autocomplete="postal-code"></div>
      </div>
      <div class="field">
        <label for="zustand">Zustand</label>
        <select id="zustand" name="zustand">
          <option>Fährt noch</option>
          <option>Fährt nicht mehr</option>
          <option>Motorschaden</option>
          <option>Unfallwagen</option>
          <option>Ohne TÜV</option>
        </select>
      </div>
      <button class="btn" type="submit">Angebot per WhatsApp anfragen</button>
      <p class="hint">Es öffnet sich WhatsApp mit deinen Angaben. Fotos kannst du dort gleich mitschicken.</p>
    </form>
  </div>
</div>

<section>
  <div class="wrap two">
    <div class="prose">
      <h2>Du musst nicht zum Schrottplatz fahren. Wir kommen zu dir.</h2>
      <p>Wir holen in ganz Deutschland ab, auch {s['in']}. Du musst dein Auto nirgendwo hinbringen: Unsere Fahrer kommen mit dem Transporter zu dir, laden das Fahrzeug auf und nehmen es mit. Die Abholung kostet dich nichts.</p>
      <p>{e(s['praktisch'])}</p>

      <h3>Autoverwertung {s['in']}: So läuft die Abholung ab</h3>
      <p>Du schickst uns Marke, Modell, Baujahr und ein paar Fotos. Wir nennen dir einen Festpreis und stimmen einen Termin ab. Oft sind wir schon innerhalb von 6 Stunden bei dir. Wenn du noch auf dein neues Auto wartest, kommen wir zu deinem Wunschtermin, auch erst in ein paar Wochen. Am Abholtag brauchen wir nur Zugang zum Fahrzeug, die Papiere und die Schlüssel. Den Restwert zahlen wir direkt bei der Übergabe, bar oder per Echtzeitüberweisung.</p>

      <h3>{e(s['eng_titel'])}</h3>
      <p>{e(s['eng_text'])}</p>

      <h3>Abmelden {s['in']}</h3>
      <p>{e(s['abmelden'])}</p>
    </div>

    <aside>
      <div class="box">
        <h3>Das brauchen wir am Abholtag</h3>
        <ul>
          <li>Fahrzeugschein und Fahrzeugbrief</li>
          <li>Alle vorhandenen Schlüssel</li>
          <li>Deinen Personalausweis</li>
          <li>Zugang zum Fahrzeug</li>
        </ul>
      </div>
      <div class="box">
        <h3>Nicht nur Autos</h3>
        <p>Wir nehmen alles, was auf Reifen läuft: Autos, Transporter, Motorräder und Wohnmobile. In jedem Zustand.</p>
      </div>
      <div class="box">
        <h3>Gut zu wissen</h3>
        <p>Ein abgemeldetes Auto darf nicht an der öffentlichen Straße stehen bleiben. Wenn dein Fahrzeug schon ohne Zulassung draußen parkt, melde dich am besten zeitnah. Wir suchen dann einen schnellen Termin.</p>
      </div>
    </aside>
  </div>
</section>

<section class="soft">
  <div class="wrap">
    <div class="head">
      <div><h2>{e(s['bezirke_titel'])}</h2></div>
      <p>Die Abholung ist überall {s['in']} kostenlos. Hier ein Überblick mit Beispielen.</p>
    </div>
    <div class="tablewrap">
      <table>
        <thead><tr><th>{e(s.get("spalte", "Bezirk"))}</th><th>Stadtteile (Auswahl)</th></tr></thead>
        <tbody>
{bezirke}
        </tbody>
      </table>
    </div>

    <h3 class="sub-h">{e(s['umland_titel'])}</h3>
    <ul class="plates">
{umland}
    </ul>
    <p class="more">Auf der fertigen Seite führt jedes Kennzeichen zur passenden Stadtseite, sofern es eine gibt. So verlinken sich Nachbarorte gegenseitig.</p>
  </div>
</section>

<section id="fragen">
  <div class="wrap">
    <div class="head"><h2>{e(s['faq_titel'])}</h2></div>
    <div class="faq">
{faq_html}
    </div>
  </div>
</section>

<section class="final">
  <div class="wrap">
    <h2>Dein Auto steht {s['in']}? Wir holen es.</h2>
    <p>Eckdaten oder Fotos schicken, Festpreis bekommen, Termin abstimmen. Unverbindlich und kostenlos. Per Anruf, WhatsApp oder E-Mail.</p>
    <a class="bigtel" href="{TEL_LINK}">{TEL}</a>
    <div class="cta">
      <a class="btn" href="{WA}">Fotos per WhatsApp schicken</a>
      <a class="btn line" href="mailto:{MAIL}">E-Mail schreiben</a>
      <a class="btn line" href="{slug}/#anfrage">Zum Anfrageformular</a>
    </div>
  </div>
</section>
</main>

<footer>
  <div class="wrap">
    <div class="drop"><b>Du möchtest dein Auto selbst bringen?</b>Ruf unsere Hotline an: <a href="{TEL_LINK}">{TEL}</a>. Wir nennen dir die nächste Annahmestelle in deiner Nähe.</div>
    <div><b>Auto-Schrottplatz.de</b>Autoverwertung mit kostenloser Abholung<br>in ganz Deutschland</div>
    <div><b>Kontakt</b><a href="{TEL_LINK}">{TEL}</a><a href="{WA}">WhatsApp</a><a href="mailto:{MAIL}">{MAIL}</a></div>
    <div><b>Seiten</b><a href="./">Startseite</a><a href="./#orte">Abholgebiete</a><a href="https://auto-schrottplatz.de/ratgeber/">Ratgeber</a></div>
    <div class="legal"><a href="https://auto-schrottplatz.de/impressum/">Impressum</a><a href="https://auto-schrottplatz.de/datenschutz/">Datenschutz</a></div>
  </div>
</footer>

<div class="bar">
  <a class="btn" href="{TEL_LINK}">Anrufen</a>
  <a class="btn line" href="{WA}">WhatsApp</a>
</div>

<script src="app.js" defer></script>
</body>
</html>
"""


if __name__ == "__main__":
    for s in STAEDTE:
        ziel = ZIEL / s["slug"] / "index.html"
        ziel.parent.mkdir(parents=True, exist_ok=True)
        ziel.write_text(seite(s), encoding="utf-8")
        print("geschrieben:", ziel.relative_to(ZIEL.parent))
