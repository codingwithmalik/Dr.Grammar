// ===== SCROLL ANIMATION HANDLER =====

/**
 * Scroll Animation Controller
 * Handles scroll-triggered animations using Intersection Observer
 * for optimal performance and smooth user experience
 */

class ScrollAnimationController {
    constructor() {
        this.observer = null;
        this.animatedElements = new Set();
        this.init();
    }

    /**
     * Initialize the scroll animation system
     */
    init() {
        // Check if Intersection Observer is supported
        if (!('IntersectionObserver' in window)) {
            this.fallbackAnimation();
            return;
        }

        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.enableAllAnimations();
            return;
        }

        this.setupObserver();
        this.observeElements();
    }

    /**
     * Setup Intersection Observer for scroll animations
     */
    setupObserver() {
        const options = {
            root: null, // Use viewport as root
            rootMargin: '0px 0px -50px 0px', // Trigger when element is 50px from bottom
            threshold: 0.1 // Trigger when 10% of element is visible
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, options);
    }

    /**
     * Observe all elements with animation classes
     */
    observeElements() {
        const selectors = [
            '.slide-left',
            '.slide-right', 
            '.slide-up',
            '.slide-down',
            '.fade-in',
            '.scale-in',
            '.rotate-in',
            '.stagger-children',
            '.scroll-trigger',
            '.scroll-trigger-early',
            '.scroll-trigger-late',
            '.noun-card',
            '.exercise-1',
            '.exercise-2', 
            '.exercise-3',
            '.chapter',
            '.summary-grid',
            'table',
            '.bg-green-900',
            '.answers',
            '.exercise-1-answers'
        ];

        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                this.observer.observe(element);
            });
        });
    }

    /**
     * Animate an element when it comes into view
     */
    animateElement(element) {
        // Prevent re-animation
        if (this.animatedElements.has(element)) {
            return;
        }

        this.animatedElements.add(element);

        // Add animation class based on element type
        if (element.classList.contains('slide-left')) {
            element.classList.add('animate');
        } else if (element.classList.contains('slide-right')) {
            element.classList.add('animate');
        } else if (element.classList.contains('slide-up')) {
            element.classList.add('animate');
        } else if (element.classList.contains('slide-down')) {
            element.classList.add('animate');
        } else if (element.classList.contains('fade-in')) {
            element.classList.add('animate');
        } else if (element.classList.contains('scale-in')) {
            element.classList.add('animate');
        } else if (element.classList.contains('rotate-in')) {
            element.classList.add('animate');
        } else if (element.classList.contains('stagger-children')) {
            element.classList.add('animate');
        } else if (element.classList.contains('scroll-trigger')) {
            element.classList.add('in-view');
        } else if (element.classList.contains('scroll-trigger-early')) {
            element.classList.add('in-view');
        } else if (element.classList.contains('scroll-trigger-late')) {
            element.classList.add('in-view');
        } else if (element.classList.contains('noun-card')) {
            element.classList.add('animate');
        } else if (element.classList.contains('exercise-1') || 
                   element.classList.contains('exercise-2') || 
                   element.classList.contains('exercise-3')) {
            element.classList.add('animate');
        } else if (element.classList.contains('chapter')) {
            element.classList.add('animate');
        } else if (element.classList.contains('summary-grid')) {
            element.classList.add('animate');
        } else if (element.tagName === 'TABLE') {
            element.classList.add('animate');
        } else if (element.classList.contains('bg-green-900')) {
            element.classList.add('animate');
        } else if (element.classList.contains('answers') || 
                   element.classList.contains('exercise-1-answers')) {
            element.classList.add('animate');
        }

        // Add custom animation for specific elements
        this.addCustomAnimations(element);
    }

    /**
     * Add custom animations for specific elements
     */
    addCustomAnimations(element) {
        // Noun cards with alternating slide directions
        if (element.classList.contains('noun-card')) {
            const cards = document.querySelectorAll('.noun-card');
            cards.forEach((card, index) => {
                if (index % 2 === 0) {
                    card.style.transform = 'translateX(-100px)';
                    card.style.opacity = '0';
                } else {
                    card.style.transform = 'translateX(100px)';
                    card.style.opacity = '0';
                }
            });
        }

        // Staggered animations for grid items
        if (element.classList.contains('stagger-children')) {
            const children = element.children;
            Array.from(children).forEach((child, index) => {
                child.style.transitionDelay = `${index * 0.1}s`;
            });
        }
    }

    /**
     * Fallback for browsers without Intersection Observer
     */
    fallbackAnimation() {
        console.log('Intersection Observer not supported, using fallback');
        this.enableAllAnimations();
    }

    /**
     * Enable all animations immediately (for reduced motion or fallback)
     */
    enableAllAnimations() {
        const animatedElements = document.querySelectorAll(`
            .slide-left, .slide-right, .slide-up, .slide-down, 
            .fade-in, .scale-in, .rotate-in, .stagger-children,
            .scroll-trigger, .scroll-trigger-early, .scroll-trigger-late,
            .noun-card, .exercise-1, .exercise-2, .exercise-3,
            .chapter, .summary-grid, table, .bg-green-900,
            .answers, .exercise-1-answers
        `);

        animatedElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'none';
        });
    }

    /**
     * Refresh animations (useful for dynamic content)
     */
    refresh() {
        this.animatedElements.clear();
        this.observeElements();
    }

    /**
     * Destroy the observer (cleanup)
     */
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

// ===== UTILITY FUNCTIONS =====

/**
 * Add scroll animation classes to elements
 */
function addScrollAnimations() {
    // Add slide-left to odd-numbered cards
    const cards = document.querySelectorAll('.noun-card');
    cards.forEach((card, index) => {
        if (index % 2 === 0) {
            card.classList.add('slide-left');
        } else {
            card.classList.add('slide-right');
        }
    });

    // Add slide-up to exercise sections
    const exercises = document.querySelectorAll('.exercise-1, .exercise-2, .exercise-3');
    exercises.forEach(exercise => {
        exercise.classList.add('slide-up');
    });

    // Add slide-left to chapter headers
    const chapters = document.querySelectorAll('.chapter');
    chapters.forEach(chapter => {
        chapter.classList.add('slide-left');
    });

    // Add stagger-children to summary grids
    const summaryGrids = document.querySelectorAll('.summary-grid');
    summaryGrids.forEach(grid => {
        grid.classList.add('stagger-children');
    });

    // Add slide-right to tables
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        table.classList.add('slide-right');
    });

    // Add slide-left to notes and tips
    const notes = document.querySelectorAll('.bg-green-900');
    notes.forEach(note => {
        note.classList.add('slide-left');
    });

    // Add scale-in to answer sections
    const answers = document.querySelectorAll('.answers, .exercise-1-answers');
    answers.forEach(answer => {
        answer.classList.add('scale-in');
    });
}

/**
 * Performance monitoring for animations
 */
function monitorAnimationPerformance() {
    let frameCount = 0;
    let lastTime = performance.now();

    function countFrames(currentTime) {
        frameCount++;
        
        if (currentTime - lastTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            
            // Log performance warning if FPS is low
            if (fps < 30) {
                console.warn(`Low animation performance detected: ${fps} FPS`);
            }
            
            frameCount = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(countFrames);
    }
    
    requestAnimationFrame(countFrames);
}

// ===== NOUN CARD INTERACTIVE FUNCTIONALITY =====

/**
 * Noun Card Interactive Controller
 * Handles interactive features for noun cards including modals, hover effects, and keyboard navigation
 */

class NounCardController {
    constructor() {
        this.currentCardIndex = 0;
        this.nounCards = [];
        this.nounSummaryCards = [];
        this.nounModal = null;
        this.nounModalTitle = null;
        this.nounModalContent = null;
        this.closeNounModalBtn = null;
        this.init();
    }

    /**
     * Initialize noun card functionality
     */
    init() {
        this.setupElements();
        this.setupEventListeners();
        this.setupKeyboardNavigation();
        this.setupModalData();
    }

    /**
     * Setup DOM elements
     */
    setupElements() {
        this.nounCards = document.querySelectorAll('.noun-card');
        this.nounSummaryCards = document.querySelectorAll('.noun-summary-card');
        this.nounModal = document.getElementById('nounModal');
        this.nounModalTitle = document.getElementById('nounModalTitle');
        this.nounModalContent = document.getElementById('nounModalContent');
        this.closeNounModalBtn = document.getElementById('closeNounModal');
        
        // Debug logging
        console.log('NounCardController initialized');
        console.log('Found noun cards:', this.nounCards.length);
        console.log('Found noun summary cards:', this.nounSummaryCards.length);
        console.log('Noun modal found:', !!this.nounModal);
    }

    /**
     * Setup event listeners for noun cards
     */
    setupEventListeners() {
        // Noun card click events
        this.nounCards.forEach((card, index) => {
            card.addEventListener('click', () => this.openNounModal(card.dataset.type));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.openNounModal(card.dataset.type);
                }
            });
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Learn more about ${card.dataset.type} nouns`);
        });

        // Noun summary card click events
        this.nounSummaryCards.forEach(card => {
            card.addEventListener('click', () => this.openNounModal(card.dataset.type));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.openNounModal(card.dataset.type);
                }
            });
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Learn more about ${card.dataset.type} nouns`);
        });

        // Modal close events
        if (this.closeNounModalBtn) {
            this.closeNounModalBtn.addEventListener('click', () => this.closeNounModal());
        }

        if (this.nounModal) {
            this.nounModal.addEventListener('click', (e) => {
                if (e.target === this.nounModal) {
                    this.closeNounModal();
                }
            });
        }
    }

    /**
     * Setup keyboard navigation for noun cards
     */
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (this.nounModal && !this.nounModal.classList.contains('hidden')) {
                if (e.key === 'Escape') {
                    this.closeNounModal();
                }
            }
        });
    }

    /**
     * Setup modal data for different noun types
     */
    setupModalData() {
        this.nounData = {
            common: {
                title: 'Common Noun',
                description: 'Names given in common to every person or thing of the same class or kind.',
                examples: [
                    'book, pen, apple',
                    'boy, girl, teacher', 
                    'city, country, river',
                    'car, house, tree',
                    'dog, cat, bird'
                ],
                sampleSentence: 'The book is on the table.',
                usage: 'Common nouns are not capitalized unless they appear at the beginning of a sentence.',
                tips: [
                    'Common nouns refer to general categories',
                    'They are not specific to any particular person, place, or thing',
                    'They can be countable or uncountable',
                    'They are usually not capitalized'
                ]
            },
            proper: {
                title: 'Proper Noun',
                description: 'Names of specific persons, places, or things.',
                examples: [
                    'John, Mary, Einstein',
                    'London, Paris, Tokyo',
                    'Eiffel Tower, Taj Mahal',
                    'Mount Everest, Pacific Ocean',
                    'Monday, January, Christmas'
                ],
                sampleSentence: 'London is a beautiful city.',
                usage: 'Proper nouns are always capitalized.',
                tips: [
                    'Proper nouns refer to specific, unique entities',
                    'They are always capitalized',
                    'They can be names of people, places, organizations, or events',
                    'They help identify particular individuals or things'
                ]
            },
            collective: {
                title: 'Collective Noun',
                description: 'Names for groups of persons or things taken together as one whole.',
                examples: [
                    'team, crowd, mob',
                    'herd, flock, swarm',
                    'fleet, army, jury',
                    'family, class, committee',
                    'pack, school, pride'
                ],
                sampleSentence: 'The team won the match.',
                usage: 'Collective nouns can be treated as singular or plural depending on context.',
                tips: [
                    'Collective nouns represent groups as single units',
                    'They can be used with singular or plural verbs',
                    'Common examples include: team, family, class, herd',
                    'They help describe collections of similar items'
                ]
            },
            abstract: {
                title: 'Abstract Noun',
                description: 'Names for qualities, actions, or states considered apart from the object.',
                examples: [
                    'love, happiness, freedom',
                    'laughter, movement, hatred',
                    'childhood, youth, slavery',
                    'beauty, courage, wisdom',
                    'peace, justice, truth'
                ],
                sampleSentence: 'Happiness is a state of mind.',
                usage: 'Abstract nouns represent ideas, feelings, or concepts that cannot be perceived by the senses.',
                tips: [
                    'Abstract nouns represent intangible concepts',
                    'They cannot be seen, touched, or measured directly',
                    'They often end in -ness, -ity, -tion, -ment',
                    'They help express emotions, ideas, and qualities'
                ]
            },
            countable: {
                title: 'Countable Noun',
                description: 'Names of objects, people, or things that can be counted individually.',
                examples: [
                    'book, pen, apple',
                    'boy, girl, teacher',
                    'house, car, tree',
                    'dog, cat, bird',
                    'table, chair, computer'
                ],
                sampleSentence: 'I have three books on my shelf.',
                usage: 'Countable nouns can be used with numbers and have both singular and plural forms.',
                tips: [
                    'Countable nouns can be counted with numbers',
                    'They have both singular and plural forms',
                    'They can be used with "a", "an", or "the"',
                    'They can be used with "many", "few", "several"'
                ]
            },
            uncountable: {
                title: 'Uncountable Noun',
                description: 'Names of substances, concepts, or qualities that cannot be counted individually.',
                examples: [
                    'water, milk, sugar',
                    'happiness, freedom, love',
                    'information, advice, furniture',
                    'music, poetry, art',
                    'weather, traffic, news'
                ],
                sampleSentence: 'I need some water to drink.',
                usage: 'Uncountable nouns cannot be counted and are usually used in singular form.',
                tips: [
                    'Uncountable nouns cannot be counted with numbers',
                    'They are usually used in singular form',
                    'They cannot be used with "a" or "an"',
                    'They can be used with "much", "little", "some"'
                ]
            },
            material: {
                title: 'Material Noun',
                description: 'Names of materials or substances from which things are made.',
                examples: [
                    'gold, silver, iron',
                    'wood, plastic, glass',
                    'cotton, wool, silk',
                    'stone, brick, cement',
                    'paper, leather, rubber'
                ],
                sampleSentence: 'This ring is made of gold.',
                usage: 'Material nouns refer to the substances or materials used to make objects.',
                tips: [
                    'Material nouns refer to raw materials',
                    'They can be both countable and uncountable',
                    'They help describe what things are made of',
                    'They are often used in manufacturing and crafting'
                ]
            },
            concrete: {
                title: 'Concrete Noun',
                description: 'Names of things that can be perceived through the five senses.',
                examples: [
                    'table, chair, computer',
                    'dog, cat, bird',
                    'mountain, river, ocean',
                    'apple, bread, coffee',
                    'car, house, tree'
                ],
                sampleSentence: 'The mountain was covered in snow.',
                usage: 'Concrete nouns represent physical objects that can be seen, touched, heard, smelled, or tasted.',
                tips: [
                    'Concrete nouns represent physical objects',
                    'They can be perceived through the five senses',
                    'They are the opposite of abstract nouns',
                    'They help describe the physical world around us'
                ]
            }
        };
    }

    /**
     * Open noun modal with detailed information
     */
    openNounModal(nounType) {
        if (!this.nounData[nounType]) {
            console.error(`No data found for noun type: ${nounType}`);
            return;
        }

        const data = this.nounData[nounType];
        
        // Set modal title
        this.nounModalTitle.textContent = data.title;
        
        // Build modal content
        let content = `
            <div class="space-y-6">
                <div class="bg-[#1a2c42] p-4 rounded-lg">
                    <h4 class="text-yellow-400 font-bold mb-2">Description</h4>
                    <p class="text-gray-300">${data.description}</p>
                </div>
                
                <div class="bg-[#1a2c42] p-4 rounded-lg">
                    <h4 class="text-yellow-400 font-bold mb-2">Examples</h4>
                    <ul class="list-disc list-inside text-gray-300 space-y-1">
                        ${data.examples.map(example => `<li>${example}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="bg-[#1a2c42] p-4 rounded-lg">
                    <h4 class="text-yellow-400 font-bold mb-2">Sample Sentence</h4>
                    <p class="text-gray-300 italic">"${data.sampleSentence}"</p>
                </div>
                
                <div class="bg-[#1a2c42] p-4 rounded-lg">
                    <h4 class="text-yellow-400 font-bold mb-2">Usage</h4>
                    <p class="text-gray-300">${data.usage}</p>
                </div>
                
                <div class="bg-[#1a2c42] p-4 rounded-lg">
                    <h4 class="text-yellow-400 font-bold mb-2">Key Tips</h4>
                    <ul class="list-disc list-inside text-gray-300 space-y-1">
                        ${data.tips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        this.nounModalContent.innerHTML = content;
        
        // Show modal
        this.nounModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Focus management
        this.closeNounModalBtn.focus();
    }

    /**
     * Close noun modal
     */
    closeNounModal() {
        this.nounModal.classList.add('hidden');
        document.body.style.overflow = '';
        
        // Return focus to the last clicked card
        if (this.lastClickedCard) {
            this.lastClickedCard.focus();
        }
    }
}

// ===== INITIALIZATION =====

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements
    addScrollAnimations();
    
    // Initialize scroll animation controller
    window.scrollAnimations = new ScrollAnimationController();
    
    // Initialize noun card controller
    window.nounCardController = new NounCardController();
    
    // Monitor performance in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        monitorAnimationPerformance();
    }
});

// Handle dynamic content loading
document.addEventListener('DOMContentLoaded', function() {
    // Refresh animations when new content is loaded
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Small delay to ensure DOM is updated
                setTimeout(() => {
                    if (window.scrollAnimations) {
                        window.scrollAnimations.refresh();
                    }
                }, 100);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    // Refresh animations on resize
    if (window.scrollAnimations) {
        window.scrollAnimations.refresh();
    }
});

// Handle visibility change (tab switching)
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // Refresh animations when tab becomes visible
        if (window.scrollAnimations) {
            window.scrollAnimations.refresh();
        }
    }
});

// ===== EXPORT FOR MODULE SYSTEMS =====

// Export for ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScrollAnimationController;
}

// Export for AMD modules
if (typeof define === 'function' && define.amd) {
    define([], function() {
        return ScrollAnimationController;
    });
}
