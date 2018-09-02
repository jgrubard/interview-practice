const dictionary = [
  'a - Used when mentioning someone or something for the first time in a text or conversation',
  'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
  'be - Exist',
  'in - Expressing the situation of something that is or appears to be enclosed or surrounded by something else',
  'of - Expressing the relationship between a part and a whole',
  'that - Used to identify a specific person or thing observed or heard by the speaker',
  'the - Denoting one or more people or things already mentioned or assumed to be common knowledge',
  'to - Expressing motion in the direction of (a particular location)'
];

function hashMap(dictionary) {
  return dictionary.reduce((memo, sentence) => {
    let entry = sentence.split(' - ');
    memo[entry[0]] = entry[1];
    return memo;
  }, {});
}

function definitionOf(word, dictionary) {
  const map = hashMap(dictionary);
  return map[word];
}

// console.log(definitionOf('be', dictionary)); // 'Exist'
// console.log(definitionOf('that', dictionary)); // 'Used to identify a specific person or thing observed or heard by the speaker'
// console.log(definitionOf('to', dictionary)); // 'Expressing motion in the direction of (a particular location)'
// console.log(definitionOf('wizbing', dictionary)); // undefined