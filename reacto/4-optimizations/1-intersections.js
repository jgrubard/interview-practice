function intersection(arr1, arr2) {
  let result = [];
  let idx1 = 0;
  let idx2 = 0;
  while(idx1 < arr1.length && idx2 < arr2.length) {
    let val1 = arr1[idx1];
    let val2 = arr2[idx2];
    if(val1 === val2) {
      result.push(val1);
    }
    if(val1 <= val2) {
      idx1++;
    }
    if(val1 >= val2) {
      idx2++;
    }
  }
  return result;
}

console.log(intersection([1,4,9,10,11], [2,3,4,5,8,10])); // [4, 10]
// console.log(intersection([5,4,1,7,2], [4,2,3,5])); // [5, 4, 2] 


/* function intersection(arr1, arr2) {
  const set = new Set(arr1);
  return arr2.filter(el => set.has(el));
}

// console.log(intersection([1,4,9,10,11], [2,3,4,5,8,10])); // [4, 10]
console.log(intersection([5,4,1,7,2], [4,2,3,5])); // [5, 4, 2]  */


/* function intersection(arr1, arr2) {
  const set = new Set();
  arr1.forEach(el => set.add(el));
  return arr2.filter(el => set.has(el));
}

// console.log(intersection([1,4,9,10,11], [2,3,4,5,8,10])); // [4, 10]
console.log(intersection([5,4,1,7,2], [4,2,3,5])); // [5, 4, 2]  */