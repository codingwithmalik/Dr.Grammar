// ===== GERUND CARDS INTERACTIVE FUNCTIONALITY =====

class GerundCardsController {
  constructor() {
    this.modal = null;
    this.modalTitle = null;
    this.modalContent = null;
    this.closeModalBtn = null;
    this.gerundData = this.initializeGerundData();
    this.init();
  }

  init() {
    this.setupModal();
    this.setupCardListeners();
    this.setupSummaryCardListeners();
    this.setupKeyboardNavigation();
  }

  initializeGerundData() {
    return {
      subject: {
        title: "Gerund as Subject",
        description: "The gerund acts as the subject of the sentence.",
        detailedInfo: [
          { title: "Function", content: "Acts as the subject of a verb." },
          { title: "Examples", content: ["Swimming is healthy.", "Reading improves your mind."] },
          { title: "Sample Sentences", content: ["Dancing is fun.", "Running helps you stay fit."] }
        ]
      },
      object: {
        title: "Gerund as Object",
        description: "The gerund acts as the object of a verb or preposition.",
        detailedInfo: [
          { title: "Function", content: "Acts as the object of a verb or preposition." },
          { title: "Examples", content: ["She enjoys singing.", "He is interested in learning."] },
          { title: "Sample Sentences", content: ["I like reading books.", "They talked about going to the park."] }
        ]
      },
      possessive: {
        title: "Gerund after Possessive",
        description: "The gerund comes after a possessive adjective or noun.",
        detailedInfo: [
          { title: "Function", content: "Follows a possessive adjective or noun." },
          { title: "Examples", content: ["I appreciate your helping me.", "His singing is wonderful."] },
          { title: "Sample Sentences", content: ["We enjoyed John's cooking.", "Her dancing won the prize."] }
        ]
      },
      difference: {
        title: "Gerund vs. Present Participle",
        description: "Key differences between a gerund and a present participle.",
        detailedInfo: [
          { title: "Gerund", content: ["Acts as a noun.", "Can be subject, object, or complement.", "Example: Swimming is fun."] },
          { title: "Present Participle", content: ["Acts as an adjective or forms continuous tenses.", "Describes a noun or shows ongoing action.", "Example: The swimming boy is fast."] }
        ]
      },
      prep: {
        title: "Gerund after Preposition",
        description: "The gerund is used after a preposition.",
        detailedInfo: [
          { title: "Function", content: "Always use a gerund after a preposition." },
          { title: "Examples", content: ["He is good at drawing.", "Thank you for helping me."] },
          { title: "Sample Sentences", content: ["We talked about going to the park.", "She is interested in learning."] }
        ]
      },
      verb: {
        title: "Gerund after Verb",
        description: "Some verbs are followed by a gerund, not an infinitive.",
        detailedInfo: [
          { title: "Function", content: "Certain verbs (enjoy, avoid, suggest, etc.) are followed by a gerund." },
          { title: "Examples", content: ["enjoy reading", "avoid eating", "suggest going"] },
          { title: "Sample Sentences", content: ["I enjoy reading novels.", "He avoided answering the question."] }
        ]
      },
      neg: {
        title: "Negative Gerund",
        description: "The negative form is 'not + gerund'.",
        detailedInfo: [
          { title: "Function", content: "To make a gerund negative, use 'not' before it." },
          { title: "Examples", content: ["not going", "not studying"] },
          { title: "Sample Sentences", content: ["Not studying led to failure.", "He regretted not going to the party."] }
        ]
      }
    };
  }

  setupModal() {
    this.modal = document.getElementById('gerundModal');
    this.modalTitle = document.getElementById('gerundModalTitle');
    this.modalContent = document.getElementById('gerundModalContent');
    this.closeModalBtn = document.getElementById('closeGerundModal');
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
    const cards = document.querySelectorAll('.gerund-card');
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
    const summaryCards = document.querySelectorAll('.gerund-summary-card');
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
    if (!this.modal || !this.gerundData[type]) return;
    const data = this.gerundData[type];
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
    let html = `<div class=\"space-y-6\"><div class=\"bg-[#1a2c42] p-4 rounded-lg\"><p class=\"text-gray-300 leading-relaxed\">${data.description}</p></div>`;
    data.detailedInfo.forEach(section => {
      html += `<div class=\"bg-[#1a2c42] p-4 rounded-lg\"><h4 class=\"text-yellow-400 font-bold text-lg mb-3\">${section.title}</h4>`;
      if (Array.isArray(section.content)) {
        html += '<ul class=\"space-y-2\">';
        section.content.forEach(item => {
          html += `<li class=\"text-gray-300\">• ${item}</li>`;
        });
        html += '</ul>';
      } else {
        html += `<p class=\"text-gray-300\">${section.content}</p>`;
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
    const activeElement = document.querySelector('.gerund-card:focus');
    if (activeElement) {
      activeElement.focus();
    }
  }

  highlightCard(type) {
    document.querySelectorAll('.gerund-card, .gerund-summary-card').forEach(card => {
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
    const card = document.querySelector(`.gerund-card[data-type="${type}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  new GerundCardsController();
});
