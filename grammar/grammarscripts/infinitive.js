// ===== INFINITIVE CARDS INTERACTIVE FUNCTIONALITY =====

class InfinitiveCardsController {
  constructor() {
    this.modal = null;
    this.modalTitle = null;
    this.modalContent = null;
    this.closeModalBtn = null;
    this.infinitiveData = this.initializeInfinitiveData();
    this.init();
  }

  init() {
    this.setupModal();
    this.setupCardListeners();
    this.setupSummaryCardListeners();
    this.setupKeyboardNavigation();
  }

  initializeInfinitiveData() {
    return {
      full: {
        title: "Full Infinitive (To-infinitive)",
        description: "The base form of a verb with 'to' (e.g., to go, to read). Used after many verbs, adjectives, and nouns.",
        detailedInfo: [
          { title: "Function", content: "Acts as a noun, adjective, or adverb. Common after verbs like want, hope, plan, etc." },
          { title: "Examples", content: ["to play", "to write", "to be", "to help", "to see", "to make"] },
          { title: "Sample Sentences", content: ["I want to travel the world.", "She hopes to win the prize."] }
        ]
      },
      bare: {
        title: "Bare Infinitive",
        description: "The base form of a verb without 'to' (e.g., go, read). Used after certain verbs (let, make, see, hear, feel, etc.).",
        detailedInfo: [
          { title: "Function", content: "Follows verbs like let, make, see, hear, feel, and after modal verbs (can, must, should, etc.)." },
          { title: "Examples", content: ["go", "read", "cry", "sing"] },
          { title: "Sample Sentences", content: ["Let him go.", "She made me cry.", "I heard her sing a song."] }
        ]
      },
      split: {
        title: "Split Infinitive",
        description: "Occurs when an adverb is placed between 'to' and the verb (e.g., to boldly go).",
        detailedInfo: [
          { title: "Function", content: "Used for emphasis or clarity, though often avoided in formal writing." },
          { title: "Examples", content: ["to really understand", "to quickly finish", "to truly succeed"] },
          { title: "Sample Sentences", content: ["He wants to truly succeed in life.", "She tried to quickly solve the problem."] }
        ]
      },
      noun: {
        title: "Infinitive as Noun",
        description: "Infinitives can act as the subject or object in a sentence.",
        detailedInfo: [
          { title: "Function", content: "Acts as a noun (subject or object)." },
          { title: "Examples", content: ["To read is fun.", "She likes to dance."] },
          { title: "Sample Sentences", content: ["To help others is a noble act.", "He likes to play football."] }
        ]
      },
      adj: {
        title: "Infinitive as Adjective",
        description: "Infinitives can describe a noun, showing purpose or intended use.",
        detailedInfo: [
          { title: "Function", content: "Describes a noun (shows purpose)." },
          { title: "Examples", content: ["a book to read", "time to go"] },
          { title: "Sample Sentences", content: ["I have a report to write.", "She found a place to rest."] }
        ]
      },
      adv: {
        title: "Infinitive as Adverb",
        description: "Infinitives can modify verbs, adjectives, or other adverbs, often expressing purpose or reason.",
        detailedInfo: [
          { title: "Function", content: "Modifies a verb, adjective, or adverb (shows purpose, reason, or result)." },
          { title: "Examples", content: ["He came to help.", "She was happy to see you."] },
          { title: "Sample Sentences", content: ["He worked hard to succeed.", "She is eager to learn."] }
        ]
      }
    };
  }

  setupModal() {
    this.modal = document.getElementById('infinitiveModal');
    this.modalTitle = document.getElementById('infinitiveModalTitle');
    this.modalContent = document.getElementById('infinitiveModalContent');
    this.closeModalBtn = document.getElementById('closeInfinitiveModal');
    if (this.closeModalBtn) {
      this.closeModalBtn.addEventListener('click', () => this.closeModal());
    }
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeModal();
        }
      });
    }
  }

  setupCardListeners() {
    const cards = document.querySelectorAll('.infinitive-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        const type = card.getAttribute('data-type');
        this.showModal(type);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const type = card.getAttribute('data-type');
          this.showModal(type);
        }
      });
      card.setAttribute('tabindex', '0');
    });
  }

  setupSummaryCardListeners() {
    const summaryCards = document.querySelectorAll('.infinitive-summary-card');
    summaryCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const type = card.getAttribute('data-type');
        this.highlightCard(type);
        this.scrollToCard(type);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const type = card.getAttribute('data-type');
          this.highlightCard(type);
          this.scrollToCard(type);
        }
      });
      card.setAttribute('tabindex', '0');
    });
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && !this.modal.classList.contains('hidden')) {
        this.closeModal();
      }
    });
  }

  showModal(type) {
    if (!this.modal || !this.infinitiveData[type]) return;
    const data = this.infinitiveData[type];
    if (this.modalTitle) {
      this.modalTitle.textContent = data.title;
    }
    if (this.modalContent) {
      this.modalContent.innerHTML = this.buildModalContent(data);
    }
    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (this.closeModalBtn) {
        this.closeModalBtn.focus();
      }
    }, 100);
  }

  buildModalContent(data) {
    let html = `<div class="space-y-6"><div class="bg-[#1a2c42] p-4 rounded-lg"><p class="text-gray-300 leading-relaxed">${data.description}</p></div>`;
    data.detailedInfo.forEach(section => {
      html += `<div class="bg-[#1a2c42] p-4 rounded-lg"><h4 class="text-yellow-400 font-bold text-lg mb-3">${section.title}</h4>`;
      if (Array.isArray(section.content)) {
        html += '<ul class="space-y-2">';
        section.content.forEach(item => {
          html += `<li class="text-gray-300">• ${item}</li>`;
        });
        html += '</ul>';
      } else {
        html += `<p class="text-gray-300">${section.content}</p>`;
      }
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.add('hidden');
    document.body.style.overflow = '';
    const activeElement = document.querySelector('.infinitive-card:focus');
    if (activeElement) {
      activeElement.focus();
    }
  }

  highlightCard(type) {
    document.querySelectorAll('.infinitive-card, .infinitive-summary-card').forEach(card => {
      card.classList.remove('active');
    });
    document.querySelectorAll(`[data-type="${type}"]`).forEach(card => {
      card.classList.add('active');
    });
    setTimeout(() => {
      document.querySelectorAll(`[data-type="${type}"]`).forEach(card => {
        card.classList.remove('active');
      });
    }, 2000);
  }

  scrollToCard(type) {
    const card = document.querySelector(`.infinitive-card[data-type="${type}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  new InfinitiveCardsController();
});
