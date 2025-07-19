// Adverb Section JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Adverb card interactions
    const adverbCards = document.querySelectorAll('.adverb-card');
    const adverbSummaryCards = document.querySelectorAll('.adverb-summary-card');

    // Adverb card click handlers
    adverbCards.forEach(card => {
        card.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            showAdverbModal(type);
        });
    });

    // Adverb summary card click handlers
    adverbSummaryCards.forEach(card => {
        card.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            showAdverbModal(type);
        });
    });

    // Exercise functionality
    initializeExercises();

    // Adverb modal functionality
    function showAdverbModal(type) {
        const modal = document.getElementById('adverbModal');
        const modalTitle = document.getElementById('adverbModalTitle');
        const modalContent = document.getElementById('adverbModalContent');
        const adverbData = {
            manner: {
                title: 'Manner Adverbs',
                content: `
                    <h4>Manner Adverbs</h4>
                    <p>Manner adverbs describe how an action is performed. They answer the question "How?"</p>
                    
                    <div class="example-list">
                        <h5>Common Manner Adverbs:</h5>
                        <p>quickly, slowly, carefully, loudly, softly, well, badly, beautifully, gracefully, efficiently</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li>He speaks <strong>clearly</strong>.</li>
                            <li>She dances <strong>gracefully</strong>.</li>
                            <li>They work <strong>efficiently</strong>.</li>
                            <li>The child cried <strong>loudly</strong>.</li>
                        </ul>
                    </div>
                    
                    <p><strong>Note:</strong> Most manner adverbs are formed by adding "-ly" to adjectives.</p>
                `
            },
            time: {
                title: 'Time Adverbs',
                content: `
                    <h4>Time Adverbs</h4>
                    <p>Time adverbs indicate when an action occurs. They answer the question "When?"</p>
                    
                    <div class="example-list">
                        <h5>Common Time Adverbs:</h5>
                        <p>now, then, today, yesterday, tomorrow, soon, late, early, already, yet, still, ago</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li>I will see you <strong>tomorrow</strong>.</li>
                            <li>She arrived <strong>early</strong>.</li>
                            <li>We finished <strong>late</strong>.</li>
                            <li>He left <strong>yesterday</strong>.</li>
                        </ul>
                    </div>
                    
                    <p><strong>Note:</strong> Time adverbs can appear at the beginning, middle, or end of a sentence.</p>
                `
            },
            place: {
                title: 'Place Adverbs',
                content: `
                    <h4>Place Adverbs</h4>
                    <p>Place adverbs show where an action takes place. They answer the question "Where?"</p>
                    
                    <div class="example-list">
                        <h5>Common Place Adverbs:</h5>
                        <p>here, there, everywhere, nowhere, inside, outside, upstairs, downstairs, abroad, home</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li>Come <strong>here</strong>.</li>
                            <li>She went <strong>abroad</strong>.</li>
                            <li>They live <strong>upstairs</strong>.</li>
                            <li>We looked <strong>everywhere</strong>.</li>
                        </ul>
                    </div>
                    
                    <p><strong>Note:</strong> Place adverbs often appear at the end of sentences.</p>
                `
            },
            frequency: {
                title: 'Frequency Adverbs',
                content: `
                    <h4>Frequency Adverbs</h4>
                    <p>Frequency adverbs indicate how often an action occurs. They answer the question "How often?"</p>
                    
                    <div class="example-list">
                        <h5>Common Frequency Adverbs:</h5>
                        <p>always, never, often, sometimes, rarely, usually, occasionally, frequently, seldom, hardly ever</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li>I <strong>always</strong> brush my teeth.</li>
                            <li>She <strong>sometimes</strong> goes to the gym.</li>
                            <li>They <strong>never</strong> arrive on time.</li>
                            <li>He <strong>usually</strong> works late.</li>
                        </ul>
                    </div>
                    
                    <p><strong>Note:</strong> Frequency adverbs usually come before the main verb but after "be" verbs.</p>
                `
            },
            degree: {
                title: 'Degree Adverbs',
                content: `
                    <h4>Degree Adverbs</h4>
                    <p>Degree adverbs show the intensity or extent of an action or quality. They answer the question "How much?"</p>
                    
                    <div class="example-list">
                        <h5>Common Degree Adverbs:</h5>
                        <p>very, quite, rather, too, enough, almost, nearly, completely, entirely, extremely, slightly</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li>The movie was <strong>very</strong> interesting.</li>
                            <li>She is <strong>quite</strong> tall.</li>
                            <li>The food was <strong>too</strong> spicy.</li>
                            <li>He was <strong>almost</strong> late.</li>
                        </ul>
                    </div>
                    
                    <p><strong>Note:</strong> Degree adverbs can modify adjectives, other adverbs, or verbs.</p>
                `
            },
            interrogative: {
                title: 'Interrogative Adverbs',
                content: `
                    <h4>Interrogative Adverbs</h4>
                    <p>Interrogative adverbs are used to ask questions about manner, time, place, or reason.</p>
                    
                    <div class="example-list">
                        <h5>Interrogative Adverbs:</h5>
                        <p>how, when, where, why</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li><strong>How</strong> did you get here?</li>
                            <li><strong>When</strong> will you arrive?</li>
                            <li><strong>Where</strong> did you go?</li>
                            <li><strong>Why</strong> are you late?</li>
                        </ul>
                    </div>
                    
                    <p><strong>Note:</strong> Interrogative adverbs are used to form questions and gather specific information.</p>
                `
            }
        };

        if (adverbData[type]) {
            modalTitle.textContent = adverbData[type].title;
            modalContent.innerHTML = adverbData[type].content;
            modal.style.display = 'flex';
        }
    }

    // Close modal functionality
    const closeAdverbModal = document.getElementById('closeAdverbModal');
    if (closeAdverbModal) {
        closeAdverbModal.addEventListener('click', function() {
            document.getElementById('adverbModal').style.display = 'none';
        });
    }

    // Close modal when clicking outside
    const adverbModal = document.getElementById('adverbModal');
    if (adverbModal) {
        adverbModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    }

    // Add ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const adverbModal = document.getElementById('adverbModal');
            if (adverbModal && adverbModal.style.display === 'block') {
                adverbModal.style.display = 'none';
            }
        }
    });

    // Initialize exercises
    function initializeExercises() {
        // Add smooth scrolling to exercise sections
        const exerciseSections = document.querySelectorAll('.exercise-1, .exercise-2, .exercise-3');
        
        exerciseSections.forEach(section => {
            // Add animation on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            });
            
            observer.observe(section);
        });

        // Add hover effects to exercise items
        const exerciseItems = document.querySelectorAll('.exe-1-list li, .exe-2-list li, .exe-3-list li');
        
        exerciseItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0) scale(1)';
            });
        });

        // Add click effects to answer sections
        const answerSections = document.querySelectorAll('.exercise-1-answers, .exercise-2-answers, .exercise-3-answers');
        
        answerSections.forEach(section => {
            section.addEventListener('click', function() {
                this.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });
        });
    }

    // Add keyboard navigation support
    adverbCards.forEach(card => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const type = this.getAttribute('data-type');
                showAdverbModal(type);
            }
        });
        
        // Make cards focusable
        card.setAttribute('tabindex', '0');
    });

    // Add click animation
    adverbCards.forEach(card => {
        card.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
