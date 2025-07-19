// Placeholder for future verb card interactivity
// Example: document.querySelectorAll('.verb-card').forEach(...)

// Verb card click functionality

document.addEventListener('DOMContentLoaded', function () {
  const verbCards = document.querySelectorAll('.verb-card');
  const modal = document.getElementById('verbModal');
  const modalTitle = document.getElementById('verbModalTitle');
  const modalContent = document.getElementById('verbModalContent');
  const closeBtn = document.getElementById('closeVerbModal');

  // Content for each verb type
  const verbDetails = {
    action: {
      title: 'Action Verb',
      content: `
        <p><span class="text-yellow-400 font-semibold">Action Verbs</span> express physical or mental actions performed by the subject.</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2"><li>run, jump, think, write, play</li><li>eat, read, sing, imagine, study</li></ul>
        <p class="mt-2"><b>Usage:</b> Action verbs can be transitive (take a direct object) or intransitive (do not take a direct object).<br>
        <span class='text-pink-400'>Transitive:</span> She <b>reads</b> a book.<br>
        <span class='text-pink-400'>Intransitive:</span> He <b>runs</b> every morning.</p>
        <p class="mt-2"><b>Tips:</b></p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>Most verbs in English are action verbs.</li>
          <li>They answer the question: What does the subject do?</li>
          <li>Can be used in all tenses (past, present, future).</li>
        </ul>
        <p class="mt-2">Example: <span class="italic text-yellow-400">He <b>writes</b> a letter.</span></p>`
    },
    linking: {
      title: 'Linking Verb',
      content: `
        <p><span class="text-yellow-400 font-semibold">Linking Verbs</span> connect the subject with a word (subject complement) that describes or identifies it, rather than showing action.</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2"><li>am, is, are, was, were</li><li>become, seem, appear, feel, look, sound, taste, remain</li></ul>
        <p class="mt-2"><b>Usage:</b> Linking verbs are followed by adjectives or nouns that describe or rename the subject.<br>
        <span class='text-pink-400'>Adjective:</span> She <b>is</b> happy.<br>
        <span class='text-pink-400'>Noun:</span> He <b>became</b> a doctor.</p>
        <p class="mt-2"><b>Tips:</b></p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>They do not show action.</li>
          <li>Common linking verb: <b>to be</b> (am, is, are, was, were, be, being, been).</li>
          <li>Test: If you can replace the verb with "equals" and the sentence still makes sense, it's likely a linking verb.</li>
        </ul>
        <p class="mt-2">Example: <span class="italic text-yellow-400">She <b>is</b> happy.</span></p>`
    },
    helping: {
      title: 'Helping Verb',
      content: `
        <p><span class="text-yellow-400 font-semibold">Helping Verbs</span> (auxiliary verbs) help the main verb express tense, mood, or voice.</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2"><li>am, is, are, was, were, be, being, been</li><li>have, has, had, do, does, did, will, shall, can, may, must</li></ul>
        <p class="mt-2"><b>Usage:</b> Helping verbs come before the main verb in a verb phrase.<br>
        <span class='text-pink-400'>Tense:</span> She <b>is running</b>.<br>
        <span class='text-pink-400'>Voice:</span> The cake <b>was eaten</b> by Tom.<br>
        <span class='text-pink-400'>Mood:</span> <b>Do</b> you like pizza?</p>
        <p class="mt-2"><b>Tips:</b></p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>There can be more than one helping verb in a verb phrase (She <b>has been working</b>).</li>
          <li>They are essential for forming questions and negatives.</li>
          <li>Modal verbs (can, may, must, etc.) are also considered helping verbs.</li>
        </ul>
        <p class="mt-2">Example: <span class="italic text-yellow-400">They <b>are playing</b> football.</span></p>`
    },
    modal: {
      title: 'Modal Verb',
      content: `
        <p><span class="text-yellow-400 font-semibold">Modal Verbs</span> modify the mood of the main verb to express ability, possibility, permission, necessity, or obligation.</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2"><li>can, could, may, might, must</li><li>shall, should, will, would</li></ul>
        <p class="mt-2"><b>Usage:</b> Modal verbs are always followed by the base form of the main verb (without "to").<br>
        <span class='text-pink-400'>Ability:</span> She <b>can swim</b>.<br>
        <span class='text-pink-400'>Possibility:</span> It <b>might rain</b>.<br>
        <span class='text-pink-400'>Permission:</span> <b>May</b> I come in?<br>
        <span class='text-pink-400'>Obligation:</span> You <b>must</b> finish your homework.</p>
        <p class="mt-2"><b>Tips:</b></p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>Modals do not change form for different subjects (He <b>can</b> go. They <b>can</b> go.).</li>
          <li>They do not take "-s", "-ing", or "-ed" endings.</li>
          <li>They are used to express attitudes, opinions, and degrees of certainty.</li>
        </ul>
        <p class="mt-2">Example: <span class="italic text-yellow-400">You <b>must</b> finish your homework.</span></p>`
    },
    transitive: {
      title: 'Transitive Verb',
      content: `
        <p><span class=\"text-yellow-400 font-semibold\">Transitive Verbs</span> are verbs that require a direct object to complete their meaning. The action passes from the subject to the object.</p>
        <ul class=\"list-disc list-inside text-gray-300 space-y-1 mb-2\"><li>eat (She eats an apple.)</li><li>write (He writes a letter.)</li><li>kick (They kicked the ball.)</li></ul>
        <p class=\"mt-2\"><b>Usage:</b> The verb must be followed by a noun or pronoun that receives the action.<br>
        <span class='text-pink-400'>Correct:</span> She <b>reads</b> a book.<br>
        <span class='text-pink-400'>Incorrect:</span> She <b>reads</b>. (incomplete)</p>
        <p class=\"mt-2\"><b>Tips:</b></p>
        <ul class=\"list-disc list-inside text-gray-300 space-y-1 mb-2\">
          <li>Ask "what?" or "whom?" after the verb to find the object.</li>
          <li>Many verbs can be both transitive and intransitive depending on usage.</li>
        </ul>
        <p class=\"mt-2\">Example: <span class=\"italic text-yellow-400\">The boy <b>reads</b> a book.</span></p>`
    },
    intransitive: {
      title: 'Intransitive Verb',
      content: `
        <p><span class=\"text-yellow-400 font-semibold\">Intransitive Verbs</span> do not require a direct object to complete their meaning. The action does not pass to an object.</p>
        <ul class=\"list-disc list-inside text-gray-300 space-y-1 mb-2\"><li>sleep (The baby sleeps.)</li><li>arrive (He arrived late.)</li><li>go (They go home.)</li></ul>
        <p class=\"mt-2\"><b>Usage:</b> The verb stands alone or is followed by an adverb or prepositional phrase, not a direct object.<br>
        <span class='text-pink-400'>Correct:</span> The sun <b>rises</b> in the east.<br>
        <span class='text-pink-400'>Incorrect:</span> The sun <b>rises</b> the sky. (incorrect usage)</p>
        <p class=\"mt-2\"><b>Tips:</b></p>
        <ul class=\"list-disc list-inside text-gray-300 space-y-1 mb-2\">
          <li>Ask "what?" or "whom?" after the verb. If there is no answer, it's intransitive.</li>
          <li>Some verbs can be both transitive and intransitive depending on context.</li>
        </ul>
        <p class=\"mt-2\">Example: <span class=\"italic text-yellow-400\">The sun <b>rises</b> in the east.</span></p>`
    }
  };

  verbCards.forEach(card => {
    card.addEventListener('click', function () {
      const type = card.getAttribute('data-type');
      if (verbDetails[type]) {
        modalTitle.innerHTML = verbDetails[type].title;
        modalContent.innerHTML = verbDetails[type].content;
        modal.classList.remove('hidden');
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.classList.add('hidden');
    });
  }

  // Optional: Close modal on outside click
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});
