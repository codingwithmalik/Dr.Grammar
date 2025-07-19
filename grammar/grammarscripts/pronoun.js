// Pronoun Section JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Create modal HTML if it doesn't exist
    createPronounModal();
    
    // Pronoun card interactions
    const pronounCards = document.querySelectorAll('.pronoun-card');
    const pronounSummaryCards = document.querySelectorAll('.pronoun-summary-card');

    // Pronoun card click handlers
    pronounCards.forEach(card => {
        card.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            showPronounModal(type);
        });
    });

    // Pronoun summary card click handlers
    pronounSummaryCards.forEach(card => {
        card.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            showPronounModal(type);
        });
    });

    // Exercise functionality
    initializeExercises();

    // Create modal HTML
    function createPronounModal() {
        if (!document.getElementById('pronounModal')) {
            const modalHTML = `
                <div id="pronounModal" class="pronoun-modal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 id="pronounModalTitle"></h3>
                            <button class="close-modal" id="closePronounModal">&times;</button>
                        </div>
                        <div class="modal-body" id="pronounModalContent"></div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }
    }

    // Pronoun modal functionality
    function showPronounModal(type) {
        const modal = document.getElementById('pronounModal');
        const modalTitle = document.getElementById('pronounModalTitle');
        const modalContent = document.getElementById('pronounModalContent');

        const pronounData = {
            personal: {
                title: 'Personal Pronouns',
                content: `
                    <h4>Personal Pronouns</h4>
                    <p>Personal pronouns refer to specific people or things. They can be used as subjects, objects, or possessives.</p>
                    
                    <div class="example-list">
                        <h5>Subject Pronouns:</h5>
                        <p>I, you, he, she, it, we, they</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Object Pronouns:</h5>
                        <p>me, you, him, her, it, us, them</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li><strong>I</strong> am going to school.</li>
                            <li>The teacher praised <strong>me</strong>.</li>
                            <li><strong>She</strong> loves reading.</li>
                            <li>He gave <strong>her</strong> a gift.</li>
                        </ul>
                    </div>
                `
            },
            demonstrative: {
                title: 'Demonstrative Pronouns',
                content: `
                    <h4>Demonstrative Pronouns</h4>
                    <p>Demonstrative pronouns point to specific people or things. They indicate position or distance.</p>
                    
                    <div class="example-list">
                        <h5>Demonstrative Pronouns:</h5>
                        <p>this, that, these, those</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li><strong>This</strong> is my favorite book.</li>
                            <li><strong>That</strong> is a beautiful car.</li>
                            <li><strong>These</strong> are my friends.</li>
                            <li><strong>Those</strong> are expensive shoes.</li>
                        </ul>
                    </div>
                    
                    <p><strong>Note:</strong> Demonstrative pronouns can also function as adjectives when they modify nouns.</p>
                `
            },
            interrogative: {
                title: 'Interrogative Pronouns',
                content: `
                    <h4>Interrogative Pronouns</h4>
                    <p>Interrogative pronouns are used to ask questions about people or things.</p>
                    
                    <div class="example-list">
                        <h5>Interrogative Pronouns:</h5>
                        <p>who, whom, whose, what, which</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li><strong>Who</strong> is coming to the party?</li>
                            <li><strong>Whom</strong> did you invite?</li>
                            <li><strong>Whose</strong> book is this?</li>
                            <li><strong>What</strong> is your favorite color?</li>
                            <li><strong>Which</strong> movie do you prefer?</li>
                        </ul>
                    </div>
                    
                    <p><strong>Note:</strong> "Who" is used as a subject, "whom" as an object.</p>
                `
            },
            relative: {
                title: 'Relative Pronouns',
                content: `
                    <h4>Relative Pronouns</h4>
                    <p>Relative pronouns connect clauses and refer to nouns mentioned earlier in the sentence.</p>
                    
                    <div class="example-list">
                        <h5>Relative Pronouns:</h5>
                        <p>who, whom, whose, which, that</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li>The person <strong>who</strong> called is my friend.</li>
                            <li>The book <strong>that</strong> I read was interesting.</li>
                            <li>The student <strong>whose</strong> book was lost is here.</li>
                            <li>The movie, <strong>which</strong> was released last year, is great.</li>
                        </ul>
                    </div>
                    
                    <p><strong>Note:</strong> Relative pronouns introduce relative clauses that provide additional information about nouns.</p>
                `
            },
            indefinite: {
                title: 'Indefinite Pronouns',
                content: `
                    <h4>Indefinite Pronouns</h4>
                    <p>Indefinite pronouns refer to non-specific people or things.</p>
                    
                    <div class="example-list">
                        <h5>Indefinite Pronouns:</h5>
                        <ul>
                            <li>anyone, everyone, someone, no one</li>
                            <li>anything, everything, something, nothing</li>
                            <li>all, some, many, few, several</li>
                            <li>each, either, neither, both</li>
                        </ul>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li><strong>Everyone</strong> enjoyed the party.</li>
                            <li><strong>Someone</strong> left their bag here.</li>
                            <li><strong>Nothing</strong> is impossible.</li>
                            <li><strong>All</strong> of the students passed.</li>
                        </ul>
                    </div>
                    
                    <p><strong>Note:</strong> Indefinite pronouns can be singular or plural, and this affects verb agreement.</p>
                `
            },
            reflexive: {
                title: 'Reflexive Pronouns',
                content: `
                    <h4>Reflexive Pronouns</h4>
                    <p>Reflexive pronouns refer back to the subject of the sentence.</p>
                    
                    <div class="example-list">
                        <h5>Reflexive Pronouns:</h5>
                        <p>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li>I hurt <strong>myself</strong>.</li>
                            <li>She looked at <strong>herself</strong> in the mirror.</li>
                            <li>They enjoyed <strong>themselves</strong> at the party.</li>
                            <li>We should be proud of <strong>ourselves</strong>.</li>
                        </ul>
                    </div>
                    
                    <p><strong>Note:</strong> Reflexive pronouns are used when the subject and object are the same person or thing.</p>
                `
            },
            reciprocal: {
                title: 'Reciprocal Pronouns',
                content: `
                    <h4>Reciprocal Pronouns</h4>
                    <p>Reciprocal pronouns show mutual relationship between two or more people or things.</p>
                    
                    <div class="example-list">
                        <h5>Reciprocal Pronouns:</h5>
                        <p>each other, one another</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li>They love <strong>each other</strong>.</li>
                            <li>The students helped <strong>one another</strong>.</li>
                            <li>We should respect <strong>each other</strong>.</li>
                            <li>The team members supported <strong>one another</strong>.</li>
                        </ul>
                    </div>
                    
                    <p><strong>Note:</strong> "Each other" is used for two people/things, "one another" for more than two.</p>
                `
            },
            possessive: {
                title: 'Possessive Pronouns',
                content: `
                    <h4>Possessive Pronouns</h4>
                    <p>Possessive pronouns show ownership or possession without needing a noun.</p>
                    
                    <div class="example-list">
                        <h5>Possessive Pronouns:</h5>
                        <p>mine, yours, his, hers, its, ours, theirs</p>
                    </div>
                    
                    <div class="example-list">
                        <h5>Examples:</h5>
                        <ul>
                            <li>This book is <strong>mine</strong>.</li>
                            <li>The car is <strong>yours</strong>.</li>
                            <li>The house is <strong>theirs</strong>.</li>
                            <li>The success is <strong>ours</strong>.</li>
                        </ul>
                    </div>
                    
                    <p><strong>Note:</strong> Possessive pronouns replace nouns, unlike possessive adjectives which modify nouns.</p>
                `
            }
        };

        if (pronounData[type]) {
            modalTitle.textContent = pronounData[type].title;
            modalContent.innerHTML = pronounData[type].content;
            modal.style.display = 'block';
        }
    }

    // Close modal functionality
    const closePronounModal = document.getElementById('closePronounModal');
    if (closePronounModal) {
        closePronounModal.addEventListener('click', function() {
            document.getElementById('pronounModal').style.display = 'none';
        });
    }

    // Close modal when clicking outside
    const pronounModal = document.getElementById('pronounModal');
    if (pronounModal) {
        pronounModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    }

    // Add ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const pronounModal = document.getElementById('pronounModal');
            if (pronounModal && pronounModal.style.display === 'block') {
                pronounModal.style.display = 'none';
            }
        }
    });

    // Initialize exercises
    function initializeExercises() {
        const exerciseOptions = document.querySelectorAll('.exercise-item .option');
        const checkButtons = document.querySelectorAll('.check-answer');
        const showAnswerButtons = document.querySelectorAll('.show-answer');

        // Exercise data
        const exerciseData = {
            'exercise1': {
                correct: 'b',
                explanation: 'The correct answer is "her" because it refers to Sarah (a female) and is used as an object pronoun.'
            },
            'exercise2': {
                correct: 'a',
                explanation: 'The correct answer is "This" because it points to something nearby (the book in your hand).'
            },
            'exercise3': {
                correct: 'c',
                explanation: 'The correct answer is "who" because it introduces a relative clause describing the person.'
            },
            'exercise4': {
                correct: 'b',
                explanation: 'The correct answer is "themselves" because it refers back to the subject "students" (plural).'
            },
            'exercise5': {
                correct: 'a',
                explanation: 'The correct answer is "mine" because it shows possession without needing a noun.'
            }
        };

        // Option selection
        exerciseOptions.forEach(option => {
            option.addEventListener('click', function() {
                const exerciseItem = this.closest('.exercise-item');
                const options = exerciseItem.querySelectorAll('.option');
                
                // Remove selected class from all options
                options.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to clicked option
                this.classList.add('selected');
            });
        });

        // Check answer functionality
        checkButtons.forEach(button => {
            button.addEventListener('click', function() {
                const exerciseItem = this.closest('.exercise-item');
                const exerciseId = exerciseItem.id;
                const selectedOption = exerciseItem.querySelector('.option.selected');
                const options = exerciseItem.querySelectorAll('.option');
                const answerDiv = exerciseItem.querySelector('.answer');
                const explanationDiv = exerciseItem.querySelector('.explanation');

                if (!selectedOption) {
                    alert('Please select an answer first!');
                    return;
                }

                const selectedAnswer = selectedOption.getAttribute('data-answer');
                const correctAnswer = exerciseData[exerciseId].correct;

                // Remove previous result classes
                options.forEach(opt => {
                    opt.classList.remove('correct', 'incorrect');
                });

                // Show correct/incorrect feedback
                if (selectedAnswer === correctAnswer) {
                    selectedOption.classList.add('correct');
                    answerDiv.innerHTML = '<strong>Correct!</strong> Well done!';
                    answerDiv.style.display = 'block';
                } else {
                    selectedOption.classList.add('incorrect');
                    // Highlight correct answer
                    options.forEach(opt => {
                        if (opt.getAttribute('data-answer') === correctAnswer) {
                            opt.classList.add('correct');
                        }
                    });
                    answerDiv.innerHTML = '<strong>Incorrect.</strong> Try again!';
                    answerDiv.style.display = 'block';
                }

                // Show explanation
                explanationDiv.innerHTML = exerciseData[exerciseId].explanation;
                explanationDiv.style.display = 'block';
            });
        });

        // Show answer functionality
        showAnswerButtons.forEach(button => {
            button.addEventListener('click', function() {
                const exerciseItem = this.closest('.exercise-item');
                const exerciseId = exerciseItem.id;
                const options = exerciseItem.querySelectorAll('.option');
                const answerDiv = exerciseItem.querySelector('.answer');
                const explanationDiv = exerciseItem.querySelector('.explanation');
                const correctAnswer = exerciseData[exerciseId].correct;

                // Remove previous result classes
                options.forEach(opt => {
                    opt.classList.remove('correct', 'incorrect', 'selected');
                });

                // Highlight correct answer
                options.forEach(opt => {
                    if (opt.getAttribute('data-answer') === correctAnswer) {
                        opt.classList.add('correct');
                    }
                });

                // Show answer and explanation
                answerDiv.innerHTML = '<strong>Answer:</strong> ' + correctAnswer.toUpperCase();
                answerDiv.style.display = 'block';
                explanationDiv.innerHTML = exerciseData[exerciseId].explanation;
                explanationDiv.style.display = 'block';
            });
        });
    }

    // Add keyboard navigation support
    pronounCards.forEach(card => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const type = this.getAttribute('data-type');
                showPronounModal(type);
            }
        });
        
        // Make cards focusable
        card.setAttribute('tabindex', '0');
    });

    // Add click animation
    pronounCards.forEach(card => {
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
