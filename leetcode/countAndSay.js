var countAndSay = function(num) {
  let start = '1'
  while(num > 1) {
    let temp = ''
    let count = 0;
    for(let j = 0; j < start.length; j++) {
      const char = start[j];
      count++;
      if(char !== start[j + 1]) {
        temp += count + char;
        count = 0;
      }
    }
    start = temp;
    num--;
  }
  return start;
};

console.log(countAndSay(3));


/* var countAndSay = function(num) {
  let start = '1';
  let result = '';
  let current = 0;
  let count = 0;
  if(num === 1) return num;
  while(num > 0) {
    // console.log('test');
    for(let i = 0; i < start.length; i++) {
      let char = start[i]
      if(char === start[current]) {
        // console.log('test');
        count++;
        // console.log(count + start[current]);
      }
    }
    result += count + start[current];
    start = result;
    result = '';
    current = 0;
    num--;
  }
  return start;
};

console.log(countAndSay(4)); */