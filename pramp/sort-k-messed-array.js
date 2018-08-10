// Heap Sort

function sortKMessedArray(arr, k) {
  // console.log(arr, k);

}

console.log(sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2))
// console.log(sortKMessedArray([6, 1, 4, 11, 2, 0, 3, 7, 10, 5, 8, 9], 6));

/*

// Insertion Sort

function sortKMessedArray(arr, k) {
  // console.log(arr, k);
  for(let i = 1; i < arr.length; i++) {
    for(let j = i; j > 0; j--) {
      console.log(arr[j])
      if(arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } 
    }
  }
  return arr;
}

// console.log(sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2))
console.log(sortKMessedArray([6, 1, 4, 11, 2, 0, 3, 7, 10, 5, 8, 9], 6));

*/