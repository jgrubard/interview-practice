function subsetSum(target, arr) {
  let sums = [0];
  let set = new Set();
  for(let i = 0; i < arr.length; i++) {
    let addToSums = sums.slice();
    for(let j = 0; j < sums.length; j++) {
      let sum = arr[i] + sums[j];
      if(sum < target) {
        addToSums.push(sum)
        set.add(sum);
      } else if(sum === target) {
        return true;
      }
    }
    sums = addToSums;
  }
  return false;

}


console.log(subsetSum(2, [1,10,5,3])); // false
// console.log(subsetSum(10, [1,10,5,3])); // true
// console.log(subsetSum(9, [1,10,5,3])); // true
// console.log(subsetSum(19, [1,10,5,3])); // true
// console.log(subsetSum(17, [1,10,5,3])); // false

/* function subsetSum(target, arr) {
  let sums = [0];
  let set = new Set();
  for(let slow = 0; slow < arr.length; slow++) {
    let addToSums = []
    for(let fast = 0; fast < sums.length; fast++) {
      let sum = arr[slow] + sums[fast];
      addToSums.push(sum)
      set.add(sum);
    }
    sums = [ ...sums, ...addToSums ];
  }
  return set.has(target);
}


// console.log(subsetSum(2, [1,10,5,3])); // false
// console.log(subsetSum(10, [1,10,5,3])); // true
// console.log(subsetSum(9, [1,10,5,3])); // true
// console.log(subsetSum(19, [1,10,5,3])); // true
// console.log(subsetSum(17, [1,10,5,3])); // false */


/* function subsetSum(target, arr) {
  let set = new Set();
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < i; j++) {
      set.add(arr[i])
      if(i !== j) {
        set.add(arr[i] + arr[j]);
      }
      if(set.has(target)) {
        return true;
      }
    }
  }
  console.log(set)
  return false;
}


// console.log(subsetSum(2, [1,10,5,3])); // false
// console.log(subsetSum(10, [1,10,5,3])); // true
console.log(subsetSum(9, [1,10,5,3])); // true
// console.log(subsetSum(19, [1,10,5,3])); // true
// console.log(subsetSum(17, [1,10,5,3])); // false */