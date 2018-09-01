// more efficient - recursive binary search (O)log(N) time complexity

function minInRotatedSortedArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  if(arr[start] < arr[end]) return arr[0]
  while (end - start > 1) {
    let mid = start + Math.floor((end - start) / 2);
    console.log('index:', start, mid, end);
    if(arr[start] < arr[mid]) {
      start = mid
    } else {
      end = mid;
    }
  }
  if(arr[start] < arr[end]) {
    return arr[start];
  }
  return arr[end];
}

// console.log(minInRotatedSortedArray([7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6]));
console.log(minInRotatedSortedArray([1, 2, 3]));

/*

// more efficient - recursive binary search (O)log(N) time complexity

function minInRotatedSortedArray(arr) {
  if(arr.length === 1 || arr[0] < arr[arr.length - 1]) {
    return arr[0];
  }
  if(arr.length === 2) {
    return arr[0] > arr[1] ? arr[1] : arr[0];
  }
  let mid = Math.floor(arr.length / 2);
  let first = arr.slice(0, mid);
  let second = arr.slice(mid);
  console.log(first, second);
  

  if(first[0] > first[first.length - 1]) {
    return minInRotatedSortedArray(first);
  } else {
   return minInRotatedSortedArray(second);
  }
}

console.log(minInRotatedSortedArray([7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6]));
// console.log(minInRotatedSortedArray([1, 2, 3]));

*/



/* // more efficient - recursive binary search (O)log(N) time complexity

function minInRotatedSortedArray(arr) {
  if(arr.length === 1) {
    return arr[0];
  }
  // console.log(arr);
  let mid = Math.floor(arr.length / 2);
  // console.log(mid);
  let first = arr.slice(0, mid);
  let second = arr.slice(mid);
  console.log(first, second);
  if(first[first.length - 1] > second[second.length - 1]){
    return minInRotatedSortedArray(first);
  } else {
    return minInRotatedSortedArray(second);
  }
}

console.log(minInRotatedSortedArray([5, 4, 3, 2, 1, 13, 12, 11, 10, 9, 8, 7, 6])); */




/*

// brute force (O)N time complexity

function minInRotatedSortedArray(arr) {
  // console.log(arr);
  let min = Infinity;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min){
      min = arr[i];
    }
  } 
  return min;
}

console.log(minInRotatedSortedArray([5, 4, 3, 2, 1, 9, 8, 7, 6]));

*/