function binaryPermutations(str) {
  const string = '';
  const result = [];
  result.push(string);
  helper(str, result);
}

function helper(str, result) {
  if(str.length === 0) {
    console.log(result);
    return result;
  }
  if(str[0] !== '?') {
    result = result.map(string => {
      return string += str[0];
    });
  } else {
    result = result.concat(result);
    for(let i = 0; i < result.length; i++) {
      if(i < result.length / 2) {
        result[i] += '0';
      } else {
        result[i] += '1';
      }
    }
  }
  return helper(str.slice(1), result);
}

console.log(binaryPermutations('0?1?0?1??'));

// function binaryPermutations(str) {
//   helper(str, '', 0, []);
// }

// function helper(str, result, index, array) {
//   if(index === str.length - 1) {
//     array.push(result);
//     return;
//   }
//   if(str[index] === '?') {
//     result += 
//   } else {
//     result += str[index]
//     index++;
//     helper(str, result, index);
//   }
// }

// console.log(binaryPermutations('00?'));


// function binaryPermutations(num) {
//   let result = '';
//   helper(num, result);


// }

// function helper(num, result) {
//   // console.log(num, result);
//   if() {
//     return
//   }
//   for(let i = 0; i < num.length; i++) {
//     let char = num[i];
//     if(char !== '1' || char !== '0') {
//       let binStr = '10';
//       for(let j = 0; j < binStr.length; j++) {

//       }
//     }
//   }
// }

// console.log(binaryPermutations('00?'));