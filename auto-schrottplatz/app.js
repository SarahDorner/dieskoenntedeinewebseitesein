// Anfrageformular von Auto-Schrottplatz.de.
// Zwei Wege: 1) Anfrage mit Fotos an Netlify Forms senden, 2) dieselben Angaben per WhatsApp schicken.
// Fotos werden im Browser verkleinert, weil Netlify pro Anfrage höchstens 8 MB annimmt.
(function () {
  var form = document.getElementById("anfrage");
  if (!form) return;

  var WHATSAPP = "https://wa.me/4915231344444?text=";
  var MAX_FOTOS = 3;
  var MAX_KANTE = 1600;          // längste Bildkante nach dem Verkleinern
  var MAX_GESAMT = 7 * 1024 * 1024; // Sicherheitsabstand zur 8-MB-Grenze
  var status = form.querySelector(".status");
  var fotoFeld = form.querySelector("#fotos");
  var sendeKnopf = form.querySelector('button[type="submit"]');

  function melde(text, fehler) {
    if (!status) return;
    status.textContent = text;
    status.className = "status" + (fehler ? " fehler" : "");
  }

  function angaben() {
    var f = new FormData(form);
    return {
      marke: (f.get("marke") || "").toString().trim(),
      modell: (f.get("modell") || "").toString().trim(),
      baujahr: (f.get("baujahr") || "").toString().trim(),
      ort: (f.get("ort") || "").toString().trim(),
      zustand: (f.get("zustand") || "").toString(),
      name: (f.get("name") || "").toString().trim(),
      telefon: (f.get("telefon") || "").toString().trim()
    };
  }

  // WhatsApp: braucht nur die Fahrzeugangaben, Telefon und Fotos laufen dort über den Chat.
  var waKnopf = form.querySelector(".per-whatsapp");
  if (waKnopf) {
    waKnopf.addEventListener("click", function () {
      var a = angaben();
      if (!a.marke || !a.modell || !a.ort) {
        melde("Bitte trag Marke, Modell und PLZ oder Ort ein.", true);
        return;
      }
      var zeilen = [
        "Hallo, ich möchte mein Auto verschrotten lassen.",
        "Fahrzeug: " + [a.marke, a.modell].filter(Boolean).join(" "),
        "Baujahr: " + (a.baujahr || "unbekannt"),
        "Zustand: " + a.zustand,
        "Standort (PLZ / Ort): " + a.ort,
        "Bitte um ein Festpreis-Angebot."
      ];
      window.open(WHATSAPP + encodeURIComponent(zeilen.join("\n")), "_blank", "noopener");
    });
  }

  function verkleinere(datei) {
    return new Promise(function (fertig) {
      if (!/^image\//.test(datei.type)) { fertig(null); return; }
      var url = URL.createObjectURL(datei);
      var bild = new Image();
      bild.onload = function () {
        var faktor = Math.min(1, MAX_KANTE / Math.max(bild.width, bild.height));
        var c = document.createElement("canvas");
        c.width = Math.round(bild.width * faktor);
        c.height = Math.round(bild.height * faktor);
        c.getContext("2d").drawImage(bild, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        c.toBlob(function (blob) { fertig(blob); }, "image/jpeg", 0.8);
      };
      bild.onerror = function () { URL.revokeObjectURL(url); fertig(null); };
      bild.src = url;
    });
  }

  if (fotoFeld) {
    fotoFeld.addEventListener("change", function () {
      var n = fotoFeld.files.length;
      if (n > MAX_FOTOS) melde("Es werden die ersten " + MAX_FOTOS + " Fotos gesendet.", false);
      else melde(n ? n + (n === 1 ? " Foto" : " Fotos") + " ausgewählt." : "", false);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var a = angaben();
    var dateien = fotoFeld ? Array.prototype.slice.call(fotoFeld.files, 0, MAX_FOTOS) : [];
    sendeKnopf.disabled = true;
    melde(dateien.length ? "Fotos werden vorbereitet …" : "Anfrage wird gesendet …", false);

    Promise.all(dateien.map(verkleinere)).then(function (blobs) {
      var fd = new FormData();
      fd.append("form-name", form.getAttribute("name"));
      fd.append("website", (form.querySelector('[name="website"]') || {}).value || "");
      Object.keys(a).forEach(function (k) { fd.append(k, a[k]); });
      fd.append("seite", location.pathname);
      var gesamt = 0, gesendet = 0;
      blobs.forEach(function (blob, i) {
        // Ließ sich ein Bild nicht verkleinern, das Original nehmen, wenn es klein genug ist.
        var teil = blob || (dateien[i].size < 2.5 * 1024 * 1024 ? dateien[i] : null);
        if (!teil || gesamt + teil.size > MAX_GESAMT) return;
        gesamt += teil.size;
        gesendet += 1;
        fd.append("foto" + gesendet, teil, "foto" + gesendet + ".jpg");
      });
      melde("Anfrage wird gesendet …", false);
      return fetch(new URL("./", document.baseURI), { method: "POST", body: fd }).then(function (r) {
        if (!r.ok) throw new Error("Status " + r.status);
        var weg = dateien.length - gesendet;
        form.innerHTML = '<h2>Danke, deine Anfrage ist da.</h2>' +
          '<p class="sub">Wir melden uns so schnell wie möglich bei dir, meist per Anruf oder WhatsApp.</p>' +
          (weg > 0 ? '<p class="hint">' + weg + (weg === 1 ? " Foto war" : " Fotos waren") + ' zu groß und wurde nicht mitgesendet. Schick es uns gern per WhatsApp.</p>' : "") +
          '<p class="alt">Eilig? Ruf an: <a href="tel:+4915231344444">0152 313 444 44</a></p>';
        form.scrollIntoView({ block: "nearest" });
      });
    }).catch(function () {
      sendeKnopf.disabled = false;
      melde("Das Senden hat nicht geklappt. Bitte schick uns die Anfrage per WhatsApp oder ruf an: 0152 313 444 44.", true);
    });
  });
})();
