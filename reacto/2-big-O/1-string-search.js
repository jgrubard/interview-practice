function indexOf(needle, haystack) {
  for(let i = 0; i < haystack.length; i++) {
    if(haystack[i] === needle[0]) {
      for(let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        }
        if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }
  return -1;
}

console.log(indexOf('or', 'hello world')); // should return 7
// console.log(indexOf('hello world', 'or')); // should return -1
// console.log(indexOf('howdy', 'hello world')); // should return -1
// console.log(indexOf('oox', 'ooboxoooxo')); // should return 6



/* function indexOf(needle, haystack) {
  for(let i = 0; i < haystack.length; i++) {
    let match = false;
    if(haystack[i] === needle[0]) {
      for(let j = 0; j < needle.length; j++) {
        if(haystack[i + j] !== needle[j]) {
          match = false;
          break;
        }
        match = true;
      }
    }
    if(match) return i;
  }
  return -1;
}

console.log(indexOf('or', 'hello world')); // should return 7
// console.log(indexOf('hello world', 'or')); // should return -1
// console.log(indexOf('howdy', 'hello world')); // should return -1
// console.log(indexOf('oox', 'ooboxoooxo')); // should return 6 */



/* function indexOf(target, string) {
  // console.log(target, string);
  for(let i = 0; i < string.length; i++) {
    let letter = string[i];
    let subString = string.slice(i, i + target.length);
    if(letter === target[0] && subString === target) {
      return i;
    }
  }
  return -1;
}

// console.log(indexOf('or', 'hello world')); // should return 7
// console.log(indexOf('hello world', 'or')); // should return -1
// console.log(indexOf('howdy', 'hello world')); // should return -1
// console.log(indexOf('oox', 'ooboxoooxo')); // should return 6 */