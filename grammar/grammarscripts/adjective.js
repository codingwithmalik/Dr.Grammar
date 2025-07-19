// ===== ADJECTIVE CARDS INTERACTIVE FUNCTIONALITY =====

/**
 * Adjective Cards Interactive Controller
 * Handles all interactive features for adjective type cards
 */
class AdjectiveCardsController {
    constructor() {
        this.modal = null;
        this.modalTitle = null;
        this.modalContent = null;
        this.closeModalBtn = null;
        this.adjectiveData = this.initializeAdjectiveData();
        this.init();
    }

    /**
     * Initialize the adjective cards functionality
     */
    init() {
        this.setupModal();
        this.setupCardListeners();
        this.setupSummaryCardListeners();
        this.setupKeyboardNavigation();
    }

    /**
     * Initialize adjective data for detailed information
     */
    initializeAdjectiveData() {
        return {
            descriptive: {
                title: "Descriptive Adjectives",
                description: "Descriptive adjectives are the most common type of adjectives. They describe the qualities, characteristics, or attributes of nouns.",
                detailedInfo: [
                    {
                        title: "Function",
                        content: "Describe the quality, state, or characteristic of a person, place, thing, or idea."
                    },
                    {
                        title: "Examples",
                        content: "happy, sad, beautiful, ugly, tall, short, intelligent, foolish, hot, cold, soft, hard"
                    },
                    {
                        title: "Usage",
                        content: "They can be used before nouns (attributive) or after linking verbs (predicative)."
                    },
                    {
                        title: "Sample Sentences",
                        content: [
                            "The beautiful flower bloomed in the garden.",
                            "She is intelligent and hardworking.",
                            "The tall building stood against the skyline."
                        ]
                    }
                ]
            },
            quantitative: {
                title: "Quantitative Adjectives",
                description: "Quantitative adjectives indicate the quantity or amount of nouns. They answer questions like 'how much?' or 'how many?'",
                detailedInfo: [
                    {
                        title: "Function",
                        content: "Indicate the quantity, amount, or number of nouns."
                    },
                    {
                        title: "Examples",
                        content: "some, many, few, all, none, several, much, little, enough, half, whole, double"
                    },
                    {
                        title: "Usage",
                        content: "They can be used with both countable and uncountable nouns."
                    },
                    {
                        title: "Sample Sentences",
                        content: [
                            "I have many books on my shelf.",
                            "There is little water in the bottle.",
                            "All students must attend the meeting."
                        ]
                    }
                ]
            },
            demonstrative: {
                title: "Demonstrative Adjectives",
                description: "Demonstrative adjectives point out specific nouns and indicate their position in relation to the speaker.",
                detailedInfo: [
                    {
                        title: "Function",
                        content: "Point out specific persons, places, things, or ideas and indicate their position."
                    },
                    {
                        title: "Examples",
                        content: "this, that, these, those, such, same, former, latter"
                    },
                    {
                        title: "Usage",
                        content: "They always come before the noun they modify and indicate proximity or distance."
                    },
                    {
                        title: "Sample Sentences",
                        content: [
                            "This book is very interesting.",
                            "Those flowers are beautiful.",
                            "I want the same dress as hers."
                        ]
                    }
                ]
            },
            possessive: {
                title: "Possessive Adjectives",
                description: "Possessive adjectives show ownership or belonging. They indicate who owns or possesses something.",
                detailedInfo: [
                    {
                        title: "Function",
                        content: "Show ownership, possession, or belonging to someone or something."
                    },
                    {
                        title: "Examples",
                        content: "my, your, his, her, its, our, their, whose"
                    },
                    {
                        title: "Usage",
                        content: "They always come before the noun and agree with the possessor, not the possessed object."
                    },
                    {
                        title: "Sample Sentences",
                        content: [
                            "My car is parked outside.",
                            "Her book is on the table.",
                            "Their house is beautiful."
                        ]
                    }
                ]
            },
            interrogative: {
                title: "Interrogative Adjectives",
                description: "Interrogative adjectives are used in questions to ask about specific nouns. They help gather information.",
                detailedInfo: [
                    {
                        title: "Function",
                        content: "Used in questions to ask about specific nouns and gather information."
                    },
                    {
                        title: "Examples",
                        content: "which, what, whose, where, when, why, how"
                    },
                    {
                        title: "Usage",
                        content: "They always come before the noun they modify and are used to form questions."
                    },
                    {
                        title: "Sample Sentences",
                        content: [
                            "Which book do you want to read?",
                            "What time is the meeting?",
                            "Whose car is parked here?"
                        ]
                    }
                ]
            },
            indefinite: {
                title: "Indefinite Adjectives",
                description: "Indefinite adjectives refer to non-specific or general nouns. They don't point to any particular person, place, or thing.",
                detailedInfo: [
                    {
                        title: "Function",
                        content: "Refer to non-specific or general persons, places, things, or ideas."
                    },
                    {
                        title: "Examples",
                        content: "any, each, several, some, many, few, all, both, either, neither, other, another"
                    },
                    {
                        title: "Usage",
                        content: "They can be used with both singular and plural nouns depending on the context."
                    },
                    {
                        title: "Sample Sentences",
                        content: [
                            "Any student can join the club.",
                            "Each person has their own opinion.",
                            "Several books were missing from the library."
                        ]
                    }
                ]
            },
            numeral: {
                title: "Numeral Adjectives",
                description: "Numeral adjectives indicate the number, quantity, or order of nouns. They can be cardinal, ordinal, or multiplicative.",
                detailedInfo: [
                    {
                        title: "Function",
                        content: "Indicate the number, quantity, or order of persons, places, things, or ideas."
                    },
                    {
                        title: "Types",
                        content: [
                            "Cardinal: one, two, three, four, five...",
                            "Ordinal: first, second, third, fourth, fifth...",
                            "Multiplicative: double, triple, quadruple, half, third..."
                        ]
                    },
                    {
                        title: "Examples",
                        content: "one, two, three, first, second, third, double, triple, half, quarter, dozen, score"
                    },
                    {
                        title: "Usage",
                        content: "They always come before the noun they modify and provide specific numerical information."
                    },
                    {
                        title: "Sample Sentences",
                        content: [
                            "I have three books on my shelf.",
                            "This is the first time I've visited Paris.",
                            "She bought double the amount of groceries."
                        ]
                    }
                ]
            }
        };
    }

    /**
     * Setup modal elements
     */
    setupModal() {
        this.modal = document.getElementById('adjectiveModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalContent = document.getElementById('modalContent');
        this.closeModalBtn = document.getElementById('closeModal');

        if (this.closeModalBtn) {
            this.closeModalBtn.addEventListener('click', () => this.closeModal());
        }

        // Close modal when clicking outside
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.closeModal();
                }
            });
        }
    }

    /**
     * Setup event listeners for adjective cards
     */
    setupCardListeners() {
        const cards = document.querySelectorAll('.adjective-card');
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                const type = card.getAttribute('data-type');
                this.showModal(type);
            });

            // Add keyboard support
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const type = card.getAttribute('data-type');
                    this.showModal(type);
                }
            });

            // Add focus management
            card.setAttribute('tabindex', '0');
        });
    }

    /**
     * Setup event listeners for summary cards
     */
    setupSummaryCardListeners() {
        const summaryCards = document.querySelectorAll('.adjective-summary-card');
        summaryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const type = card.getAttribute('data-type');
                this.highlightCard(type);
                this.scrollToCard(type);
            });

            // Add keyboard support
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const type = card.getAttribute('data-type');
                    this.highlightCard(type);
                    this.scrollToCard(type);
                }
            });

            // Add focus management
            card.setAttribute('tabindex', '0');
        });
    }

    /**
     * Setup keyboard navigation
     */
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal && !this.modal.classList.contains('hidden')) {
                this.closeModal();
            }
        });
    }

    /**
     * Show modal with detailed information
     */
    showModal(type) {
        if (!this.modal || !this.adjectiveData[type]) return;

        const data = this.adjectiveData[type];
        
        // Set modal title
        if (this.modalTitle) {
            this.modalTitle.textContent = data.title;
        }

        // Build modal content
        if (this.modalContent) {
            this.modalContent.innerHTML = this.buildModalContent(data);
        }

        // Show modal
        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Focus management
        setTimeout(() => {
            if (this.closeModalBtn) {
                this.closeModalBtn.focus();
            }
        }, 100);
    }

    /**
     * Build modal content HTML
     */
    buildModalContent(data) {
        let html = `
            <div class="space-y-6">
                <div class="bg-[#1a2c42] p-4 rounded-lg">
                    <p class="text-gray-300 leading-relaxed">${data.description}</p>
                </div>
        `;

        data.detailedInfo.forEach(section => {
            html += `
                <div class="bg-[#1a2c42] p-4 rounded-lg">
                    <h4 class="text-yellow-400 font-bold text-lg mb-3">${section.title}</h4>
            `;

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

    /**
     * Close modal
     */
    closeModal() {
        if (!this.modal) return;

        this.modal.classList.add('hidden');
        document.body.style.overflow = '';

        // Return focus to the element that opened the modal
        const activeElement = document.querySelector('.adjective-card:focus');
        if (activeElement) {
            activeElement.focus();
        }
    }

    /**
     * Highlight a specific card
     */
    highlightCard(type) {
        // Remove active class from all cards
        document.querySelectorAll('.adjective-card, .adjective-summary-card').forEach(card => {
            card.classList.remove('active');
        });

        // Add active class to matching cards
        document.querySelectorAll(`[data-type="${type}"]`).forEach(card => {
            card.classList.add('active');
        });

        // Remove active class after animation
        setTimeout(() => {
            document.querySelectorAll(`[data-type="${type}"]`).forEach(card => {
                card.classList.remove('active');
            });
        }, 2000);
    }

    /**
     * Scroll to a specific card
     */
    scrollToCard(type) {
        const card = document.querySelector(`.adjective-card[data-type="${type}"]`);
        if (card) {
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
}

// ===== INITIALIZATION =====

// Initialize adjective cards when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize adjective cards controller
    new AdjectiveCardsController();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AdjectiveCardsController };
}
