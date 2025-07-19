// Preposition modal functionality for interactive cards

document.addEventListener('DOMContentLoaded', function () {
  // Modal elements
  let modal = document.getElementById('prepositionModal');
  if (!modal) {
    // Create modal if it doesn't exist
    modal = document.createElement('div');
    modal.id = 'prepositionModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
      <div class="bg-[#243b55] rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 id="prepositionModalTitle" class="text-2xl font-bold text-yellow-400"></h3>
          <button id="closePrepositionModal" class="text-gray-400 hover:text-white text-2xl">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div id="prepositionModalContent" class="text-gray-300 space-y-4"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const prepositionTypeContent = {
    time: {
      title: 'Prepositions of Time',
      content: `<p><b>Prepositions of time</b> show <b>when</b> something happens. Common examples include <span class='text-yellow-400'>at</span>, <span class='text-yellow-400'>in</span>, and <span class='text-yellow-400'>on</span>. For example: <span class='text-yellow-400'>'at 5 o\'clock'</span>, <span class='text-yellow-400'>'in the morning'</span>, <span class='text-yellow-400'>'on Monday'</span>.</p>
      <ul class='list-disc pl-6'><li><b>at</b> for precise times (at noon, at 7pm)</li><li><b>in</b> for months, years, periods (in July, in 2020, in the evening)</li><li><b>on</b> for days and dates (on Friday, on 1st May)</li></ul>
      <p><b>Tip:</b> Use <b>at</b> for clock times, <b>in</b> for longer periods, and <b>on</b> for days and dates!</p>`
    },
    place: {
      title: 'Prepositions of Place',
      content: `<p><b>Prepositions of place</b> show <b>where</b> something happens. Common examples include <span class='text-yellow-400'>in</span>, <span class='text-yellow-400'>on</span>, and <span class='text-yellow-400'>at</span>. For example: <span class='text-yellow-400'>'in the room'</span>, <span class='text-yellow-400'>'on the table'</span>, <span class='text-yellow-400'>'at the station'</span>.</p>
      <ul class='list-disc pl-6'><li><b>in</b> for enclosed spaces (in a box, in the city)</li><li><b>on</b> for surfaces (on the wall, on the floor)</li><li><b>at</b> for points (at the door, at the bus stop)</li></ul>
      <p><b>Tip:</b> <b>In</b> = inside, <b>on</b> = surface, <b>at</b> = point!</p>`
    },
    direction: {
      title: 'Prepositions of Direction',
      content: `<p><b>Prepositions of direction</b> show <b>movement</b> or <b>direction</b>. Common examples include <span class='text-yellow-400'>to</span>, <span class='text-yellow-400'>into</span>, and <span class='text-yellow-400'>towards</span>. For example: <span class='text-yellow-400'>'to the park'</span>, <span class='text-yellow-400'>'into the house'</span>, <span class='text-yellow-400'>'towards the city'</span>.</p>
      <ul class='list-disc pl-6'><li><b>to</b> for movement to a place (go to school)</li><li><b>into</b> for movement from outside to inside (jump into the pool)</li><li><b>towards</b> for movement in the direction of something (walk towards the station)</li></ul>
      <p><b>Tip:</b> Use <b>to</b> for destinations, <b>into</b> for entering, <b>towards</b> for moving closer!</p>`
    },
    agent: {
      title: 'Prepositions of Agent/Instrument',
      content: `<p><b>Prepositions of agent/instrument</b> show <b>who</b> or <b>what</b> causes something, or what is used. Common examples include <span class='text-yellow-400'>by</span> and <span class='text-yellow-400'>with</span>. For example: <span class='text-yellow-400'>'by the teacher'</span>, <span class='text-yellow-400'>'with a pen'</span>.</p>
      <ul class='list-disc pl-6'><li><b>by</b> for the doer (The book was written by her.)</li><li><b>with</b> for the instrument (He wrote with a pencil.)</li></ul>
      <p><b>Tip:</b> <b>By</b> = who did it, <b>with</b> = what was used!</p>`
    },
    manner: {
      title: 'Prepositions of Manner',
      content: `<p><b>Prepositions of manner</b> show <b>how</b> something is done. Common examples include <span class='text-yellow-400'>with</span>, <span class='text-yellow-400'>by</span>, and <span class='text-yellow-400'>in</span>. For example: <span class='text-yellow-400'>'with care'</span>, <span class='text-yellow-400'>'by hand'</span>, <span class='text-yellow-400'>'in a hurry'</span>.</p>
      <ul class='list-disc pl-6'><li><b>with</b> for the way (with a smile, with care)</li><li><b>by</b> for the means (by car, by hand)</li><li><b>in</b> for the manner (in a hurry, in silence)</li></ul>
      <p><b>Tip:</b> <b>With</b> = using a way, <b>by</b> = using a means, <b>in</b> = in a state!</p>`
    }
  };

  // Card click handler
  function showPrepositionModal(type) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    document.getElementById('prepositionModalTitle').innerHTML = prepositionTypeContent[type].title;
    document.getElementById('prepositionModalContent').innerHTML = prepositionTypeContent[type].content;
  }

  // Close modal handler
  function closePrepositionModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  // Attach event listeners to preposition cards
  document.querySelectorAll('.preposition-card, .preposition-summary-card').forEach(card => {
    card.addEventListener('click', function () {
      const type = card.getAttribute('data-type');
      if (type && prepositionTypeContent[type]) {
        showPrepositionModal(type);
      }
    });
  });

  // Close modal on button click
  document.getElementById('closePrepositionModal').addEventListener('click', closePrepositionModal);
  // Close modal on outside click
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closePrepositionModal();
  });
  // Close modal on Escape key
  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('hidden') && e.key === 'Escape') closePrepositionModal();
  });
});

