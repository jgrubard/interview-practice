const book = {
  id: 1,
  text: `Once upon a time, there was a book with words. The book had not been catalogued, but would catch the eyes of onlookers nonetheless.`
};


function findWordsStartingWith(book, word) {
  const text = book.text.toLowerCase();
  word = word.toLowerCase();
  result = [];
  for(let i = 0; i < text.length; i++) {
    const letter = text[i];
    if(letter === word[0]) {
      for(let j = 0; j < word.length; j++) {
        if(text[i + j] !== word[j]) break;
        if(j + 1 === word.length) result.push(i);
      }
    }
  }
  return result;
}

console.log(findWordsStartingWith(book, 'the')); // [ 18, 47, 97 ] though really should be [ 18, 47, 97, 123 ]
// console.log(findWordsStartingWith(book, 'cat')); // [ 69, 91 ]

/* const book = {
  id: 1,
  text: `Once upon a time, there was a book with words. The book had not been catalogued, but would catch the eyes of onlookers nonetheless.`
};


function findWordsStartingWith(book, word) {
  const text = book.text.toLowerCase();
  word = word.toLowerCase();
  result = [];
  for(let i = 0; i < text.length; i++) {
    const letter = text[i];
    if(letter === word[0]) {
      for(let j = 0; j < word.length; j++) {
        if(text[i + j] !== word[j]) break;
        if(j + 1 === word.length) result.push(i);
      }
    }
  }
  return result;
}

console.log(findWordsStartingWith(book, 'the')); // [ 18, 47, 97 ] though really should be [ 18, 47, 97, 123 ]
// console.log(findWordsStartingWith(book, 'cat')); // [ 69, 91 ] */


/* const book = {
  id: 1,
  text: `Once upon a time, there was a book with words. The book had not been catalogued, but would catch the eyes of onlookers nonetheless.`
};


function findWordsStartingWith(book, word) {
  const { text } = book;
  result = [];
  for(let i = 0; i < text.length; i++) {
    const letter = text[i].toLowerCase();
    if(letter === word[0]) {
      let tempWord = '';
      for(let j = 0; j < word.length; j++) {
        if(text[i + j].toLowerCase() !== word[j]) {
          break;
        }
        tempWord += text[i + j].toLowerCase();
      }
      console.log(i, tempWord, word)
      if(tempWord === word) {
        result.push(i);
      }
    }
  }
  return result;
}

console.log(findWordsStartingWith(book, 'the')); // [ 18, 47, 97 ] though really should be [ 18, 47, 97, 123 ]
// console.log(findWordsStartingWith(book, 'cat')); // [ 69, 91 ] */



/* const book = {
  id: 1,
  text: `Once upon a time, there was a book with words. The book had not been catalogued, but would catch the eyes of onlookers nonetheless.`
};


function findWordsStartingWith(book, word) {
  const { text } = book;
  result = [];
  for(let i = 0; i < text.length; i++) {
    const letter = text[i].toLowerCase();
    if(letter === word[0]) {
      console.log(text.slice(i, i + word.length).toLowerCase())
      if(text.slice(i, i + word.length).toLowerCase() === word) {
        result.push(i);
      }
    }
  }
  return result;
}

console.log(findWordsStartingWith(book, 'the')); // [ 18, 47, 97 ]
// console.log(findWordsStartingWith(book, 'cat')); // [ 69, 91 ] */