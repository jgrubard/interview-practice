var isValid = function(string) {
  if(!string.length === 1) return true;
  if(string.length === 1) return false;
  const map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const result = [];
  for(let i = 0; i < string.length; i++) {
    const char = string[i];
    result.push(char);
    if(!map[char]) { // if we have a closing bracket
      let top = result.pop();
      let next = result[result.length - 1];
      if(map[next] === top) {
        result.pop();
      } else {
        return false;
      }
    }
  }
  return !result.length
};

// console.log(isValid('([)]')); // false 
console.log(isValid('(){)}[]')); // true 





/* var isValid = function(string) {
  if(string.length <= 1) return false;
  const map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  let status = 'closed';
  const result = [];
  for(let i = 0; i < string.length; i++) {
    const char = string[i];
    result.push(char);
    // console.log(!!map[char], char);
    if(!map[char]) { // if we have a closing bracket
      // console.log(char);
      let popped = result.pop();
      
      // console.log(popped, result)

      console.log(result[result.length - 1]);
      console.log(popped)
      // console.log(map[result[result.length - 1]] === popped)
      if(map[result[result.length - 1]] === popped) {
        // console.log('YES!')
      // } else {
        // console.log('NO')
        result.pop();
      }
    }
  }
  if(result.length === 0) {
    return true
  }
  return false;
};

// console.log(isValid('([)]')); // false 
console.log(isValid('(){}[]')); // true  */


/* var isValid = function(string) {
  if(string.length <= 1) return false;
  const opened = ['[', '(', '{'];
  const closed = [']', ')', '}'];
  let arr = []
  for(let i = 0; i < string.length; i++) {
      const char = string[i];
      if(closed.indexOf(char) > -1) { 
        console.log(char, arr.length)
      }
      // console.log(closed.indexOf(char));

      // const match = opened[closed.indexOf(char)]
      // console.log(char, match)

      arr.push(char);
      
  }
  // console.log(arr)
};

console.log(isValid('([)]')); // false */