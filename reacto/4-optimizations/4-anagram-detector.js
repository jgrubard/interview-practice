const words = ['cat', 'act', 'ignore', 'a phrase', 'tape', 'pate', 'e hpsara'];

function listAnagrams(words) {
  const map = {};
  words.forEach(word => {
    const sortedWord = word.split('').sort().join('');
    if(!map[sortedWord]) {
      map[sortedWord] = [word];
    } else {
      map[sortedWord].push(word);
    }
  });
  const anagrams = Object.keys(map);
  return anagrams.reduce((result, sortedWord) => {
    if(map[sortedWord].length > 1) {
      result.push(map[sortedWord]);
    }
    return result;
  }, []);
}

console.log(listAnagrams(words)); // [['cat', 'act'], ['a phrase', 'e hpsara'], ['tape', 'pate']]