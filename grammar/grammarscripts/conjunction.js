// ===== CONJUNCTION CARDS INTERACTIVE FUNCTIONALITY =====
class ConjunctionCardsController {
    constructor() {
        this.modal = null;
        this.modalTitle = null;
        this.modalContent = null;
        this.closeModalBtn = null;
        this.conjunctionData = this.initializeConjunctionData();
        this.init();
    }
    init() {
        this.setupModal();
        this.setupCardListeners();
        this.setupSummaryCardListeners();
        this.setupKeyboardNavigation();
    }
    initializeConjunctionData() {
        return {
            coordinating: {
                title: "Coordinating Conjunctions",
                description: "Coordinating conjunctions join words, phrases, or clauses of equal importance.",
                detailedInfo: [
                    { title: "Function", content: "Connect grammatically equal elements (words, phrases, or clauses)." },
                    { title: "Examples", content: "and, but, or, nor, for, so, yet" },
                    { title: "Usage", content: "Used to join similar parts of speech or independent clauses." },
                    { title: "Sample Sentences", content: [
                        "She likes tea and coffee.",
                        "He is tired but happy.",
                        "You can have tea or coffee."
                    ] }
                ]
            },
            subordinating: {
                title: "Subordinating Conjunctions",
                description: "Subordinating conjunctions join dependent (subordinate) clauses to main clauses.",
                detailedInfo: [
                    { title: "Function", content: "Connect a dependent clause to an independent clause." },
                    { title: "Examples", content: "because, although, since, unless, if, when, while, after, before, as, though" },
                    { title: "Usage", content: "Used to show relationships such as cause, time, condition, contrast, etc." },
                    { title: "Sample Sentences", content: [
                        "Although it was raining, we went out.",
                        "He will come if you call him.",
                        "We stayed inside because it was raining."
                    ] }
                ]
            },
            correlative: {
                title: "Correlative Conjunctions",
                description: "Correlative conjunctions work in pairs to join equal elements in a sentence.",
                detailedInfo: [
                    { title: "Function", content: "Work in pairs to connect equal grammatical items." },
                    { title: "Examples", content: "either...or, neither...nor, both...and, not only...but also, whether...or" },
                    { title: "Usage", content: "Each part of the pair must be used in the correct place in the sentence." },
                    { title: "Sample Sentences", content: [
                        "Either you or I will go.",
                        "He is not only smart but also hardworking.",
                        "Neither the teacher nor the students were late."
                    ] }
                ]
            }
        };
    }
    setupModal() {
        this.modal = document.getElementById('conjunctionModal');
        this.modalTitle = document.getElementById('conjunctionModalTitle');
        this.modalContent = document.getElementById('conjunctionModalContent');
        this.closeModalBtn = document.getElementById('closeConjunctionModal');
        if (this.closeModalBtn) {
            this.closeModalBtn.addEventListener('click', () => this.closeModal());
        }
    }
    setupCardListeners() {
        const cards = document.querySelectorAll('.conjunction-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const type = card.getAttribute('data-type');
                this.showModal(type);
                this.highlightCard(type);
            });
        });
    }
    setupSummaryCardListeners() {
        const summaryCards = document.querySelectorAll('.conjunction-summary-card');
        summaryCards.forEach(card => {
            card.addEventListener('click', () => {
                const type = card.getAttribute('data-type');
                this.showModal(type);
                this.highlightCard(type);
                this.scrollToCard(type);
            });
        });
    }
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }
    showModal(type) {
        const data = this.conjunctionData[type];
        if (!data) return;
        if (this.modal && this.modalTitle && this.modalContent) {
            this.modalTitle.textContent = data.title;
            this.modalContent.innerHTML = this.buildModalContent(data);
            this.modal.classList.remove('hidden');
        }
    }
    buildModalContent(data) {
        let html = `<p class='mb-3 text-gray-300'>${data.description}</p>`;
        data.detailedInfo.forEach(item => {
            if (Array.isArray(item.content)) {
                html += `<div class='mb-2'><span class='font-bold text-yellow-400'>${item.title}:</span><ul class='ml-4 list-disc'>`;
                item.content.forEach(ex => {
                    html += `<li>${ex}</li>`;
                });
                html += `</ul></div>`;
            } else {
                html += `<div class='mb-2'><span class='font-bold text-yellow-400'>${item.title}:</span> ${item.content}</div>`;
            }
        });
        return html;
    }
    closeModal() {
        if (this.modal) {
            this.modal.classList.add('hidden');
        }
    }
    highlightCard(type) {
        document.querySelectorAll('.conjunction-card').forEach(card => {
            card.classList.toggle('active', card.getAttribute('data-type') === type);
        });
        document.querySelectorAll('.conjunction-summary-card').forEach(card => {
            card.classList.toggle('active', card.getAttribute('data-type') === type);
        });
    }
    scrollToCard(type) {
        const card = document.querySelector(`.conjunction-card[data-type='${type}']`);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}
// Initialize controller on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
    new ConjunctionCardsController();
});
