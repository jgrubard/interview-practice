function decimalToBinary(num) {
  let result = '';
  const binary = [254, 128, 64, 32, 16, 8, 4, 2, 1];
  for(let i = 0; i < binary.length; i++) {
    if(num >= binary[i]) {
      result += '1';
      num -= binary[i];
    } else {
      result += '0';
    }
  }
  let trimmed = result.slice(result.indexOf('1'));
  return trimmed;
}

// console.log(decimalToBinary(4)); // should return '100'
// console.log(decimalToBinary(67)); // should return '1000011'

function binaryToDecimal(binary) {
  let result = 0;
  const binaryKey = [1, 2, 4, 8, 16, 32, 64, 128, 254];
  for(let i = binary.length - 1; i >= 0; i--) {
    if(binary[i] === '1') {
      result += binaryKey[binary.length - 1 - i];
    }
  }
  return result;
}

// console.log(binaryToDecimal('100')); // should return 4
console.log(binaryToDecimal('1000011')); // should return 67