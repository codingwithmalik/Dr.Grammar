// Participle Modal Functionality

document.addEventListener('DOMContentLoaded', function () {
  // Modal elements
  let modal = document.getElementById('participleModal');
  if (!modal) {
    // Create modal if it doesn't exist
    modal = document.createElement('div');
    modal.id = 'participleModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
      <div class="bg-[#243b55] rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 id="participleModalTitle" class="text-2xl font-bold text-yellow-400"></h3>
          <button id="closeParticipleModal" class="text-gray-400 hover:text-white text-2xl">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div id="participleModalContent" class="text-gray-300 space-y-4"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const participleTypeContent = {
    present: {
      title: 'Present Participle',
      content: `<p><b>Present participles</b> are verb forms ending in <b>-ing</b> (e.g., <span class='text-yellow-400'>running</span>, <span class='text-yellow-400'>singing</span>). They are used to form continuous tenses and as adjectives. <br><b>Example:</b> The <span class='text-yellow-400'>crying</span> baby needs attention.</p>
      <ul class='list-disc pl-6'><li>Used with helping verbs to form continuous tenses (is running, was singing).</li><li>Used as adjectives (the <span class='text-yellow-400'>boiling</span> water).</li></ul>`
    },
    past: {
      title: 'Past Participle',
      content: `<p><b>Past participles</b> usually end in <b>-ed, -en, -d, -t, or -n</b> (e.g., <span class='text-yellow-400'>broken</span>, <span class='text-yellow-400'>written</span>). Many are irregular. They are used to form perfect tenses and the passive voice, and as adjectives.<br><b>Example:</b> The window was <span class='text-yellow-400'>broken</span> by the ball.</p>
      <ul class='list-disc pl-6'><li>Used with have/has/had to form perfect tenses (has eaten, had finished).</li><li>Used with be to form the passive voice (was broken, is written).</li><li>Used as adjectives (the <span class='text-yellow-400'>fallen</span> leaves).</li></ul>`
    },
    perfect: {
      title: 'Perfect Participle',
      content: `<p><b>Perfect participles</b> are formed with <b>having + past participle</b> (e.g., <span class='text-yellow-400'>having finished</span>, <span class='text-yellow-400'>having seen</span>). They show that one action was completed before another began.<br><b>Example:</b> <span class='text-yellow-400'>Having finished</span> his work, he went home.</p>
      <ul class='list-disc pl-6'><li>Shows completed action before another (Having eaten, she left).</li><li>Often used at the beginning of sentences to show sequence.</li></ul>`
    }
  };

  // Card click handler
  function showParticipleModal(type) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    document.getElementById('participleModalTitle').innerHTML = participleTypeContent[type].title;
    document.getElementById('participleModalContent').innerHTML = participleTypeContent[type].content;
  }

  // Close modal handler
  function closeParticipleModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  // Attach event listeners to participle cards
  document.querySelectorAll('.participle-card, .participle-summary-card').forEach(card => {
    card.addEventListener('click', function () {
      const type = card.getAttribute('data-type');
      if (type && participleTypeContent[type]) {
        showParticipleModal(type);
      }
    });
  });

  // Close modal on button click
  document.getElementById('closeParticipleModal').addEventListener('click', closeParticipleModal);
  // Close modal on outside click
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeParticipleModal();
  });
  // Close modal on Escape key
  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('hidden') && e.key === 'Escape') closeParticipleModal();
  });
});
