var lengthOfLongestSubstring = function(string) {
  const set = new Set();
  let start = 0;
  let end = 0;
  let final = 0;
  while(end < string.length) {
    const letter = string[end];
    while(set.has(letter)) {
      set.delete(string[start])
      start++;
    }
    set.add(letter);
    if(final < set.size) {
      final = set.size;
    }
    end++;
  }
  return final;
};

// console.log(lengthOfLongestSubstring('abcabcbb')); // 3
// console.log(lengthOfLongestSubstring('abc')); // 3
// console.log(lengthOfLongestSubstring(' ')); // 1
// console.log(lengthOfLongestSubstring('pwwkew')); // 3






/* var lengthOfLongestSubstring = function(string) {
  const set = new Set();
  let start = 0;
  let end = 0;
  // let result = '';
  let final = 0;
  while(end < string.length) {
    const letter = string[end];
    // console.log(set)
    // console.log('letter:', "\"" + letter + "\"")
    // if(set.has(letter)) {
      if(final < set.size) final = set.size;
      while(set.has(letter)) {
        // if(string.slice(start, end).length > result.length) {
          // result = string.slice(start, end);
        // }
        set.delete(string[start])
        start++;
      }
    // } else {
      // result = string.slice(start, end + 1);
    // }
    set.add(letter);
    end++;
    // console.log(set.length)
  }
  return final;
  // return result.length;
};

// console.log(lengthOfLongestSubstring('abcabcbb')); // 3
// console.log(lengthOfLongestSubstring('abc')); // 3
// console.log(lengthOfLongestSubstring(' ')); // 1 */