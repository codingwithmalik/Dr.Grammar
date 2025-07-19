// Interjection Modal Functionality

document.addEventListener('DOMContentLoaded', function () {
  // Modal elements
  const modal = document.createElement('div');
  modal.id = 'interjectionModal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4';
  modal.innerHTML = `
    <div class="bg-[#243b55] rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h3 id="interjectionModalTitle" class="text-2xl font-bold text-yellow-400"></h3>
        <button id="closeInterjectionModal" class="text-gray-400 hover:text-white text-2xl">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div id="interjectionModalContent" class="text-gray-300 space-y-4"></div>
    </div>
  `;
  document.body.appendChild(modal);

  // Data for each interjection type
  const interjectionData = {
    joy: {
      title: 'Joy Interjections',
      content: `
        <b>Definition:</b> Express happiness or delight.<br>
        <b>Examples:</b> Hurray! Wow! Yippee!<br>
        <b>Sample:</b> Hurray! We won the match.<br>
        <p class="mt-2">Joy interjections are used when you want to show excitement, happiness, or pleasure. They are common in celebrations, good news, and moments of success. For example, you might say <span class="text-yellow-400 font-semibold">"Wow!"</span> when you see something impressive, or <span class="text-yellow-400 font-semibold">"Yippee!"</span> when you achieve something you've worked hard for. These words help convey your positive emotions to others and make your language more lively.</p>
      `
    },
    surprise: {
      title: 'Surprise Interjections',
      content: `
        <b>Definition:</b> Express astonishment or amazement.<br>
        <b>Examples:</b> Oh! What! Really!<br>
        <b>Sample:</b> Oh! You are here so early.<br>
        <p class="mt-2">Surprise interjections are used when something unexpected happens. They can show both positive and negative surprise. For example, <span class="text-yellow-400 font-semibold">"Oh!"</span> can be used when you meet someone unexpectedly, and <span class="text-yellow-400 font-semibold">"Really!"</span> when you hear surprising news. These interjections help express your genuine reaction and keep conversations engaging.</p>
      `
    },
    pain: {
      title: 'Pain Interjections',
      content: `
        <b>Definition:</b> Express pain or suffering.<br>
        <b>Examples:</b> Ouch! Alas! Ow!<br>
        <b>Sample:</b> Ouch! That was hot.<br>
        <p class="mt-2">Pain interjections are used to show discomfort, hurt, or sorrow. <span class="text-yellow-400 font-semibold">"Ouch!"</span> and <span class="text-yellow-400 font-semibold">"Ow!"</span> are common when you feel physical pain, while <span class="text-yellow-400 font-semibold">"Alas!"</span> is often used for sadness or regret, especially in stories or formal writing. Using these interjections helps others understand your feelings immediately.</p>
      `
    },
    greeting: {
      title: 'Greeting Interjections',
      content: `
        <b>Definition:</b> Used to greet or welcome someone.<br>
        <b>Examples:</b> Hello! Hi! Hey!<br>
        <b>Sample:</b> Hello! How are you?<br>
        <p class="mt-2">Greeting interjections are used at the beginning of conversations to acknowledge or welcome someone. <span class="text-yellow-400 font-semibold">"Hello!"</span>, <span class="text-yellow-400 font-semibold">"Hi!"</span>, and <span class="text-yellow-400 font-semibold">"Hey!"</span> are friendly and informal ways to start a chat. They help set a positive tone and make interactions more personal and warm.</p>
      `
    },
    approval: {
      title: 'Approval Interjections',
      content: `
        <b>Definition:</b> Express approval or agreement.<br>
        <b>Examples:</b> Bravo! Well done! Good!<br>
        <b>Sample:</b> Bravo! You did a great job.<br>
        <p class="mt-2">Approval interjections are used to praise or encourage someone. <span class="text-yellow-400 font-semibold">"Bravo!"</span> and <span class="text-yellow-400 font-semibold">"Well done!"</span> are often used after a performance or achievement. These words motivate others and show your support or admiration for their efforts.</p>
      `
    },
    attention: {
      title: 'Attention Interjections',
      content: `
        <b>Definition:</b> Call attention or warn.<br>
        <b>Examples:</b> Listen! Look! Beware!<br>
        <b>Sample:</b> Look! The bus is coming.<br>
        <p class="mt-2">Attention interjections are used to quickly get someone's focus or to warn them. <span class="text-yellow-400 font-semibold">"Listen!"</span> and <span class="text-yellow-400 font-semibold">"Look!"</span> are common when you want others to notice something important. <span class="text-yellow-400 font-semibold">"Beware!"</span> is used for warnings. These interjections are helpful in urgent or important situations.</p>
      `
    }
  };

  // Card click handler
  function handleCardClick(type) {
    const data = interjectionData[type];
    if (data) {
      document.getElementById('interjectionModalTitle').innerHTML = data.title;
      document.getElementById('interjectionModalContent').innerHTML = data.content;
      modal.classList.remove('hidden');
    }
  }

  // Attach click listeners to cards
  document.querySelectorAll('.interjection-card, .interjection-summary-card').forEach(card => {
    card.addEventListener('click', function () {
      const type = card.getAttribute('data-type');
      handleCardClick(type);
    });
  });

  // Close modal
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
  document.getElementById('closeInterjectionModal').addEventListener('click', function () {
    modal.classList.add('hidden');
  });
});
