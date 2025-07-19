/**
 * Dr.Grammer - Main JavaScript File
 * Handles:
 * - Page loading animations
 * - Menu toggling
 * - Search functionality
 * - Scroll animations
 * - Mobile responsiveness
 */

/* ===================== PAGE INITIALIZATION ===================== */

// Page load: Hide loader, show content, and start animations
window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".page-loader").classList.add("fade-out");
    document.body.classList.add("loaded");

    // Show navigation links with animation (for desktop)
    if (window.innerWidth >= 900) {
      setTimeout(function () {
        const navLinks = document.getElementById("navLinks");
        if (navLinks) {
          navLinks.classList.add("visible");
          navLinks.classList.remove("hidden");
        }
      }, 500);
    }
  }, 800);

  // Start scroll-based animations
  initScrollReveal();
  initExistingObservers();
});

/* ===================== RESPONSIVE MENU BEHAVIOR ===================== */

// Toggle nav visibility on window resize
window.addEventListener("resize", () => {
  const navLinks = document.getElementById("navLinks");
  if (!navLinks) return;

  if (window.innerWidth > 900) {
    navLinks.classList.add("visible");
    navLinks.classList.remove("hidden");
  } else {
    navLinks.classList.add("hidden");
    navLinks.classList.remove("visible");
  }
});

/* ===================== SCROLL ANIMATIONS ===================== */

// Reveal animations for elements entering viewport
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal, .reveal-staggered");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  reveals.forEach((element) => revealObserver.observe(element));
}

// Animate lists/images/sections on scroll
function initExistingObservers() {
  const elements = [
    ...document.querySelectorAll(".list-container"),
    ...document.querySelectorAll(".img-animate"),
    ...document.querySelectorAll(".content-section"),
  ];

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove(
            "opacity-0",
            "translate-y-10",
            "translate-x-10"
          );
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ===================== SEARCH DATA AND MODAL ===================== */

const SEARCH_TOPICS = [
  {
    title: "NOUN",
    description: "A noun is a word that names a person, place, thing, or idea. Nouns are the building blocks of sentences and help us identify what we are talking about. They can be common or proper, singular or plural, and concrete or abstract.",
    link: "/grammar/grammar.html#noun"
  },
  {
    title: "ADJECTIVE",
    description: "Adjectives describe or modify nouns and pronouns. They give more information about an object's size, shape, age, color, origin, or material. Adjectives make sentences more interesting and specific.",
    link: "/grammar/grammar.html#adjective"
  },
  {
    title: "PRONOUN",
    description: "Pronouns are words that take the place of nouns in a sentence. They help avoid repetition and make sentences clearer. Examples include he, she, it, they, and we.",
    link: "/grammar/grammar.html#pronoun"
  },
  {
    title: "ADVERB",
    description: "Adverbs modify verbs, adjectives, or other adverbs. They tell us how, when, where, or to what extent something happens. Many adverbs end in -ly, such as quickly or happily.",
    link: "/grammar/grammar.html#adverb"
  },
  {
    title: "VERB",
    description: "A verb expresses an action, occurrence, or state of being. Verbs are essential to sentences, showing what the subject does or is. Examples: run, think, is, become.",
    link: "/grammar/grammar.html#verb"
  },
  {
    title: "INFINITIVES",
    description: "An infinitive is the base form of a verb, usually preceded by 'to' (e.g., to run, to eat). Infinitives can function as nouns, adjectives, or adverbs in sentences.",
    link: "/grammar/grammar.html#infinitives"
  },
  {
    title: "GERUND",
    description: "A gerund is a verb form ending in -ing that functions as a noun. For example, 'Swimming is fun.' Here, 'swimming' is a gerund acting as the subject.",
    link: "/grammar/grammar.html#gerund"
  },
  {
    title: "CONJUNCTIONS",
    description: "Conjunctions are words that connect words, phrases, or clauses. Common conjunctions include and, but, or, because, and although. They help join ideas smoothly.",
    link: "/grammar/grammar.html#conjunction"
  },
  {
    title: "INTERJECTIONS",
    description: "Interjections are words or phrases that express strong emotion or surprise. Examples include 'Wow!', 'Oh no!', and 'Hurray!'. They are often set apart by exclamation marks.",
    link: "/grammar/grammar.html#interjection"
  },
  {
    title: "ARTICLES",
    description: "Articles are words like 'a', 'an', and 'the' that define a noun as specific or unspecific. They help clarify whether we are talking about something in particular or in general.",
    link: "/grammar/grammar.html#article"
  },
  {
    title: "PREPOSITION",
    description: "Prepositions show the relationship between a noun (or pronoun) and other words in a sentence. Examples: in, on, at, by, with, about, under, over.",
    link: "/grammar/grammar.html#preposition"
  },
  {
    title: "PARTICIPLES",
    description: "Participles are verb forms used as adjectives. Present participles end in -ing, and past participles often end in -ed or -en. They describe nouns or pronouns.",
    link: "/grammar/grammar.html#participle"
  },
  {
    title: "Types of Sentences",
    description: "Sentences can be declarative, interrogative, imperative, or exclamatory. Each type serves a different purpose, such as making statements, asking questions, giving commands, or expressing emotions.",
    link: "/composition/composition.html#sentence-type"
  },
  {
    title: "Types of Phrases",
    description: "Phrases are groups of words that act as a unit in a sentence. Common types include noun phrases, verb phrases, prepositional phrases, and adjective phrases.",
    link: "/composition/composition.html#phrase-type"
  },
  {
    title: "Types of Clauses",
    description: "Clauses are groups of words with a subject and a verb. Independent clauses can stand alone, while dependent clauses cannot. Both are essential for sentence structure.",
    link: "/composition/composition.html#clause-type"
  },
  {
    title: "Tenses",
    description: "Tenses show the time of an action or state. English has three main tenses: past, present, and future. Each tense has simple, continuous, perfect, and perfect continuous forms.",
    link: "/composition/composition.html#tenses"
  },
  {
    title: "Subject Verb Agreement",
    description: "Correct usage of subject-verb agreement ensures that the verb matches the subject in number and person. This is essential for grammatical accuracy in English sentences, e.g., 'She runs' vs. 'They run'.",
    link: "/composition/composition.html#subj-verb-agreement"
  },
  {
    title: "Correct usage of Adjectives & Adverbs",
    description: "Learn the correct usage of adjectives and adverbs: adjectives modify nouns, while adverbs modify verbs, adjectives, or other adverbs. Using them properly clarifies meaning and avoids common mistakes.",
    link: "/composition/composition.html#correct-usage-adjectives-adverbs"
  },
  {
    title: "Formation of words",
    description: "Correct word formation involves using prefixes, suffixes, and roots to create words that fit the context. Understanding this helps avoid spelling and usage errors in writing.",
    link: "/composition/composition.html#formation-words"
  },
  {
    title: "Correct usage of Nouns & Pronouns",
    description: "Master the correct usage of nouns and pronouns, including agreement, case, and reference. Avoid ambiguity and ensure clarity by choosing the right forms in sentences.",
    link: "/composition/composition.html#crt-usg-nouns-prnouns"
  },
  {
    title: "Figures of Speech",
    description: "Correct usage of figures of speech—like similes, metaphors, and personification—adds vividness and clarity to writing. Learn when and how to use them for effective communication.",
    link: "/composition/composition.html#figures-of-speech"
  },
  {
    title: "Order of words",
    description: "Correct word order is crucial for clear English sentences. Learn the standard subject-verb-object order and how to arrange words for emphasis or clarity.",
    link: "/composition/composition.html#order-of-words"
  },
  {
    title: "Spelling Rules",
    description: "Correct usage of spelling rules helps avoid common errors. Learn key rules for adding suffixes, doubling consonants, and handling irregular spellings in English.",
    link: "/composition/composition.html#spelling-rules"
  },
  {
    title: "Correct usage of Punctuations",
    description: "Correct punctuation usage clarifies meaning and structure in writing. Learn how to use periods, commas, semicolons, and other marks to avoid ambiguity.",
    link: "/composition/composition.html#punctuations"
  },
  {
    title: "Correct usage of Conjunctions",
    description: "Correct usage of conjunctions connects words, phrases, and clauses smoothly. Learn coordinating, subordinating, and correlative conjunctions for clear, complex sentences.",
    link: "/composition/composition.html#crt-conjunctions"
  },
  {
    title: "Correct usage of Idioms",
    description: "Correct usage of idioms means using expressions whose meanings differ from their literal words. Learn common idioms and how to use them naturally in English writing and speech.",
    link: "/composition/composition.html#crt-idioms"
  },
  {
    title: "Expansion of Passages",
    description: "This involves taking a short passage and expanding it by adding details, explanations, or examples to make it more comprehensive and interesting.",
    link: "/composition/composition.html#expansion-passages"
  },
  {
    title: "Poetry Appreciation",
    description: "Poetry appreciation is about understanding and enjoying poems. It involves analyzing themes, language, and emotions expressed by the poet.",
    link: "composition/composition.html#poetry-appreciation"
  },
  {
    title: "Paragraph Writing",
    description: "Paragraph writing teaches how to organize sentences around a central idea. Good paragraphs are clear, focused, and support the main topic.",
    link: "composition/composition.html#paragraph-writing"
  },
  {
    title: "Remake of a Story",
    description: "Remaking a story means retelling it in your own words, often with a new perspective or added details. It helps develop creativity and comprehension.",
    link: "/composition/composition.html#remake-story"
  },
  {
    title: "Autobiographies",
    description: "An autobiography is a story of a person's life written by themselves. It covers important events, experiences, and lessons learned.",
    link: "composition/composition.html#autobiographies"
  },
  {
    title: "Dialogue Writing",
    description: "Dialogue writing involves creating conversations between characters. It helps bring stories to life and reveals character personalities.",
    link: "/composition/composition.html#dialogue-writing"
  },
  {
    title: "Comprehension",
    description: "Comprehension is the ability to understand and interpret written texts. Practicing comprehension improves reading skills and critical thinking.",
    link: "composition/composition.html#comprehension"
  },
  {
    title: "Story Writing",
    description: "Story writing is the art of creating fictional or real-life narratives. It involves developing characters, plots, and settings to engage readers.",
    link: "/composition/composition.html#comprehension"
  },
  {
    title: "Letter Writing",
    description: "Letter writing teaches how to communicate formally or informally through written correspondence. It includes structure, tone, and etiquette.",
    link: "/composition/composition.html#story-writing"
  },
  {
    title: "Precis-Writing",
    description: "Precis-writing is the skill of summarizing a passage concisely while retaining its main ideas. It helps improve clarity and focus in writing.",
    link: "/composition/composition.html#precis-writing"
  },
  {
    title: "Essay Writing",
    description: "Essay writing involves presenting an argument or idea in a structured format. It includes an introduction, body paragraphs, and a conclusion.",
    link: "composition/composition.html#essay-writing"
  },
  {
    title: "Paraphrasing",
    description: "Paraphrasing means expressing someone else's ideas in your own words. It helps show understanding and avoid plagiarism.",
    link: "/composition/composition.html#paraphrasing"
  },
  {
    title: "Abbreviations",
    description: "Abbreviations are shortened forms of words or phrases, like 'Dr.' for 'Doctor' or 'etc.' for 'et cetera'. They make writing concise and efficient.",
    link: "/composition/composition.html#abbreviations"
  }
];

// Modal creation
const modal = document.createElement('div');
modal.id = 'searchModal';
modal.style.display = 'none';
modal.innerHTML = `
  <div class="modal-backdrop">
    <div class="modal-content">
      <button id="closeModalBtn">&times;</button>
      <div id="modalResults"></div>
    </div>
  </div>
`;
document.body.appendChild(modal);

function showModal(results) {
  const modalResults = document.getElementById('modalResults');
  if (results.length === 0) {
    modalResults.innerHTML = '<div style="text-align:center;padding:1rem;">No results found.</div>';
  } else {
    modalResults.innerHTML = results.map(topic => `
      <div class="search-result-card">
        <h3 class="search-result-title">${topic.title}</h3>
        <p class="search-result-desc">${topic.description}</p>
        <a href="${topic.link}" class="search-result-link" target="_blank" rel="noopener noreferrer">Click for more</a>
      </div>
    `).join('');
  }
  modal.style.display = 'block';
}

document.getElementById('closeModalBtn').onclick = function() {
  modal.style.display = 'none';
};

// Close modal on backdrop click
modal.querySelector('.modal-backdrop').addEventListener('click', function(e) {
  if (e.target === this) {
    modal.style.display = 'none';
  }
});

// Search logic
function performSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  // Sort by: exact title match > partial title match > description match
  return SEARCH_TOPICS
    .map(topic => {
      const title = topic.title.toLowerCase();
      const desc = topic.description.toLowerCase();
      let relevance = 3;
      if (title === q) relevance = 0;
      else if (title.includes(q)) relevance = 1;
      else if (desc.includes(q)) relevance = 2;
      return { ...topic, relevance };
    })
    .filter(topic => topic.relevance < 3)
    .sort((a, b) => a.relevance - b.relevance);
}

// Handle search input (Enter key)
searchInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const results = performSearch(searchInput.value);
    showModal(results);
  }
});

// Handle search button click (always perform search if input has value)
searchBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  if (!searchInput.classList.contains('active')) {
    searchInput.classList.add('active');
    searchInput.focus();
    return;
  }
  if (searchInput.value.trim()) {
    const results = performSearch(searchInput.value);
    showModal(results);
  }
});

// Real-time search: update modal as user types
searchInput.addEventListener('input', function() {
  if (!searchInput.classList.contains('active')) return;
  const query = searchInput.value.trim();
  if (query) {
    const results = performSearch(query);
    showModal(results);
  } else {
    modal.style.display = 'none';
  }
});

/* ===================== SUBMENU TOGGLING ===================== */

// Generic menu toggle function
function ToggleMenu(menu, caret, toggleButton) {
  toggleButton.addEventListener("click", (e) => {
    e.stopPropagation();

    // Close all other menus
    const allMenus = [
      document.getElementById("GrammarSubmenu"),
      document.querySelector(".comp-menu"),
      document.getElementById("SentenceStructureMenu"),
      document.getElementById("CorrectUsageMenu"),
      document.getElementById("WrittenCompositionMenu"),
    ];

    allMenus.forEach((other) => {
      if (other && other !== menu) {
        other.classList.remove("visible");
        other.classList.add("hidden");
        const otherCaret = other.previousElementSibling?.querySelector("i");
        otherCaret?.classList.remove("rotate-180");
      }
    });

    // Toggle the current one
    menu.classList.toggle("visible");
    menu.classList.toggle("hidden");
    caret.classList.toggle("rotate-180");
  });

  // Modified menu click handler to allow link clicks
  menu.addEventListener("click", (e) => {
    // Only stop propagation if the click is not on a navigation link
    if (!e.target.closest('a[href]') || e.target.closest('a[href]').getAttribute('href') === '#') {
      e.stopPropagation();
    }
  });
}

// Apply toggle function to each submenu
ToggleMenu(
  document.getElementById("GrammarSubmenu"),
  document.getElementById("GrammarCaret"),
  document.getElementById("GrammarToggle")
);

/* ==== Composition Menu and Nested Submenus ==== */

const compositionToggle = document.getElementById("CompositionMenu");
const compositionMenu = document.querySelector(".comp-menu");
const compositionCaret = document.getElementById("CompositionCaret");

compositionToggle.addEventListener("click", (e) => {
  e.stopPropagation();

  // Close grammar if open
  const grammarsubmenu = document.getElementById("GrammarSubmenu");
  grammarsubmenu.classList.remove("visible");
  grammarsubmenu.classList.add("hidden");
  document.getElementById("GrammarCaret").classList.remove("rotate-180");

  // Toggle composition
  compositionMenu.classList.toggle("visible");
  compositionMenu.classList.toggle("hidden");
  compositionCaret.classList.toggle("rotate-180");
});

// Helper to toggle nested submenus
function toggleSubmenu(menu, caret, otherMenus) {
  return function (e) {
    e.stopPropagation();

    // Close others
    otherMenus.forEach((m) => {
      m.classList.remove("visible");
      m.classList.add("hidden");
      const c = m.previousElementSibling?.querySelector("i");
      c?.classList.remove("rotate-180");
    });

    menu.classList.toggle("visible");
    menu.classList.toggle("hidden");
    caret.classList.toggle("rotate-180");
  };
}

document
  .getElementById("SentenceStructureToggle")
  .addEventListener(
    "click",
    toggleSubmenu(
      document.getElementById("SentenceStructureMenu"),
      document.getElementById("SentenceStructureCaret"),
      [
        document.getElementById("CorrectUsageMenu"),
        document.getElementById("WrittenCompositionMenu"),
      ]
    )
  );

document
  .getElementById("CorrectUsageToggle")
  .addEventListener(
    "click",
    toggleSubmenu(
      document.getElementById("CorrectUsageMenu"),
      document.getElementById("CorrectUsageCaret"),
      [
        document.getElementById("SentenceStructureMenu"),
        document.getElementById("WrittenCompositionMenu"),
      ]
    )
  );

document
  .getElementById("WrittenCompositionToggle")
  .addEventListener(
    "click",
    toggleSubmenu(
      document.getElementById("WrittenCompositionMenu"),
      document.getElementById("WrittenCompositionCaret"),
      [
        document.getElementById("SentenceStructureMenu"),
        document.getElementById("CorrectUsageMenu"),
      ]
    )
  );

/* ===================== OUTSIDE CLICK TO CLOSE MENUS ===================== */

function closeMenusOnOutsideClick() {
  const menus = [
    document.getElementById("GrammarSubmenu"),
    document.querySelector(".comp-menu"),
    document.getElementById("SentenceStructureMenu"),
    document.getElementById("CorrectUsageMenu"),
    document.getElementById("WrittenCompositionMenu"),
  ];

  document.addEventListener("click", (e) => {
    // Check if click is outside all menus and toggles
    const isOutsideMenus = menus.every(
      (menu) => !menu.contains(e.target) && !e.target.closest('[id$="Toggle"]')
    );

    const isOutsideSearch =
      !searchInput.contains(e.target) &&
      e.target.id !== "searchBtn" &&
      !e.target.closest("#searchBtn");

    if (isOutsideMenus) {
      menus.forEach((menu) => {
        menu.classList.remove("visible");
        menu.classList.add("hidden");
        const caret = menu.previousElementSibling?.querySelector("i");
        caret?.classList.remove("rotate-180");
      });
    }

    if (isOutsideSearch && searchInput.classList.contains("active")) {
      searchInput.classList.remove("active");
      searchInput.value = "";
    }
  });
}

closeMenusOnOutsideClick();

/* ===================== CLOSE MENUS ON NAVIGATION LINK CLICK ===================== */

function closeAllMenus() {
  // Close all dropdown menus
  const menus = [
    document.getElementById("GrammarSubmenu"),
    document.querySelector(".comp-menu"),
    document.getElementById("SentenceStructureMenu"),
    document.getElementById("CorrectUsageMenu"),
    document.getElementById("WrittenCompositionMenu"),
  ];

  menus.forEach((menu) => {
    if (menu) {
      menu.classList.remove("visible");
      menu.classList.add("hidden");
      const caret = menu.previousElementSibling?.querySelector("i");
      if (caret) caret.classList.remove("rotate-180");
    }
  });

  // Close mobile navigation menu only on screens < 900px
  if (window.innerWidth < 900) {
    const navbar = document.getElementById("navLinks");
    if (navbar) {
      navbar.classList.add("hidden");
      navbar.classList.remove("visible");
    }
  }

  // Close search bar if open
  if (searchInput && searchInput.classList.contains("active")) {
    searchInput.classList.remove("active");
    searchInput.value = "";
  }
}

// Use event delegation to handle all navigation link clicks
function setupNavigationLinkHandlers() {
  // Add event listener to the entire document
  document.addEventListener('click', (e) => {
    // Check if the clicked element is a navigation link
    const link = e.target.closest('a[href]');
    
    if (link) {
      const href = link.getAttribute('href');
      
      // Check if it's a real navigation link (not a menu toggle or empty link)
      // Allow href="#" for Composition menu links since they're valid navigation items
      if (href && 
          href !== '' && 
          !link.closest('[id$="Toggle"]')) {
        
        // Close all menus when ANY navigation link is clicked
        closeAllMenus();
      }
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupNavigationLinkHandlers();
});

// Also initialize when page loads
window.addEventListener('load', () => {
  setupNavigationLinkHandlers();
});

/* ===================== MOBILE NAVIGATION TOGGLE ===================== */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navLinks");

// Add a close button to the navbar
const closeButton = document.createElement("button");
closeButton.innerHTML = '<i class="fas fa-times"></i>';
closeButton.className =
  "absolute top-2 right-2 text-white hover:text-gray-300 focus:outline-none";
closeButton.addEventListener("click", () => {
  navbar.classList.add("hidden");
  navbar.classList.remove("visible");
});
navbar.insertBefore(closeButton, navbar.firstChild);

// Toggle navbar on mobile menu button click
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  navbar.classList.toggle("visible");
});

// Prevent scroll from closing the menu
document.addEventListener(
  "touchmove",
  (e) => {
    if (navbar.classList.contains("visible")) {
      e.stopPropagation();
    }
  },
  { passive: false }
);

