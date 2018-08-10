function makeSame(string1, string2) {
  // console.log(String.fromCharCode(65))
  let sum = 0;
  for(let i = 0; i < string1.length; i++) {
    // console.log(string1.charCodeAt(i))
    // console.log(string2.charCodeAt(i))
    sum += Math.abs(string1.charCodeAt(i) - string2.charCodeAt(i));
  }
  return sum;
}

console.log(makeSame('BBB', 'AAA'))