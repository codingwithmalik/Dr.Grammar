// Article modal functionality for interactive cards

document.addEventListener('DOMContentLoaded', function () {
  // Modal elements
  let modal = document.getElementById('articleModal');
  if (!modal) {
    // Create modal if it doesn't exist
    modal = document.createElement('div');
    modal.id = 'articleModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
      <div class="bg-[#243b55] rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 id="articleModalTitle" class="text-2xl font-bold text-yellow-400"></h3>
          <button id="closeArticleModal" class="text-gray-400 hover:text-white text-2xl">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div id="articleModalContent" class="text-gray-300 space-y-4"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const articleTypeContent = {
    definite: {
      title: 'Definite Article',
      content: `<p><b>The</b> is the only definite article in English. It is used to refer to a specific noun that is known to the reader or listener. For example, <span class='text-yellow-400'>'the sun'</span> refers to the one and only sun we all know. Use <b>the</b> when both the speaker and listener know what is being talked about, or when something has already been mentioned.</p>
      <ul class='list-disc pl-6'><li>Use <b>the</b> with unique things (the moon, the sky).</li><li>Use <b>the</b> when the noun is already specified or previously mentioned.</li><li>Use <b>the</b> with superlatives (the best, the tallest).</li></ul>
      <p><b>Tip:</b> If you can point to it or both people know it, use <b>the</b>!</p>`
    },
    indefinite: {
      title: 'Indefinite Article',
      content: `<p><b>A</b> and <b>an</b> are indefinite articles. They are used when referring to a non-specific or general noun. <b>A</b> is used before words that begin with a consonant sound, and <b>an</b> is used before words that begin with a vowel sound. For example, <span class='text-yellow-400'>'a cat'</span> (any cat, not a specific one), <span class='text-yellow-400'>'an apple'</span>.</p>
      <ul class='list-disc pl-6'><li>Use <b>a</b> before consonant sounds (a dog, a university).</li><li>Use <b>an</b> before vowel sounds (an hour, an umbrella).</li><li>Only use <b>a/an</b> with singular countable nouns.</li></ul>
      <p><b>Tip:</b> If you mean any one of something, not a specific one, use <b>a</b> or <b>an</b>!</p>`
    },
    zero: {
      title: 'Zero Article',
      content: `<p>The <b>zero article</b> means no article is used. This happens with most proper nouns, names of languages, meals, and some places. For example, we say <span class='text-yellow-400'>'Water is essential.'</span> (not <i>the</i> water), <span class='text-yellow-400'>'She goes to school.'</span></p>
      <ul class='list-disc pl-6'><li>No article with most countries, languages, or meals (breakfast, lunch).</li><li>No article with plural or uncountable nouns when speaking generally (Books are useful. Milk is healthy.).</li></ul>
      <p><b>Tip:</b> If you are talking about things in general, or proper names, you often don't need an article!</p>`
    }
  };

  // Card click handler
  function showArticleModal(type) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    document.getElementById('articleModalTitle').innerHTML = articleTypeContent[type].title;
    document.getElementById('articleModalContent').innerHTML = articleTypeContent[type].content;
  }

  // Close modal handler
  function closeArticleModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  // Attach event listeners to article cards
  document.querySelectorAll('.article-card, .article-summary-card').forEach(card => {
    card.addEventListener('click', function () {
      const type = card.getAttribute('data-type');
      if (type && articleTypeContent[type]) {
        showArticleModal(type);
      }
    });
  });

  // Close modal on button click
  document.getElementById('closeArticleModal').addEventListener('click', closeArticleModal);
  // Close modal on outside click
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeArticleModal();
  });
  // Close modal on Escape key
  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('hidden') && e.key === 'Escape') closeArticleModal();
  });
});
