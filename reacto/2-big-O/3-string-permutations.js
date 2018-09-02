function stringPermutations(string) {
  if(string.length === 1) return [string];
  let arr = string.split('');
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    let tempResult = [];
    if(!result.length) {
      result.push([letter]);
    } else {
      // result = result.concat(result);
      for(let j = 0; j < result.length; j++) {


        // console.log(j, result);


        let temp = result[j].slice();
        temp.splice(j, 0, letter);
        // console.log(j, temp)
        tempResult.push(temp);
      }
      result = tempResult;
      console.log(result);
    }
  }
  // return result
  //   .map(item => item.join(''))
  //   .reduce((memo, item) => {
  //     if(!memo.includes(item)) {
  //       memo.push(item);
  //     }
  //     return memo;
  //   }, [])
  //   .sort();
}

// console.log(stringPermutations('a')); // should return  [ 'a' ]
// console.log(stringPermutations('ab')); // should return  [ 'ab', 'ba' ]
console.log(stringPermutations('one')); // should return  [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
// console.log(stringPermutations('app')); // should return  [ 'app','pap','ppa']
// console.log(stringPermutations('nn')); //should return  [ 'nn' ]



/* function stringPermutations(string) {
  if(string.length === 1) return [string];
  let arr = string.split('');
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    let tempResult = [];
    if(!result.length) {
      result.push([letter]);
    } else {
      result = result.concat(result);
      for(let j = 0; j < result.length; j++) {
        let temp = result[j].slice();
        temp.splice(j, 0, letter);
        // console.log(j, temp)
        tempResult.push(temp);
      }
      result = tempResult;
    }
  }
  return result
    .map(item => item.join(''))
    .reduce((memo, item) => {
      if(!memo.includes(item)) {
        memo.push(item);
      }
      return memo;
    }, [])
    .sort();
}

// console.log(stringPermutations('a')); // should return  [ 'a' ]
// console.log(stringPermutations('ab')); // should return  [ 'ab', 'ba' ]
console.log(stringPermutations('one')); // should return  [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
// console.log(stringPermutations('app')); // should return  [ 'app','pap','ppa']
// console.log(stringPermutations('nn')); //should return  [ 'nn' ] */



/* function stringPermutations(string) {
  let arr = string.split('');

  let result = [];
  for(let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    let tempResult = [];
    if(!result.length) {
      result.push([letter]);
    } else {
      result
        .concat(result)
        .forEach((perm, index) => {
          // console.log('1:', perm)
          let temp = perm.slice();
          // console.log('2:', perm.splice(index, 0, letter))
          tempResult.push(temp.splice(index, 0, letter));
        });
        // result = temp;
        console.log(tempResult);
      // result[i].splice(0, 0, 1);
    }
  }
  console.log(result);
  // return result;
}

// console.log(stringPermutations('a')); // should return  [ 'a' ]
console.log(stringPermutations('ab')); // should return  [ 'ab', 'ba' ]
// console.log(stringPermutations('one')); // should return  [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
// console.log(stringPermutations('app')); // should return  [ 'app','pap','ppa']
// console.log(stringPermutations('nn')); //should return  [ 'nn' ] */



/* function stringPermutations(string) {
  let result = [];
  for(let i = 0; i < string.length; i++) {
    let perm = '';
    for(let j = 0; j < string.length; j++) {
      console.log(string[i], string[j]);
      if(i !== j) {
        perm += string[j];
      }
    }
    // result.push(perm);
  }
  // result = result.sort((a, b) => a - b);
  // return result;
}

console.log(stringPermutations('a')); // should return  [ 'a' ]
console.log(stringPermutations('ab')); // should return  [ 'ab', 'ba' ]
// console.log(stringPermutations('one')); // should return  [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
// console.log(stringPermutations('app')); // should return  [ 'app','pap','ppa']
// console.log(stringPermutations('nn')); //should return  [ 'nn' ] */