function maxSub(arr) {
  console.log(arr);
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    let temp = [arr[i]];
    for(let j = i + 1; j < arr.length; j++) {
      if(i !== j) {
        if(arr[j] > temp[temp.length - 1]) {
          temp.push(arr[j]);
        }
      }
    }
    if(result.length < temp.length) {
      while(result[result.length - 1] > temp[0]) {
        result.pop();
      }
      result = [ ...result, ...temp ];
    }
  }
  console.log(result)
  return result.length
}

// console.log(maxSub([3, 4, 2, 1, 10, 6])); // 3 => 3, 4, 6 (or 3, 4, 10)
// console.log(maxSub([10, 22, 9, 33, 20, 50, 41, 60, 80])); // 6 => 10, 22, 33, 41, 60, 80 (or 10, 22, 33, 50, 60, 80)
console.log(maxSub([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28])); // 9 => 10, 20, 21, 23, 24, 25, 26, 27, 28