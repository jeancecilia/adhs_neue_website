/**
 * Datensparsames Terminanfrageformular (DSGVO Art. 9 Konform)
 * Fragt nur die nötigsten Kontaktdaten und Anliegen-Kategorie ab.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');
  const serviceSelect = document.getElementById('form-service');
  const formResponse = document.getElementById('form-response');

  // Preselect service based on URL parameter
  if (serviceSelect) {
    const urlParams = new URLSearchParams(window.location.search);
    const anliegen = urlParams.get('anliegen');
    if (anliegen) {
      if (anliegen === 'therapie') serviceSelect.value = 'adhs-therapie';
      if (anliegen === 'screening') serviceSelect.value = 'adhs-screening';
      if (anliegen === 'neurofeedback') serviceSelect.value = 'neurofeedback';
      if (anliegen === 'hypnose') serviceSelect.value = 'hypnose';
    }
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const service = serviceSelect?.value;

      if (!name || !email || !service) {
        alert('Bitte füllen Sie alle erforderlichen Felder aus.');
        return;
      }

      // Simulated immediate friendly confirmation state
      form.style.display = 'none';
      if (formResponse) {
        formResponse.style.display = 'block';
        formResponse.innerHTML = `
          <div style="text-align: center; padding: 2rem 1rem;">
            <div style="width: 56px; height: 56px; background-color: var(--color-accent-subtle); color: var(--color-accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; font-size: 1.5rem;">✓</div>
            <h3 style="margin-bottom: 0.75rem;">Vielen Dank für Ihre Anfrage, ${name}!</h3>
            <p class="lead-text" style="font-size: 1.05rem; margin-bottom: 1.5rem;">
              Wir haben Ihre Anfrage für <strong>${getServiceName(service)}</strong> erhalten. Wir melden uns in der Regel innerhalb von 24–48 Stunden an Werktagen persönlich per E-Mail bei Ihnen.
            </p>
            <div class="info-box text-left" style="text-align: left; max-width: 500px; margin: 0 auto;">
              <div class="info-box-title">Hinweis zum Erstgespräch</div>
              <p>In unserer Praxis für Psychotherapie nach dem HeilprG legen wir großen Wert auf eine diskrete, vertrauliche und strukturierte Betreuung. Medizinische Detailfragen klären wir in Ruhe persönlich im Gespräch.</p>
            </div>
            <div style="margin-top: 2rem;">
              <a href="/" class="btn btn-secondary btn-sm">Zurück zur Startseite</a>
            </div>
          </div>
        `;
      }
    });
  }

  function getServiceName(key) {
    switch (key) {
      case 'adhs-therapie': return 'ADHS-Therapie für Erwachsene';
      case 'adhs-screening': return 'ADHS-Screening & diagnostische Orientierung';
      case 'neurofeedback': return 'Neurofeedback';
      case 'hypnose': return 'Hypnosetherapie';
      default: return 'Ihr Anliegen';
    }
  }
});
