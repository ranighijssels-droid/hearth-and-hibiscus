// Hearth & Hibiscus – Nederlandse melding bij het verplichte GDPR-vakje.
// De werking van het MailerLite-formulier verandert niet: zonder vinkje
// blokkeert de browser het verzenden, met vinkje verstuurt MailerLite zoals altijd.
document.addEventListener('DOMContentLoaded', function () {
  var vakje = document.getElementById('ml-gdpr-48371071');
  if (!vakje) return;
  var melding = 'Vink dit vakje aan om je in te schrijven voor de nieuwsbrief.';
  vakje.addEventListener('invalid', function () { vakje.setCustomValidity(melding); });
  vakje.addEventListener('change', function () { vakje.setCustomValidity(''); });
});
