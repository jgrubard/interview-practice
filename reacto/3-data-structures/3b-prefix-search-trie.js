const util = require('util');

const book = {
  id: 1,
  text: `Once upon a time, there was a book with words. The book had not been catalogued, but would catch the eyes of onlookers nonetheless.`
};

const tries = {};

function buildTrie(text) {
  const trie = {};
  text = text.toLowerCase();
  for(let i = 0; i < text.length; i++) {
    let node = trie;
    let start = i;
    while(text[i] !== ' ' && text[i] !== ',' && text[i] !== '.') {
      let char = text[i];
      if(!node[char]) {
        node[char] = { indexes: [start] };
      } else {
        node[char].indexes.push(start);
      }
      node = node[char];
      i++;
    }
  }
  return trie;
}

// console.log(util.inspect(buildTrie(book.text), { depth: null }));

function findOrCreateTrie(book) {
  // console.log(tries)
  // console.log(book)

}

// console.log(findOrCreateTrie(book))

function findWordsStartingWith(book, word) {
  const trie = buildTrie(book.text);
  // console.log(trie);
  let node = trie;
  for(let i = 0; i < word.length; i++) {
    const char = word[i];
    node = node[char];
    if(!node) return [];
  }
  return node.indexes;
}

console.log(findWordsStartingWith(book, 'the')); // [ 18, 47, 97 ] though really should be [ 18, 47, 97, 123 ]
// console.log(findWordsStartingWith(book, 'cat')); // [ 69, 91 ]
