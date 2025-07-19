// Detailed info for each sentence type
// This object contains the modal content for each sentence type (by purpose and by structure)
const sentenceTypeDetails = {
  declarative: {
    title: "Declarative Sentence",
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>A declarative sentence makes a statement, provides information, or expresses an idea. It ends with a period.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>The sun rises in the east.</li><li>She loves reading books.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Most sentences in English are declarative.</li><li>They state facts or opinions.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Forgetting to end with a period.</li><li>Using a question mark or exclamation mark incorrectly.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Fun Fact</h4><p class='text-gray-300'>Declarative sentences are the most common type of sentence in English writing and speech.</p></div>
    </div>`
  },
  interrogative: {
    title: "Interrogative Sentence",
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>An interrogative sentence asks a question and ends with a question mark.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Where are you going?</li><li>Did you finish your homework?</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Often begins with who, what, where, when, why, or how.</li><li>Used to gather information.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Forgetting the question mark at the end.</li><li>Using question words incorrectly (e.g., "Where you are going?").</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Interrogative sentences are essential for conversations, interviews, and surveys.</p></div>
    </div>`
  },
  imperative: {
    title: "Imperative Sentence",
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>An imperative sentence gives a command, request, or advice. The subject is often implied (you). It ends with a period or exclamation mark.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Please close the door.</li><li>Stop!</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Used for instructions, advice, or requests.</li><li>The subject (you) is usually not stated.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Making the command unclear or too vague.</li><li>Forgetting to use the correct punctuation.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Imperative sentences are common in instructions, recipes, and advice columns.</p></div>
    </div>`
  },
  exclamatory: {
    title: "Exclamatory Sentence",
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>An exclamatory sentence expresses strong emotion or surprise. It ends with an exclamation mark.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>What a beautiful day!</li><li>How amazing this is!</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Used to show strong feelings.</li><li>Always ends with an exclamation mark.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Overusing exclamation marks in writing.</li><li>Using exclamatory sentences for neutral statements.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Fun Fact</h4><p class='text-gray-300'>Exclamatory sentences are often used in advertising and expressive writing.</p></div>
    </div>`
  },
  simple: {
    title: "Simple Sentence",
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>A simple sentence contains a single independent clause and expresses a complete thought.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>She reads every morning.</li><li>The dog barked.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Contains only one idea.</li><li>Useful for clarity and directness.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Writing too many simple sentences in a row can make writing choppy.</li><li>Forgetting to include a subject or verb.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Simple sentences are great for emphasis and clarity, especially in instructions or headlines.</p></div>
    </div>`
  },
  compound: {
    title: "Compound Sentence",
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>A compound sentence contains two or more independent clauses joined by a coordinating conjunction (and, but, or, etc.).</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>She reads every morning, and he writes at night.</li><li>I wanted to go for a walk, but it was raining.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Each clause can stand alone as a sentence.</li><li>Shows equal importance of ideas.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Comma splices (joining clauses with just a comma).</li><li>Forgetting the conjunction.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Compound sentences are useful for connecting related ideas and adding variety to writing.</p></div>
    </div>`
  },
  complex: {
    title: "Complex Sentence",
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>A complex sentence contains one independent clause and at least one dependent (subordinate) clause.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Although she was tired, she finished her homework.</li><li>Because it was raining, we stayed inside.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Shows relationship between ideas.</li><li>Adds detail and depth.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Using a dependent clause as a sentence fragment.</li><li>Misplacing commas after introductory clauses.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Complex sentences are great for showing cause and effect, contrast, or conditions in writing.</p></div>
    </div>`
  },
  compoundcomplex: {
    title: "Compound-Complex Sentence",
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>A compound-complex sentence contains at least two independent clauses and at least one dependent clause.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>She finished her homework, and he cooked dinner because they had guests.</li><li>Although I like to go camping, I haven't had the time, and I haven't found anyone to go with.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Combines elements of compound and complex sentences.</li><li>Allows for nuanced and detailed expression.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Making sentences too long and confusing.</li><li>Incorrectly joining clauses without proper punctuation.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Fun Fact</h4><p class='text-gray-300'>Compound-complex sentences are often used in academic and professional writing for detailed explanations.</p></div>
    </div>`
  },
};

// Detailed info for each phrase type
// This object contains the modal content for each phrase type
const phraseTypeDetails = {
  'phrase-noun': {
    title: 'Noun Phrase',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>A noun phrase is a group of words that functions as a noun in a sentence. It usually consists of a noun and its modifiers.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>The quick brown fox</li><li>My favorite book</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Modifiers can come before or after the noun.</li><li>Acts as a subject, object, or complement.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Confusing noun phrases with clauses.</li><li>Omitting necessary modifiers.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Noun phrases are used everywhere in English, from simple to complex sentences.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Fun Fact</h4><p class='text-gray-300'>A noun phrase can be as short as one word or as long as a full sentence!</p></div>
    </div>`
  },
  'phrase-verb': {
    title: 'Verb Phrase',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>A verb phrase consists of a main verb and one or more helping (auxiliary) verbs.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>has been running</li><li>will be finished</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Auxiliary verbs help show tense, mood, or voice.</li><li>Verb phrases can be short or long.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Leaving out necessary auxiliaries.</li><li>Using the wrong verb form.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Verb phrases are essential for expressing actions, states, and conditions in English.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Fun Fact</h4><p class='text-gray-300'>Some verb phrases can be split by adverbs (e.g., "has always been running").</p></div>
    </div>`
  },
  'phrase-adjective': {
    title: 'Adjective Phrase',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>An adjective phrase is a group of words that describes a noun or pronoun. It usually includes an adjective and its modifiers.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>full of toys</li><li>eager to please</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Usually placed before or after the noun it modifies.</li><li>Adds detail and description.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Misplacing the phrase, causing confusion.</li><li>Using incomplete phrases.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Adjective phrases make writing more vivid and precise.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Fun Fact</h4><p class='text-gray-300'>Adjective phrases can be as simple as "very tall" or as complex as "full of interesting ideas".</p></div>
    </div>`
  },
  'phrase-adverb': {
    title: 'Adverb Phrase',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>An adverb phrase is a group of words that modifies a verb, adjective, or another adverb. It tells how, when, where, or to what extent.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>in a hurry</li><li>with great care</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Often answers questions like how, when, or where.</li><li>Can be moved around in the sentence for emphasis.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Misplacing the phrase, making the meaning unclear.</li><li>Using too many adverb phrases in one sentence.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Adverb phrases add detail to actions and descriptions.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Fun Fact</h4><p class='text-gray-300'>Adverb phrases can appear at the beginning, middle, or end of a sentence.</p></div>
    </div>`
  },
  'phrase-prepositional': {
    title: 'Prepositional Phrase',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>A prepositional phrase begins with a preposition and ends with a noun or pronoun. It shows the relationship between its object and another word in the sentence.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>under the table</li><li>with a smile</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Can act as adjectives or adverbs.</li><li>Usually answers where, when, or how.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Dangling prepositions.</li><li>Using unnecessary prepositional phrases.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Prepositional phrases are common in both spoken and written English for adding detail.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Fun Fact</h4><p class='text-gray-300'>A sentence can contain multiple prepositional phrases in a row!</p></div>
    </div>`
  },
};

// Detailed info for each clause type
// This object contains the modal content for each clause type
const clauseTypeDetails = {
  'clause-main': {
    title: 'Main (Independent) Clause',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>A main (independent) clause can stand alone as a complete sentence. It expresses a complete thought and has both a subject and a verb.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>She went to the market.</li><li>The dog barked loudly.</li><li>He studies every night.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Can be a sentence by itself.</li><li>Every sentence must have at least one main clause.</li><li>Main clauses can be joined by conjunctions to form compound sentences.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Confusing a phrase with a clause.</li><li>Using a dependent clause as a sentence fragment.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Main clauses are the foundation of all complete sentences in English. They are essential for clear communication.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Fun Fact</h4><p class='text-gray-300'>A simple sentence is just a main clause by itself!</p></div>
    </div>`
  },
  'clause-dependent': {
    title: 'Subordinate (Dependent) Clause',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>A subordinate (dependent) clause cannot stand alone as a sentence. It depends on a main clause to complete its meaning.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>because she was tired</li><li>if you want to come</li><li>although it was raining</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Usually begins with a subordinating conjunction (because, if, although, etc.).</li><li>Cannot be a sentence by itself.</li><li>Often provides background, reason, or condition for the main clause.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Using a dependent clause as a complete sentence (fragment).</li><li>Forgetting to connect it to a main clause.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Dependent clauses add detail and complexity to writing, making sentences more interesting and informative.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Fun Fact</h4><p class='text-gray-300'>A sentence can have several dependent clauses, each adding a different layer of meaning.</p></div>
    </div>`
  },
  'clause-noun': {
    title: 'Noun Clause',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>A noun clause is a dependent clause that acts as a noun in a sentence. It can be a subject, object, or complement.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>What she said was surprising. (subject)</li><li>I know that he is coming. (object)</li><li>The truth is that she left early. (complement)</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Often begins with words like that, what, who, whether, why.</li><li>Can be replaced by a pronoun (it, something, etc.).</li><li>Look for the clause acting as a person, place, thing, or idea in the sentence.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Confusing noun clauses with noun phrases.</li><li>Forgetting to use a noun clause as a complete part of the sentence.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Noun clauses are common in reported speech, questions, and statements of fact or opinion.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Fun Fact</h4><p class='text-gray-300'>Noun clauses can sometimes be introduced by "if" or "whether" in indirect questions.</p></div>
    </div>`
  },
  'clause-adjective': {
    title: 'Adjective Clause',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>An adjective clause is a dependent clause that describes a noun or pronoun. It usually begins with who, whom, whose, which, or that.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>The book that you gave me is interesting.</li><li>The girl who won the prize is my friend.</li><li>The house where I grew up is now a museum.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Placed immediately after the noun it modifies.</li><li>Provides more information about the noun.</li><li>Can be restrictive (essential) or non-restrictive (extra info, set off by commas).</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Misplacing the clause, causing confusion.</li><li>Using "that" for people instead of "who" or "whom".</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Adjective clauses are useful for combining sentences and adding detail to writing.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Fun Fact</h4><p class='text-gray-300'>Adjective clauses are also called relative clauses.</p></div>
    </div>`
  },
  'clause-adverb': {
    title: 'Adverb Clause',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><p class='text-gray-300'>An adverb clause is a dependent clause that modifies a verb, adjective, or adverb. It tells when, where, why, how, to what extent, or under what condition.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Examples</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>When the sun rises, we will leave. (when)</li><li>She sings as if she were a professional. (how)</li><li>If you study hard, you will succeed. (condition)</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Key Tips</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Usually begins with a subordinating conjunction (when, because, if, although, etc.).</li><li>Can be moved around in the sentence for emphasis.</li><li>Answers questions about the verb: when, where, why, how, to what extent, under what condition.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Common Mistakes</h4><ul class='list-disc list-inside text-gray-300 space-y-1'><li>Using a comma incorrectly when the clause comes after the main clause.</li><li>Forgetting to use a comma after an introductory adverb clause.</li></ul></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Usage in Context</h4><p class='text-gray-300'>Adverb clauses are common in both spoken and written English for showing time, reason, condition, and more.</p></div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'><h4 class='text-yellow-400 font-bold mb-2'>Fun Fact</h4><p class='text-gray-300'>Adverb clauses can appear at the beginning, middle, or end of a sentence.</p></div>
    </div>`
  },
};

// Detailed info for each tense type
const tenseTypeDetails = {
  'present-indefinite': {
    title: 'Present Indefinite (Simple Present)',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Structure</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Positive: Subject + V1 (base form/s/es)</li>
          <li>Negative: Subject + do/does + not + V1</li>
          <li>Question: Do/Does + Subject + V1?</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Formation Rules</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Add -s/-es to verb with he/she/it (third person singular)</li>
          <li>Use base form for I/you/we/they</li>
          <li>Special cases: -es after s, sh, ch, x, o (goes, watches)</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Examples</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>She walks to school. (Positive)</li>
          <li>They do not play tennis. (Negative)</li>
          <li>Does he study French? (Question)</li>
        </ul>
      </div>
    </div>`
  },
  'present-continuous': {
    title: 'Present Continuous',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Structure</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Positive: Subject + am/is/are + V1 + ing</li>
          <li>Negative: Subject + am/is/are + not + V1 + ing</li>
          <li>Question: Am/Is/Are + Subject + V1 + ing?</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Formation Rules</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Add -ing to base verb</li>
          <li>Double final consonant if CVC pattern (sit → sitting)</li>
          <li>Drop final -e before -ing (write → writing)</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Examples</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>I am reading a book. (Positive)</li>
          <li>She is not working now. (Negative)</li>
          <li>Are they playing football? (Question)</li>
        </ul>
      </div>
    </div>`
  },
  'present-perfect': {
    title: 'Present Perfect',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Structure</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Positive: Subject + have/has + V3 (past participle)</li>
          <li>Negative: Subject + have/has + not + V3</li>
          <li>Question: Have/Has + Subject + V3?</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Formation Rules</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Use 'has' with he/she/it</li>
          <li>Use 'have' with I/you/we/they</li>
          <li>Past participle forms vary (regular: -ed, irregular: unique forms)</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Examples</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>I have finished my work. (Positive)</li>
          <li>She has not seen the movie. (Negative)</li>
          <li>Have they arrived yet? (Question)</li>
        </ul>
      </div>
    </div>`
  },
  'present-perfect-continuous': {
    title: 'Present Perfect Continuous',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Structure</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Positive: Subject + have/has + been + V1 + ing</li>
          <li>Negative: Subject + have/has + not + been + V1 + ing</li>
          <li>Question: Have/Has + Subject + been + V1 + ing?</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Formation Rules</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Use 'has been' with he/she/it</li>
          <li>Use 'have been' with I/you/we/they</li>
          <li>Follow -ing form rules</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Examples</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>I have been working for hours. (Positive)</li>
          <li>She has not been sleeping well. (Negative)</li>
          <li>Have they been waiting long? (Question)</li>
        </ul>
      </div>
    </div>`
  },
  'past-indefinite': {
    title: 'Past Indefinite (Simple Past)',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Structure</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Positive: Subject + V2 (past form)</li>
          <li>Negative: Subject + did + not + V1</li>
          <li>Question: Did + Subject + V1?</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Formation Rules</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Regular verbs: add -ed</li>
          <li>Irregular verbs: unique past forms</li>
          <li>Same form for all subjects</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Examples</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>She walked to school. (Positive)</li>
          <li>They did not go to the party. (Negative)</li>
          <li>Did he finish his homework? (Question)</li>
        </ul>
      </div>
    </div>`
  },
  'past-continuous': {
    title: 'Past Continuous',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Structure</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Positive: Subject + was/were + V1 + ing</li>
          <li>Negative: Subject + was/were + not + V1 + ing</li>
          <li>Question: Was/Were + Subject + V1 + ing?</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Formation Rules</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Use 'was' with I/he/she/it</li>
          <li>Use 'were' with you/we/they</li>
          <li>Follow -ing form rules</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Examples</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>I was reading when you called. (Positive)</li>
          <li>They were not listening. (Negative)</li>
          <li>Was she working late? (Question)</li>
        </ul>
      </div>
    </div>`
  },
  'past-perfect': {
    title: 'Past Perfect',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Structure</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Positive: Subject + had + V3 (past participle)</li>
          <li>Negative: Subject + had + not + V3</li>
          <li>Question: Had + Subject + V3?</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Formation Rules</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Use 'had' for all subjects</li>
          <li>Past participle forms vary</li>
          <li>Often used with 'before' or 'by the time'</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Examples</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>She had finished before I arrived. (Positive)</li>
          <li>They had not left when I came. (Negative)</li>
          <li>Had you seen him before? (Question)</li>
        </ul>
      </div>
    </div>`
  },
  'past-perfect-continuous': {
    title: 'Past Perfect Continuous',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Structure</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Positive: Subject + had + been + V1 + ing</li>
          <li>Negative: Subject + had + not + been + V1 + ing</li>
          <li>Question: Had + Subject + been + V1 + ing?</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Formation Rules</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Use 'had been' for all subjects</li>
          <li>Follow -ing form rules</li>
          <li>Often used to show duration before another past action</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Examples</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>I had been working for hours when she called. (Positive)</li>
          <li>They had not been living there long. (Negative)</li>
          <li>Had you been waiting long? (Question)</li>
        </ul>
      </div>
    </div>`
  },
  'future-indefinite': {
    title: 'Future Indefinite (Simple Future)',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Structure</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Positive: Subject + will/shall + V1</li>
          <li>Negative: Subject + will/shall + not + V1</li>
          <li>Question: Will/Shall + Subject + V1?</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Formation Rules</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Use 'will' for all subjects (more common)</li>
          <li>'Shall' traditionally used with I/we (formal)</li>
          <li>Base form of verb for all subjects</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Examples</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>I will help you tomorrow. (Positive)</li>
          <li>They will not attend the meeting. (Negative)</li>
          <li>Will she come to the party? (Question)</li>
        </ul>
      </div>
    </div>`
  },
  'future-continuous': {
    title: 'Future Continuous',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Structure</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Positive: Subject + will/shall + be + V1 + ing</li>
          <li>Negative: Subject + will/shall + not + be + V1 + ing</li>
          <li>Question: Will/Shall + Subject + be + V1 + ing?</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Formation Rules</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Use 'will be' for all subjects</li>
          <li>Follow -ing form rules</li>
          <li>Often used for actions in progress at a future time</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Examples</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>This time tomorrow, I will be flying to Paris. (Positive)</li>
          <li>They will not be working late. (Negative)</li>
          <li>Will you be staying long? (Question)</li>
        </ul>
      </div>
    </div>`
  },
  'future-perfect': {
    title: 'Future Perfect',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Structure</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Positive: Subject + will/shall + have + V3</li>
          <li>Negative: Subject + will/shall + not + have + V3</li>
          <li>Question: Will/Shall + Subject + have + V3?</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Formation Rules</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Use 'will have' for all subjects</li>
          <li>Past participle forms vary</li>
          <li>Often used with 'by' or 'before' + future time</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Examples</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>By next week, I will have finished the project. (Positive)</li>
          <li>They will not have arrived by then. (Negative)</li>
          <li>Will you have completed it by Friday? (Question)</li>
        </ul>
      </div>
    </div>`
  },
  'future-perfect-continuous': {
    title: 'Future Perfect Continuous',
    content: `<div class='space-y-4'>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Structure</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Positive: Subject + will/shall + have + been + V1 + ing</li>
          <li>Negative: Subject + will/shall + not + have + been + V1 + ing</li>
          <li>Question: Will/Shall + Subject + have + been + V1 + ing?</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Formation Rules</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>Use 'will have been' for all subjects</li>
          <li>Follow -ing form rules</li>
          <li>Often used to emphasize duration up to a future point</li>
        </ul>
      </div>
      <div class='bg-[#1a2c42] p-4 rounded-lg'>
        <h4 class='text-yellow-400 font-bold mb-2'>Examples</h4>
        <ul class='list-disc list-inside text-gray-300 space-y-1'>
          <li>By June, I will have been working here for ten years. (Positive)</li>
          <li>They will not have been studying long enough. (Negative)</li>
          <li>Will you have been waiting long? (Question)</li>
        </ul>
      </div>
    </div>`
  },
};

// Merge all type details for easy modal lookup
const allTypeDetails = { ...sentenceTypeDetails, ...phraseTypeDetails, ...clauseTypeDetails, ...tenseTypeDetails };

// Function to open the modal and display detailed info for a given type
function openSentenceTypeModal(type) {
  const modal = document.getElementById("sentenceTypeModal");
  const modalTitle = document.getElementById("sentenceTypeModalTitle");
  const modalContent = document.getElementById("sentenceTypeModalContent");
  if (allTypeDetails[type]) {
    modalTitle.textContent = allTypeDetails[type].title;
    modalContent.innerHTML = allTypeDetails[type].content;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    // Focus the close button for accessibility
    setTimeout(() => {
      document.getElementById("closeSentenceTypeModal").focus();
    }, 100);
  }
}

// Function to close the modal and restore page scroll
function closeSentenceTypeModal() {
  const modal = document.getElementById("sentenceTypeModal");
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

// Set up event listeners after the DOM is loaded
// This includes click and keyboard accessibility for all interactive cards and modal controls
document.addEventListener("DOMContentLoaded", function () {
  // Attach event listeners to all sentence cards (Types of Sentences section)
  document.querySelectorAll(".sentence-card[data-type]").forEach((card) => {
    card.addEventListener("click", function (e) {
      if (e.target.closest(".more-info-btn")) return;
      openSentenceTypeModal(card.getAttribute("data-type"));
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        openSentenceTypeModal(card.getAttribute("data-type"));
      }
    });
  });

  // Attach event listeners to all phrase cards (Types of Phrases section)
  document.querySelectorAll(".phrase-card[data-type]").forEach((card) => {
    card.addEventListener("click", function (e) {
      // Prevent double event if button inside is clicked
      if (e.target.closest(".more-info-btn")) return;
      openSentenceTypeModal(card.getAttribute("data-type"));
    });
    // Keyboard accessibility: open modal on Enter/Space
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        openSentenceTypeModal(card.getAttribute("data-type"));
      }
    });
  });


  // Attach event listeners to summary cards (Types of Sentences and Types of Phrases quick reference)
  document.querySelectorAll(".summary-card[data-type]").forEach((card) => {
    card.addEventListener("click", function () {
      openSentenceTypeModal(card.getAttribute("data-type"));
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        openSentenceTypeModal(card.getAttribute("data-type"));
      }
    });
  });

  // Attach event listeners to all clause cards (Types of Clauses section)
  document.querySelectorAll(".clause-card[data-type]").forEach((card) => {
    card.addEventListener("click", function (e) {
      if (e.target.closest(".more-info-btn")) return;
      openSentenceTypeModal(card.getAttribute("data-type"));
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        openSentenceTypeModal(card.getAttribute("data-type"));
      }
    });
  });

  // Attach event listeners to all tense cards (Tenses section)
  document.querySelectorAll(".tense-card[data-type]").forEach((card) => {
    card.addEventListener("click", function (e) {
      if (e.target.closest(".more-info-btn")) return;
      openSentenceTypeModal(card.getAttribute("data-type"));
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        openSentenceTypeModal(card.getAttribute("data-type"));
      }
    });
  });

  // Attach event listeners to tense type cards
  document.querySelectorAll("[data-type^='present-'], [data-type^='past-'], [data-type^='future-']").forEach((card) => {
    card.addEventListener("click", function (e) {
      if (e.target.closest(".more-info-btn")) return;
      openSentenceTypeModal(card.getAttribute("data-type"));
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        openSentenceTypeModal(card.getAttribute("data-type"));
      }
    });
  });

  // Attach event listeners to tense summary cards
  document.querySelectorAll(".summary-card[data-type^='tense-']").forEach((card) => {
    card.addEventListener("click", function () {
      openSentenceTypeModal(card.getAttribute("data-type"));
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        openSentenceTypeModal(card.getAttribute("data-type"));
      }
    });
  });

  // Modal close button (X)
  document
    .getElementById("closeSentenceTypeModal")
    .addEventListener("click", closeSentenceTypeModal);

  // Modal background click closes modal
  document
    .getElementById("sentenceTypeModal")
    .addEventListener("click", function (e) {
      if (e.target === this) closeSentenceTypeModal();
    });

  // Escape key closes modal
  document.addEventListener("keydown", function (e) {
    const modal = document.getElementById("sentenceTypeModal");
    if (!modal.classList.contains("hidden") && e.key === "Escape")
      closeSentenceTypeModal();
  });

  // Tenses section: show/hide sub-cards logic
  const mainTenseCards = document.getElementById("main-tense-cards");
  const presentSubcards = document.getElementById("present-subcards");
  const pastSubcards = document.getElementById("past-subcards");
  const futureSubcards = document.getElementById("future-subcards");
  const subcardGroups = {
    present: presentSubcards,
    past: pastSubcards,
    future: futureSubcards,
  };
  // Hide all subcard groups
  function hideAllSubcards() {
    Object.values(subcardGroups).forEach((el) => el.classList.add("hidden"));
  }
  // Show main cards, hide all subcards
  function showMainTenseCards() {
    mainTenseCards.classList.remove("hidden");
    hideAllSubcards();
  }
  // Show subcards for a tense
  function showSubcardsForTense(tense) {
    mainTenseCards.classList.add("hidden");
    hideAllSubcards();
    if (subcardGroups[tense]) subcardGroups[tense].classList.remove("hidden");
  }
  // Main tense card click/keyboard
  mainTenseCards.querySelectorAll(".tense-card[data-tense]").forEach((card) => {
    card.addEventListener("click", function () {
      showSubcardsForTense(card.getAttribute("data-tense"));
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        showSubcardsForTense(card.getAttribute("data-tense"));
      }
    });
  });
  // Back buttons in subcards
  document.querySelectorAll("#present-subcards #back-to-main-tense, #past-subcards #back-to-main-tense, #future-subcards #back-to-main-tense").forEach((btn) => {
    btn.addEventListener("click", showMainTenseCards);
    btn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        showMainTenseCards();
      }
    });
  });

  // Sticky back button visibility logic for mobile
  function setupStickyBackButtonVisibility(subcardId, gridId) {
    const subcard = document.getElementById(subcardId);
    const grid = document.getElementById(gridId);
    if (!subcard || !grid) return;
    const backBtn = subcard.querySelector('#back-to-main-tense');
    if (!backBtn) return;
    // Only run on mobile screens
    function isMobile() {
      return window.innerWidth < 768;
    }
    // Intersection Observer to detect grid visibility
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (isMobile()) {
            if (entry.isIntersecting) {
              backBtn.classList.remove('invisible');
            } else {
              backBtn.classList.add('invisible');
            }
          } else {
            backBtn.classList.remove('invisible');
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    observer.observe(grid);
    // Also handle resize
    window.addEventListener('resize', () => {
      if (!isMobile()) {
        backBtn.classList.remove('invisible');
      } else {
        // Re-check intersection
        const rect = grid.getBoundingClientRect();
        const inView = rect.bottom > 0 && rect.top < window.innerHeight;
        if (inView) {
          backBtn.classList.remove('invisible');
        } else {
          backBtn.classList.add('invisible');
        }
      }
    });
  }
  setupStickyBackButtonVisibility('present-subcards', 'present-subcard-grid');
  setupStickyBackButtonVisibility('past-subcards', 'past-subcard-grid');
  setupStickyBackButtonVisibility('future-subcards', 'future-subcard-grid');

  

  // --- MODAL FUNCTIONALITY FOR ADJECTIVE & ADVERB MORE INSTRUCTIONS ---
  const adjectiveInstructions = [
    "Don't use adjectives to describe actions (verbs).<br><span class=\"text-yellow-400\">Wrong: She sings <b>beautiful</b>. <br>Right: She sings <b>beautifully</b>.</span>",
    "After sense verbs (look, feel, smell, taste, sound), use adjectives, not adverbs.<br><span class=\"text-yellow-400\">Example: The flower smells <b>sweet</b>. (not sweetly)</span>",
    "Use <b>very</b> before adjectives to make them stronger.<br><span class=\"text-yellow-400\">Example: The water is <b>very cold</b>.</span>",
    "Use <b>too</b> before adjectives to show something is more than needed.<br><span class=\"text-yellow-400\">Example: The box is <b>too heavy</b> to lift.</span>",
    "Use adjectives with numbers to describe how many.<br><span class=\"text-yellow-400\">Example: <b>Three</b> little pigs.</span>",
    "Use comparative (<b>-er</b> or <b>more</b>) and superlative (<b>-est</b> or <b>most</b>) forms to compare.<br><span class=\"text-yellow-400\">Example: big, <b>bigger</b>, <b>biggest</b>; beautiful, <b>more beautiful</b>, <b>most beautiful</b>.</span>",
    "Don't use double comparatives or superlatives.<br><span class=\"text-yellow-400\">Wrong: more better, most fastest.<br>Right: better, fastest.</span>"
  ];
  const adverbInstructions = [
    "Don't use adverbs to describe nouns.<br><span class=\"text-yellow-400\">Wrong: She is a <b>quickly</b> runner. <br>Right: She is a <b>quick</b> runner.</span>",
    "Use adverbs to describe adjectives or other adverbs.<br><span class=\"text-yellow-400\">Example: The movie was <b>very</b> funny. She ran <b>very</b> fast.</span>",
    "Use adverbs of frequency (always, often, never, sometimes) before the main verb.<br><span class=\"text-yellow-400\">Example: She <b>always</b> smiles. He <b>never</b> eats broccoli.</span>",
    "Use <b>too</b> and <b>very</b> before adverbs to show how much.<br><span class=\"text-yellow-400\">Example: He runs <b>very quickly</b>. She speaks <b>too softly</b>.</span>",
    "Avoid double negatives with adverbs.<br><span class=\"text-yellow-400\">Wrong: He doesn't know nothing. <br>Right: He doesn't know anything.</span>",
    "Adverbs can go at the beginning, middle, or end of a sentence for emphasis or style.<br><span class=\"text-yellow-400\">Example: <b>Quickly</b>, he ran home. He <b>quickly</b> ran home. He ran home <b>quickly</b>.</span>",
    "Use adverbs with negatives to make sentences clearer.<br><span class=\"text-yellow-400\">Example: She <b>never</b> eats broccoli. He <b>doesn't usually</b> play outside.</span>",
    "Use adverbs for emphasis.<br><span class=\"text-yellow-400\">Example: She <b>really</b> likes ice cream. He <b>absolutely</b> loves soccer.</span>"
  ];

  function openInstructionsModal(type) {
    const modal = document.getElementById('instructionsModal');
    const title = document.getElementById('instructionsModalTitle');
    const list = document.getElementById('instructionsModalList');
    // Set content
    if (type === 'adjective') {
      title.textContent = 'More Adjective Instructions';
      list.innerHTML = adjectiveInstructions.map(item => `<li>${item}</li>`).join('');
    } else if (type === 'adverb') {
      title.textContent = 'More Adverb Instructions';
      list.innerHTML = adverbInstructions.map(item => `<li>${item}</li>`).join('');
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.getElementById('closeInstructionsModal').focus();
    }, 100);
  }

  function closeInstructionsModal() {
    const modal = document.getElementById('instructionsModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function setupInstructionsModal() {
    // Open modal buttons
    document.querySelectorAll('.adjective-modal-btn, .adverb-modal-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        openInstructionsModal(btn.getAttribute('data-modal'));
      });
    });
    // Close modal button
    document.getElementById('closeInstructionsModal').addEventListener('click', closeInstructionsModal);
    // Close on background click
    document.getElementById('instructionsModal').addEventListener('click', function(e) {
      if (e.target === this) closeInstructionsModal();
    });
    // Close on Escape
    document.addEventListener('keydown', function(e) {
      const modal = document.getElementById('instructionsModal');
      if (!modal.classList.contains('hidden') && e.key === 'Escape') closeInstructionsModal();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupInstructionsModal);
  } else {
    setupInstructionsModal();
  }

  // --- MODAL FUNCTIONALITY FOR NOUNS & PRONOUNS MORE INSTRUCTIONS ---
  const nounInstructions = [
    "Some nouns have irregular plurals. <br><span class=\"text-yellow-400\">Example: <b>child</b> → <b>children</b>, <b>mouse</b> → <b>mice</b></span>",
    "Collective nouns (like <b>team</b>, <b>family</b>) are usually singular. <br><span class=\"text-yellow-400\">Example: The <b>team is</b> winning.</span>",
    "Abstract nouns name ideas or feelings, not things you can touch. <br><span class=\"text-yellow-400\">Example: <b>happiness</b>, <b>bravery</b></span>",
    "Some nouns don't change in plural form. <br><span class=\"text-yellow-400\">Example: <b>sheep</b>, <b>deer</b></span>",
    "Use 'a' or 'an' for singular nouns, 'the' for specific things. <br><span class=\"text-yellow-400\">Example: <b>a cat</b>, <b>an apple</b>, <b>the sun</b></span>",
    // New rules below
    "Countable nouns can be counted (one apple, two apples). Uncountable nouns cannot (milk, rice). <br><span class=\"text-yellow-400\">Example: <b>many apples</b>, <b>some milk</b></span>",
    "Proper nouns are names of specific people or places and always start with a capital letter. <br><span class=\"text-yellow-400\">Example: <b>India</b>, <b>Harry Potter</b></span>",
    "Common nouns are general names for things. <br><span class=\"text-yellow-400\">Example: <b>city</b>, <b>book</b></span>",
    "Use 'the' for something specific, 'a/an' for something general. <br><span class=\"text-yellow-400\">Example: <b>The</b> dog in the yard is <b>a</b> puppy.</span>"
  ];

  const pronounInstructions = [
    "Don't use a pronoun if it's not clear who or what it refers to. <br><span class=\"text-yellow-400\">Example: <b>He</b> is late. (Who?)</span>",
    "Reflexive pronouns end in -self or -selves. <br><span class=\"text-yellow-400\">Example: <b>myself</b>, <b>themselves</b></span>",
    "Use possessive pronouns to show ownership. <br><span class=\"text-yellow-400\">Example: <b>my</b>, <b>your</b>, <b>his</b>, <b>her</b>, <b>our</b>, <b>their</b></span>",
    "'Who' is for people, 'which' is for things, 'that' can be for both. <br><span class=\"text-yellow-400\">Example: The boy <b>who</b> ran. The book <b>which</b> is new.</span>",
    "Use 'I' as the subject, 'me' as the object. <br><span class=\"text-yellow-400\">Example: <b>I</b> am here. Give it to <b>me</b>.</span>",
    // New rules below
    "Don't repeat the noun and pronoun together. <br><span class=\"text-yellow-400\">Wrong: <b>Tom he</b> is here. <br>Right: <b>Tom</b> is here. <b>He</b> is here.</span>",
    "Demonstrative pronouns point to things: <b>this</b>, <b>that</b>, <b>these</b>, <b>those</b>. <br><span class=\"text-yellow-400\">Example: <b>This</b> is my book. <b>Those</b> are my shoes.</span>",
    "Interrogative pronouns are used for questions: <b>who</b>, <b>what</b>, <b>which</b>, <b>whom</b>. <br><span class=\"text-yellow-400\">Example: <b>Who</b> is your friend? <b>Which</b> is your bag?</span>",
    "Avoid double subjects: don't use a noun and its pronoun together. <br><span class=\"text-yellow-400\">Wrong: <b>My mom she</b> is nice. <br>Right: <b>My mom</b> is nice. <b>She</b> is nice.</span>"
  ];

  function openInstructionsModal(type) {
    const modal = document.getElementById('instructionsModal');
    const title = document.getElementById('instructionsModalTitle');
    const list = document.getElementById('instructionsModalList');
    let instructions = [];
    let modalTitle = '';
    if (type === 'adjective') {
      instructions = adjectiveInstructions;
      modalTitle = 'More About Adjectives';
    } else if (type === 'adverb') {
      instructions = adverbInstructions;
      modalTitle = 'More About Adverbs';
    } else if (type === 'noun') {
      instructions = nounInstructions;
      modalTitle = 'More About Nouns';
    } else if (type === 'pronoun') {
      instructions = pronounInstructions;
      modalTitle = 'More About Pronouns';
    }
    title.textContent = modalTitle;
    list.innerHTML = '';
    instructions.forEach(item => {
      const li = document.createElement('li');
      li.className = 'text-gray-300';
      li.innerHTML = item;
      list.appendChild(li);
    });
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);
  }

  function setupNounPronounModal() {
    document.querySelectorAll('.noun-modal-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        openInstructionsModal('noun');
      });
    });
    document.querySelectorAll('.pronoun-modal-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        openInstructionsModal('pronoun');
      });
    });
  }

  // Ensure this runs after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupNounPronounModal);
  } else {
    setupNounPronounModal();
  }

  // ... existing code ...
  function setEqualHeightNounPronounCards() {
    const row = document.querySelector('.nouns-pronouns-row');
    if (!row) return;
    const cards = row.querySelectorAll('.instruction-card');
    // Reset minHeight first
    cards.forEach(card => card.style.minHeight = '');
    if (window.innerWidth >= 768 && cards.length === 2) {
      const h1 = cards[0].offsetHeight;
      const h2 = cards[1].offsetHeight;
      const maxH = Math.max(h1, h2);
      cards[0].style.minHeight = maxH + 'px';
      cards[1].style.minHeight = maxH + 'px';
    }
  }
  window.addEventListener('load', setEqualHeightNounPronounCards);
  window.addEventListener('resize', setEqualHeightNounPronounCards);
  // ... existing code ...

  // --- MODAL FUNCTIONALITY FOR FIGURES OF SPEECH CARDS ---
  const figuresDetails = {
    simile: {
      title: 'Simile',
      content: `<p>A simile compares two different things using <b>like</b> or <b>as</b> to make descriptions more vivid.</p>
        <ul class='list-disc ml-6 mb-2'><li>Similes help readers picture things in their minds.</li><li>They are common in poems and stories.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>Her cheeks are <b>like</b> roses.</li><li>He is as fast as a cheetah.</li></ul>`
    },
    metaphor: {
      title: 'Metaphor',
      content: `<p>A metaphor says one thing <b>is</b> another thing, not just like it. It makes a direct comparison.</p>
        <ul class='list-disc ml-6 mb-2'><li>Metaphors make writing more powerful and imaginative.</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>The world is a stage.</li><li>He has a heart of stone.</li></ul>`
    },
    personification: {
      title: 'Personification',
      content: `<p>Personification gives human qualities to animals, objects, or ideas.</p>
        <ul class='list-disc ml-6 mb-2'><li>Makes non-human things seem alive or active.</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>The flowers <b>danced</b> in the wind.</li><li>The clock <b>yelled</b> at me to wake up.</li></ul>`
    },
    hyperbole: {
      title: 'Hyperbole',
      content: `<p>Hyperbole is an <b>exaggeration</b> used to make a point or show strong feeling.</p>
        <ul class='list-disc ml-6 mb-2'><li>Not meant to be taken literally.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>I've told you a million times!</li><li>This bag weighs a ton.</li></ul>`
    },
    alliteration: {
      title: 'Alliteration',
      content: `<p>Alliteration is when several words in a row start with the same sound or letter.</p>
        <ul class='list-disc ml-6 mb-2'><li>Makes phrases catchy and fun to say.</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>Silly snakes slither silently.</li><li>Big brown bears bought blueberries.</li></ul>`
    },
    onomatopoeia: {
      title: 'Onomatopoeia',
      content: `<p>Onomatopoeia is a word that sounds like the noise it describes.</p>
        <ul class='list-disc ml-6 mb-2'><li>Makes writing more lively and realistic.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>The bacon <b>sizzled</b> in the pan.</li><li>The car <b>zoomed</b> by.</li></ul>`
    },
    idiom: {
      title: 'Idiom',
      content: `<p>An idiom is a phrase whose meaning is different from the literal meaning of its words.</p>
        <ul class='list-disc ml-6 mb-2'><li>Idioms are common in everyday speech.</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>Let the cat out of the bag. (Reveal a secret)</li><li>Hit the books. (Study hard)</li></ul>`
    },
    oxymoron: {
      title: 'Oxymoron',
      content: `<p>An oxymoron puts two opposite or contradictory words together.</p>
        <ul class='list-disc ml-6 mb-2'><li>Used to create a special effect or make you think.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>Bittersweet</li><li>Living dead</li><li>Seriously funny</li></ul>`
    }
  };

  function openFigureModal(figure) {
    const modal = document.getElementById('figureModal');
    const title = document.getElementById('figureModalTitle');
    const content = document.getElementById('figureModalContent');
    if (figuresDetails[figure]) {
      title.textContent = figuresDetails[figure].title;
      content.innerHTML = figuresDetails[figure].content;
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('show');
      }, 10);
    }
  }

  function closeFigureModal() {
    const modal = document.getElementById('figureModal');
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 200);
  }

  function setupFigureModal() {
    document.querySelectorAll('.figures-card').forEach(card => {
      card.addEventListener('click', function() {
        const figure = card.getAttribute('data-figure');
        openFigureModal(figure);
      });
    });
    document.getElementById('closeFigureModal').addEventListener('click', closeFigureModal);
    document.getElementById('figureModal').addEventListener('click', function(e) {
      if (e.target === this) closeFigureModal();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeFigureModal();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupFigureModal);
  } else {
    setupFigureModal();
  }

  // --- MODAL FUNCTIONALITY FOR ORDER OF WORDS CARDS ---
  const orderDetails = {
    svo: {
      title: 'Subject-Verb-Object',
      content: `<p>The most common word order in English is <b>Subject-Verb-Object (SVO)</b>. This means you usually start a sentence with the person or thing doing the action (subject), then the action itself (verb), and finally the person or thing receiving the action (object).</p>
        <ul class='list-disc ml-6 mb-2'><li><b>Subject</b>: Who or what the sentence is about.</li><li><b>Verb</b>: The action or state.</li><li><b>Object</b>: Who or what receives the action.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>She (S) eats (V) an apple (O).</li><li>Tom (S) likes (V) pizza (O).</li><li>We (S) play (V) football (O).</li></ul>
        <div class='text-pink-400 mt-2'>Tip: Most English sentences follow this order, especially in statements.</div>`
    },
    'adj-noun': {
      title: 'Adjective Before Noun',
      content: `<p>In English, adjectives (describing words) usually come <b>before</b> the noun they describe. This helps make your meaning clear and your sentences sound natural.</p>
        <ul class='list-disc ml-6 mb-2'><li>Adjectives tell us more about a noun (color, size, shape, etc.).</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>The <b>red</b> ball.</li><li>A <b>big</b> house.</li><li>Three <b>happy</b> children.</li></ul>
        <div class='text-yellow-400 mt-2'>Tip: In some languages, adjectives come after the noun, but in English, they almost always come before.</div>`
    },
    adverb: {
      title: 'Adverb Placement',
      content: `<p>Adverbs describe how, when, or where something happens. In English, adverbs can move around, but they often come <b>after the verb</b> or at the end of the sentence.</p>
        <ul class='list-disc ml-6 mb-2'><li>Adverbs can describe verbs, adjectives, or other adverbs.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>She sings <b>beautifully</b>.</li><li>He quickly ran home.</li><li>They will arrive <b>soon</b>.</li></ul>
        <div class='text-pink-400 mt-2'>Tip: Some adverbs (like always, never, often) usually go before the main verb: "She <b>always</b> smiles."</div>`
    },
    question: {
      title: 'Question Word Order',
      content: `<p>In questions, the verb often comes <b>before</b> the subject. This is called <b>inversion</b>. It helps show that you are asking a question, not making a statement.</p>
        <ul class='list-disc ml-6 mb-2'><li>Start with a question word (if needed), then the verb, then the subject.</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li><b>Are</b> you coming?</li><li><b>Is</b> it raining?</li><li><b>What</b> did you eat?</li></ul>
        <div class='text-yellow-400 mt-2'>Tip: In yes/no questions, the verb comes first. In "wh-" questions, the question word comes first, then the verb.</div>`
    }
  };

  function openOrderModal(order) {
    const modal = document.getElementById('orderModal');
    const title = document.getElementById('orderModalTitle');
    const content = document.getElementById('orderModalContent');
    if (orderDetails[order]) {
      title.textContent = orderDetails[order].title;
      content.innerHTML = orderDetails[order].content;
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('show');
      }, 10);
    }
  }

  function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 200);
  }

  function setupOrderModal() {
    document.querySelectorAll('.order-card').forEach(card => {
      card.addEventListener('click', function() {
        const order = card.getAttribute('data-order');
        openOrderModal(order);
      });
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          openOrderModal(card.getAttribute('data-order'));
        }
      });
    });
    document.querySelectorAll('.summary-card[data-order]').forEach(card => {
      card.addEventListener('click', function() {
        openOrderModal(card.getAttribute('data-order'));
      });
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          openOrderModal(card.getAttribute('data-order'));
        }
      });
    });
    document.getElementById('closeOrderModal').addEventListener('click', closeOrderModal);
    document.getElementById('orderModal').addEventListener('click', function(e) {
      if (e.target === this) closeOrderModal();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeOrderModal();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupOrderModal);
  } else {
    setupOrderModal();
  }

  // --- MODAL FUNCTIONALITY FOR SPELLING RULES CARDS ---
  const spellingDetails = {
    ie: {
      title: 'I before E',
      content: `<p>The rule is: <b>I before E except after C</b> (when the sound is 'ee'). This means that in most words, "i" comes before "e". But if the letters come after "c", then "e" comes first.</p>
        <ul class='list-disc ml-6 mb-2'><li>This rule only works when the sound is "ee" (like in "believe").</li><li>There are exceptions, so always check a dictionary if unsure.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>believe</li><li>piece</li><li>chief</li><li>but: receive, ceiling</li></ul>
        <div class='text-pink-400 mt-2'>Tip: Words like "science" and "weird" are exceptions!</div>`
    },
    'drop-e': {
      title: 'Drop the E',
      content: `<p>When a word ends with a silent "e", drop the "e" before adding a suffix that starts with a vowel (like -ing, -ed, -er, -est).</p>
        <ul class='list-disc ml-6 mb-2'><li>This helps the word flow and sound right.</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>make → making</li><li>use → using</li><li>hope → hoping</li></ul>
        <div class='text-yellow-400 mt-2'>Tip: If the suffix starts with a consonant, keep the "e": "hopeful".</div>`
    },
    'double-consonant': {
      title: 'Double the Final Consonant',
      content: `<p>Double the final consonant when adding a vowel suffix to a short word ending in a single consonant, single vowel, single consonant (CVC pattern), and the stress is on the last syllable.</p>
        <ul class='list-disc ml-6 mb-2'><li>This keeps the vowel sound short.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>run → running</li><li>big → bigger</li><li>stop → stopped</li></ul>
        <div class='text-pink-400 mt-2'>Tip: Do not double the consonant if the word ends in "w", "x", or "y" (e.g., "play → playing").</div>`
    },
    'y-to-i': {
      title: 'Y to I',
      content: `<p>Change "y" to "i" before adding a suffix (unless the suffix starts with "i"). This makes the word easier to spell and say.</p>
        <ul class='list-disc ml-6 mb-2'><li>Do not change "y" if the suffix starts with "i" (like "-ing").</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>happy → happier</li><li>cry → cried</li><li>but: play → playing</li></ul>
        <div class='text-yellow-400 mt-2'>Tip: This rule helps keep spelling regular for many words ending in "y".</div>`
    }
  };

  function openSpellingModal(spelling) {
    const modal = document.getElementById('spellingModal');
    const title = document.getElementById('spellingModalTitle');
    const content = document.getElementById('spellingModalContent');
    if (spellingDetails[spelling]) {
      title.textContent = spellingDetails[spelling].title;
      content.innerHTML = spellingDetails[spelling].content;
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('show');
      }, 10);
    }
  }

  function closeSpellingModal() {
    const modal = document.getElementById('spellingModal');
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 200);
  }

  function setupSpellingModal() {
    document.querySelectorAll('.spelling-card').forEach(card => {
      card.addEventListener('click', function() {
        const spelling = card.getAttribute('data-spelling');
        openSpellingModal(spelling);
      });
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          openSpellingModal(card.getAttribute('data-spelling'));
        }
      });
    });
    document.querySelectorAll('.summary-card[data-spelling]').forEach(card => {
      card.addEventListener('click', function() {
        openSpellingModal(card.getAttribute('data-spelling'));
      });
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          openSpellingModal(card.getAttribute('data-spelling'));
        }
      });
    });
    document.getElementById('closeSpellingModal').addEventListener('click', closeSpellingModal);
    document.getElementById('spellingModal').addEventListener('click', function(e) {
      if (e.target === this) closeSpellingModal();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeSpellingModal();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSpellingModal);
  } else {
    setupSpellingModal();
  }

  // --- MODAL FUNCTIONALITY FOR PUNCTUATION CARDS ---
  const punctuationDetails = {
    fullstop: {
      title: 'Full Stop (.)',
      content: `<p>A full stop (period) is used at the end of a sentence to show a complete thought or statement. It tells the reader that the sentence is finished and a new idea may begin.</p>
        <ul class='list-disc ml-6 mb-2'><li>Marks the end of a declarative sentence (a statement).</li><li>Used after abbreviations (e.g., Dr., Mr., etc.).</li><li>Never used at the end of a question or exclamation.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>She likes ice cream.</li><li>He is a doctor.</li><li>My favorite color is blue.</li></ul>
        <div class='text-pink-400 mt-2'>Tip: Every complete sentence in English must end with a full stop, question mark, or exclamation mark.</div>`
    },
    comma: {
      title: 'Comma (,)',
      content: `<p>A comma is used to separate items in a list, to show a pause, or to separate clauses in a sentence. It helps make your writing clear and easy to read.</p>
        <ul class='list-disc ml-6 mb-2'><li>Separates items in a series: apples, oranges, and bananas.</li><li>Used after introductory words or phrases: After dinner, we went for a walk.</li><li>Separates clauses joined by conjunctions: She is smart, and she works hard.</li><li>Used to set off extra information: My brother, who is tall, plays basketball.</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>I bought apples, oranges, and bananas.</li><li>After dinner, we went for a walk.</li><li>Yes, I understand.</li></ul>
        <div class='text-yellow-400 mt-2'>Tip: Don't use a comma to join two sentences without a conjunction (this is called a comma splice).</div>`
    },
    questionmark: {
      title: 'Question Mark (?)',
      content: `<p>A question mark is used at the end of a sentence to show that it is a question. It tells the reader to expect an answer.</p>
        <ul class='list-disc ml-6 mb-2'><li>Used for direct questions: What is your name?</li><li>Not used for indirect questions: She asked what my name was.</li><li>Only one question mark is needed at the end of a question.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>What is your name?</li><li>Are you coming?</li><li>Did you finish your homework?</li></ul>
        <div class='text-pink-400 mt-2'>Tip: In polite requests, a period is often used instead of a question mark. (e.g., Could you please pass the salt.)</div>`
    },
    exclamation: {
      title: 'Exclamation Mark (!)',
      content: `<p>An exclamation mark is used to show strong feeling, surprise, or excitement. It makes your writing more expressive.</p>
        <ul class='list-disc ml-6 mb-2'><li>Used after interjections: Wow! Oh no!</li><li>Used after exclamatory sentences: What a beautiful day!</li><li>Don't overuse exclamation marks; one is usually enough.</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>Wow! That's amazing!</li><li>Stop!</li><li>Congratulations!</li></ul>
        <div class='text-yellow-400 mt-2'>Tip: Too many exclamation marks can make your writing seem less serious.</div>`
    }
  };

  function openPunctuationModal(punctuation) {
    const modal = document.getElementById('punctuationModal');
    const title = document.getElementById('punctuationModalTitle');
    const content = document.getElementById('punctuationModalContent');
    if (punctuationDetails[punctuation]) {
      title.textContent = punctuationDetails[punctuation].title;
      content.innerHTML = punctuationDetails[punctuation].content;
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('show');
      }, 10);
    }
  }

  function closePunctuationModal() {
    const modal = document.getElementById('punctuationModal');
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 200);
  }

  function setupPunctuationModal() {
    document.querySelectorAll('.punctuation-card').forEach(card => {
      card.addEventListener('click', function() {
        const punctuation = card.getAttribute('data-punctuation');
        openPunctuationModal(punctuation);
      });
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          openPunctuationModal(card.getAttribute('data-punctuation'));
        }
      });
    });
    document.querySelectorAll('.summary-card[data-punctuation]').forEach(card => {
      card.addEventListener('click', function() {
        openPunctuationModal(card.getAttribute('data-punctuation'));
      });
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          openPunctuationModal(card.getAttribute('data-punctuation'));
        }
      });
    });
    document.getElementById('closePunctuationModal').addEventListener('click', closePunctuationModal);
    document.getElementById('punctuationModal').addEventListener('click', function(e) {
      if (e.target === this) closePunctuationModal();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closePunctuationModal();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupPunctuationModal);
  } else {
    setupPunctuationModal();
  }

  // --- MODAL FUNCTIONALITY FOR CONJUNCTION CARDS ---
  const conjunctionDetails = {
    coordinating: {
      title: 'Coordinating Conjunctions',
      content: `<p>Coordinating conjunctions join words, phrases, or independent clauses of equal importance. The seven main ones are: <b>for, and, nor, but, or, yet, so</b> (FANBOYS).</p>
        <ul class='list-disc ml-6 mb-2'><li>Use a comma before the conjunction when joining two independent clauses.</li><li>Do not use a comma when joining single words or short phrases.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>I wanted to go, but it was raining.</li><li>She likes apples and oranges.</li></ul>
        <div class='text-pink-400 mt-2'>Tip: FANBOYS is a helpful way to remember all seven coordinating conjunctions.</div>`
    },
    subordinating: {
      title: 'Subordinating Conjunctions',
      content: `<p>Subordinating conjunctions join an independent clause with a dependent clause. Common ones include: <b>because, although, if, when, since, after, before, unless, while</b>.</p>
        <ul class='list-disc ml-6 mb-2'><li>They often begin the dependent clause.</li><li>If the dependent clause comes first, use a comma after it.</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>She went home because she was tired.</li><li>Although it was late, he kept working.</li></ul>
        <div class='text-yellow-400 mt-2'>Tip: Subordinating conjunctions show relationships like cause, time, condition, and contrast.</div>`
    },
    correlative: {
      title: 'Correlative Conjunctions',
      content: `<p>Correlative conjunctions are used in pairs to join equal elements. Common pairs: <b>either...or, neither...nor, both...and, not only...but also</b>.</p>
        <ul class='list-disc ml-6 mb-2'><li>Make sure both parts of the pair are used in the sentence.</li><li>Keep the sentence balanced for clarity.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>Either you start now or you will be late.</li><li>Both the teacher and the students were happy.</li></ul>
        <div class='text-pink-400 mt-2'>Tip: Correlative conjunctions must always be used in pairs for the sentence to make sense.</div>`
    },
    'conjunctive-adverb': {
      title: 'Conjunctive Adverbs',
      content: `<p>Conjunctive adverbs connect independent clauses and show relationships such as contrast, cause, or sequence. Common ones: <b>however, therefore, moreover, consequently, meanwhile</b>.</p>
        <ul class='list-disc ml-6 mb-2'><li>Usually preceded by a semicolon and followed by a comma when joining two sentences.</li><li>Can also be used at the beginning, middle, or end of a sentence for emphasis.</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>I was tired; however, I finished my work.</li><li>He studied hard; therefore, he passed the test.</li></ul>
        <div class='text-yellow-400 mt-2'>Tip: Don't confuse conjunctive adverbs with coordinating conjunctions; they work differently in sentences.</div>`
    }
  };

  function openConjunctionModal(conjunction) {
    const modal = document.getElementById('conjunctionModal');
    const title = document.getElementById('conjunctionModalTitle');
    const content = document.getElementById('conjunctionModalContent');
    if (conjunctionDetails[conjunction]) {
      title.textContent = conjunctionDetails[conjunction].title;
      content.innerHTML = conjunctionDetails[conjunction].content;
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('show');
      }, 10);
    }
  }

  function closeConjunctionModal() {
    const modal = document.getElementById('conjunctionModal');
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 200);
  }

  function setupConjunctionModal() {
    document.querySelectorAll('.conjunction-card').forEach(card => {
      card.addEventListener('click', function() {
        const conjunction = card.getAttribute('data-conjunction');
        openConjunctionModal(conjunction);
      });
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          openConjunctionModal(card.getAttribute('data-conjunction'));
        }
      });
    });
    document.querySelectorAll('.summary-card[data-conjunction]').forEach(card => {
      card.addEventListener('click', function() {
        openConjunctionModal(card.getAttribute('data-conjunction'));
      });
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          openConjunctionModal(card.getAttribute('data-conjunction'));
        }
      });
    });
    document.getElementById('closeConjunctionModal').addEventListener('click', closeConjunctionModal);
    document.getElementById('conjunctionModal').addEventListener('click', function(e) {
      if (e.target === this) closeConjunctionModal();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeConjunctionModal();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupConjunctionModal);
  } else {
    setupConjunctionModal();
  }

  // --- MODAL FUNCTIONALITY FOR IDIOM CARDS ---
  const idiomDetails = {
    'break-a-leg': {
      title: 'Break a leg',
      content: `<p><b>Break a leg</b> is an idiom that means "Good luck!" It is often used to wish someone success, especially before a performance or important event. It does <b>not</b> mean to actually break your leg!</p>
        <ul class='list-disc ml-6 mb-2'><li>Use it to encourage friends or classmates before exams, shows, or competitions.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>"You have a test? Break a leg!"</li><li>"Break a leg in your audition!"</li></ul>
        <div class='text-pink-400 mt-2'>Tip: This idiom is informal and friendly. Don't use it in very formal writing.</div>`
    },
    'piece-of-cake': {
      title: 'Piece of cake',
      content: `<p><b>Piece of cake</b> means something is very easy to do. It is used to describe tasks or activities that are simple for you.</p>
        <ul class='list-disc ml-6 mb-2'><li>Use it to talk about easy tests, jobs, or challenges.</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>"The test was a piece of cake."</li><li>"Don't worry, this homework is a piece of cake."</li></ul>
        <div class='text-yellow-400 mt-2'>Tip: Don't use this idiom for things that are actually about cake!</div>`
    },
    'under-the-weather': {
      title: 'Under the weather',
      content: `<p><b>Under the weather</b> means feeling sick or unwell. It is a gentle way to say you are not feeling your best.</p>
        <ul class='list-disc ml-6 mb-2'><li>Use it to explain why you can't go to school or work.</li></ul>
        <div class='text-yellow-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>"I'm feeling under the weather today."</li><li>"He was under the weather, so he stayed home."</li></ul>
        <div class='text-pink-400 mt-2'>Tip: This idiom is common in conversation, but not in formal writing.</div>`
    },
    'hit-the-books': {
      title: 'Hit the books',
      content: `<p><b>Hit the books</b> means to study hard. It does not mean to actually hit your books! Use it when you need to prepare for exams or learn something new.</p>
        <ul class='list-disc ml-6 mb-2'><li>Use it to talk about studying for tests or doing homework.</li></ul>
        <div class='text-pink-400 mb-2'>Examples:</div>
        <ul class='list-disc ml-6'><li>"I need to hit the books for my exam."</li><li>"She hit the books all weekend."</li></ul>
        <div class='text-yellow-400 mt-2'>Tip: This idiom is informal and used mostly by students.</div>`
    }
  };

  function openIdiomModal(idiom) {
    const modal = document.getElementById('idiomModal');
    const title = document.getElementById('idiomModalTitle');
    const content = document.getElementById('idiomModalContent');
    if (idiomDetails[idiom]) {
      title.textContent = idiomDetails[idiom].title;
      content.innerHTML = idiomDetails[idiom].content;
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('show');
      }, 10);
    }
  }

  function closeIdiomModal() {
    const modal = document.getElementById('idiomModal');
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 200);
  }

  function setupIdiomModal() {
    document.querySelectorAll('.idiom-card').forEach(card => {
      card.addEventListener('click', function() {
        const idiom = card.getAttribute('data-idiom');
        openIdiomModal(idiom);
      });
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          openIdiomModal(card.getAttribute('data-idiom'));
        }
      });
    });
    document.querySelectorAll('.summary-card[data-idiom]').forEach(card => {
      card.addEventListener('click', function() {
        openIdiomModal(card.getAttribute('data-idiom'));
      });
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          openIdiomModal(card.getAttribute('data-idiom'));
        }
      });
    });
    document.getElementById('closeIdiomModal').addEventListener('click', closeIdiomModal);
    document.getElementById('idiomModal').addEventListener('click', function(e) {
      if (e.target === this) closeIdiomModal();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeIdiomModal();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupIdiomModal);
  } else {
    setupIdiomModal();
  }
});

// Show only first 10 idioms, reveal all on 'See More' click, and allow toggling back to 'See Less'
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const idiomsList = document.getElementById("idioms-list");
    const seeMoreBtn = document.getElementById("see-more-idioms");
    if (!idiomsList || !seeMoreBtn) return;

    const idiomItems = Array.from(idiomsList.querySelectorAll("li"));
    const initialCount = 10;
    let expanded = false;

    function showFirstTen() {
      idiomItems.forEach((li, idx) => {
        li.style.display = idx < initialCount ? "" : "none";
      });
      seeMoreBtn.textContent = "See More";
      expanded = false;
    }

    function showAll() {
      idiomItems.forEach(li => (li.style.display = ""));
      seeMoreBtn.textContent = "See Less";
      expanded = true;
    }

    // Initial state: show first 10
    showFirstTen();

    seeMoreBtn.addEventListener("click", function () {
      if (!expanded) {
        showAll();
      } else {
        showFirstTen();
      }
    });
  });
})();

// Idioms animation logic for See More/See Less
const button = document.getElementById('see-more-idioms');
const additionalIdioms = document.querySelectorAll('.additional-idiom');
let isExpanded = false;

if (button && additionalIdioms.length > 0) {
    button.addEventListener('click', function() {
        // Add pulse animation to button
        button.classList.add('button-pulse');
        
        if (!isExpanded) {
            // Show all idioms with staggered animation (first to last)
            additionalIdioms.forEach((idiom, index) => {
                setTimeout(() => {
                    idiom.classList.add('show');
                }, index * 50); // Stagger the animation by 50ms for each item
            });
            
            button.textContent = 'See Less';
            button.classList.add('see-less-sticky');
            isExpanded = true;
        } else {
            // Hide additional idioms with reverse staggered animation (last to first)
            const total = additionalIdioms.length;
            additionalIdioms.forEach((idiom, i) => {
                const index = total - 1 - i;
                setTimeout(() => {
                    additionalIdioms[index].classList.remove('show');
                }, i * 20); // Faster reverse animation
            });
            
            setTimeout(() => {
                button.textContent = 'See More';
                button.classList.remove('see-less-sticky');
            }, additionalIdioms.length * 20 + 100); // Wait for all animations to complete
            
            isExpanded = false;
        }
        
        // Remove pulse animation after it completes
        setTimeout(() => {
            button.classList.remove('button-pulse');
        }, 300);
    });
}