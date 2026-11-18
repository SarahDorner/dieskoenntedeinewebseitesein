// Anfrageformular: baut aus den Angaben eine WhatsApp-Nachricht.
// Im Entwurf ohne Server. Beim Livegang kommt das echte Formular mit Foto-Upload dazu.
(function () {
  var form = document.getElementById("anfrage");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = new FormData(form);
    var zeilen = [
      "Hallo, ich möchte mein Auto verschrotten lassen.",
      "Fahrzeug: " + [f.get("marke"), f.get("modell")].filter(Boolean).join(" "),
      "Baujahr: " + (f.get("baujahr") || "unbekannt"),
      "Zustand: " + f.get("zustand"),
      "Standort (PLZ / Ort): " + f.get("ort"),
      "Bitte um ein Festpreis-Angebot."
    ];
    var url = "https://wa.me/4915231344444?text=" + encodeURIComponent(zeilen.join("\n"));
    window.open(url, "_blank", "noopener");
  });
})();
