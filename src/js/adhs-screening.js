/**
 * ADHS-Screening Questionnaire (Basierend auf den Kriterien des ASRS v1.1 Screeners der WHO)
 * Dient der unverbindlichen Selbsteinschätzung und diagnostischen Orientierung.
 */

const SCREENING_QUESTIONS = [
  {
    id: 1,
    question: "Wie oft haben Sie Schwierigkeiten, die letzten Details eines Projekts abzuschließen, nachdem die herausfordernden Teile erledigt sind?",
    options: [
      { text: "Nie", weight: 0 },
      { text: "Selten", weight: 0 },
      { text: "Manchmal", weight: 1 },
      { text: "Oft", weight: 2 },
      { text: "Sehr oft", weight: 3 }
    ],
    threshold: 2 // Oft / Sehr oft positiv
  },
  {
    id: 2,
    question: "Wie oft fällt es Ihnen schwer, Dinge in eine geordnete Reihenfolge zu bringen, wenn Sie eine Aufgabe bewältigen müssen, die Organisation erfordert?",
    options: [
      { text: "Nie", weight: 0 },
      { text: "Selten", weight: 0 },
      { text: "Manchmal", weight: 1 },
      { text: "Oft", weight: 2 },
      { text: "Sehr oft", weight: 3 }
    ],
    threshold: 2
  },
  {
    id: 3,
    question: "Wie oft haben Sie Probleme, sich an Verabredungen, Fristen oder Termine zu erinnern?",
    options: [
      { text: "Nie", weight: 0 },
      { text: "Selten", weight: 0 },
      { text: "Manchmal", weight: 1 },
      { text: "Oft", weight: 2 },
      { text: "Sehr oft", weight: 3 }
    ],
    threshold: 2
  },
  {
    id: 4,
    question: "Wenn Sie eine Aufgabe haben, die viel Nachdenken und Konzentration erfordert: Wie oft zögern Sie den Beginn hinaus oder vermeiden die Aufgabe ganz?",
    options: [
      { text: "Nie", weight: 0 },
      { text: "Selten", weight: 0 },
      { text: "Manchmal", weight: 1 },
      { text: "Oft", weight: 2 },
      { text: "Sehr oft", weight: 3 }
    ],
    threshold: 2
  },
  {
    id: 5,
    question: "Wie oft zappeln oder nesteln Sie mit Händen oder Füßen, wenn Sie über längere Zeit stillsitzen müssen?",
    options: [
      { text: "Nie", weight: 0 },
      { text: "Selten", weight: 0 },
      { text: "Manchmal", weight: 1 },
      { text: "Oft", weight: 2 },
      { text: "Sehr oft", weight: 3 }
    ],
    threshold: 2
  },
  {
    id: 6,
    question: "Wie oft fühlen Sie sich innerlich unruhig, getrieben oder wie 'von einem Motor angetrieben'?",
    options: [
      { text: "Nie", weight: 0 },
      { text: "Selten", weight: 0 },
      { text: "Manchmal", weight: 1 },
      { text: "Oft", weight: 2 },
      { text: "Sehr oft", weight: 3 }
    ],
    threshold: 2
  }
];

export function initAdhsScreening() {
  const container = document.getElementById('adhs-screening-root');
  if (!container) return;

  let currentStep = 0;
  const userAnswers = [];

  function renderStep() {
    if (currentStep < SCREENING_QUESTIONS.length) {
      const q = SCREENING_QUESTIONS[currentStep];
      const progressPercent = ((currentStep) / SCREENING_QUESTIONS.length) * 100;
      
      container.innerHTML = `
        <div class="screening-progress">
          <div class="screening-bar" style="width: ${progressPercent}%;"></div>
        </div>
        <div class="screening-step-header">
          <div class="screening-step-count">Frage ${currentStep + 1} von ${SCREENING_QUESTIONS.length}</div>
          <h3 class="screening-question-title">${q.question}</h3>
        </div>
        <div class="screening-options">
          ${q.options.map((opt, idx) => `
            <div class="screening-option ${userAnswers[currentStep] === idx ? 'selected' : ''}" data-idx="${idx}">
              <span>${opt.text}</span>
            </div>
          `).join('')}
        </div>
        <div class="screening-actions">
          ${currentStep > 0 ? `<button class="btn btn-secondary btn-sm" id="prev-step-btn">← Zurück</button>` : `<div></div>`}
          <button class="btn btn-primary btn-sm" id="next-step-btn" ${userAnswers[currentStep] === undefined ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
            ${currentStep === SCREENING_QUESTIONS.length - 1 ? 'Auswertung anzeigen' : 'Weiter →'}
          </button>
        </div>
      `;

      // Event Listeners
      container.querySelectorAll('.screening-option').forEach(el => {
        el.addEventListener('click', () => {
          const idx = parseInt(el.getAttribute('data-idx'), 10);
          userAnswers[currentStep] = idx;
          renderStep();
        });
      });

      const nextBtn = container.querySelector('#next-step-btn');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (userAnswers[currentStep] !== undefined) {
            currentStep++;
            renderStep();
          }
        });
      }

      const prevBtn = container.querySelector('#prev-step-btn');
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (currentStep > 0) {
            currentStep--;
            renderStep();
          }
        });
      }

    } else {
      renderResults();
    }
  }

  function renderResults() {
    let significantCount = 0;
    userAnswers.forEach((ansIdx, qIdx) => {
      const q = SCREENING_QUESTIONS[qIdx];
      const opt = q.options[ansIdx];
      if (opt.weight >= q.threshold) {
        significantCount++;
      }
    });

    const isHighIndication = significantCount >= 4;

    container.innerHTML = `
      <div class="screening-progress">
        <div class="screening-bar" style="width: 100%;"></div>
      </div>
      <div class="screening-result-card">
        <div class="screening-result-badge ${isHighIndication ? 'badge-warm' : 'badge-sage'}">
          ${isHighIndication ? 'Hinweise auf ADHS-typische Symptome vorhanden' : 'Geringe Hinweise im Kurz-Screening'}
        </div>
        <h2>Ihr Orientierungsergebnis</h2>
        <p class="lead-text" style="max-width: 600px; margin: 1rem auto 1.5rem;">
          ${isHighIndication 
            ? `In ${significantCount} von 6 Kernbereichen berichten Sie über häufige Symptome, die typisch für ADHS im Erwachsenenalter sein können. Ein strukturiertes Orientierungsgespräch kann Klarheit schaffen.`
            : `Ihre Angaben zeigen aktuell wenige ausgeprägte Kernsymptome im Screening. Dennoch können individuelle Konzentrations- oder Organisationsprobleme andere Ursachen haben, die wir gerne gemeinsam einordnen.`
          }
        </p>

        <div class="info-box text-left" style="text-align: left; max-width: 680px; margin: 1.5rem auto;">
          <div class="info-box-title">Wichtige Einordnung & nächste Schritte</div>
          <p>Dieses Online-Screening ist <strong>keine medizinische oder psychotherapeutische Diagnose</strong>, sondern eine erste Orientierungshilfe. In unserer Praxis in München bieten wir Ihnen:</p>
          <ul style="margin: 0.75rem 0; padding-left: 1.25rem; font-size: 0.9375rem; color: var(--color-text-muted);">
            <li>Strukturierte Erhebung Ihrer Symptomatik & Anamnese</li>
            <li>Einsatz standardisierter Fragebogenverfahren (ASRS, WURS-k, etc.)</li>
            <li>Einschätzung, ob eine psychotherapeutische Begleitung sinnvoll ist</li>
            <li>Empfehlung, wann eine ärztlich-fachpsychiatrische Abklärung nötig ist</li>
          </ul>
        </div>

        <div class="btn-group" style="justify-content: center; margin-top: 2rem;">
          <a href="/termin/?anliegen=screening" class="btn btn-primary btn-lg">Orientierungsgespräch vereinbaren</a>
          <button id="restart-screening-btn" class="btn btn-secondary btn-lg">Test wiederholen</button>
        </div>
      </div>
    `;

    document.getElementById('restart-screening-btn').addEventListener('click', () => {
      currentStep = 0;
      userAnswers.length = 0;
      renderStep();
    });
  }

  renderStep();
}

document.addEventListener('DOMContentLoaded', () => {
  initAdhsScreening();
});
