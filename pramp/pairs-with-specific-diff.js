function findPairsWithGivenDifference(arr, k) {
  let output = [];
  const map = {};
  arr.forEach(itemX => {
    map[itemX - k] = itemX;
  });
  arr.forEach(itemY => {
    if(map[itemY] !== undefined) {
      output.push([map[itemY], itemY])
    }
  });
  console.log(output)
  return output;
}

findPairsWithGivenDifference([4,1], 3) // [[4,1]]
findPairsWithGivenDifference([1,5,11,7], 4) // [[5,1],[11,7]]
findPairsWithGivenDifference([1,5,11,7], 6) // [[7,1],[11,5]]
findPairsWithGivenDifference([1,5,11,7], 10) // [[11,1]]
findPairsWithGivenDifference([0,-1,-2,2,1], 1) // [[1,0],[0,-1],[-1,-2],[2,1]]
findPairsWithGivenDifference([1,7,5,3,32,17,12], 17) // []


/*
function findPairsWithGivenDifference(arr, k) {
  let output = [];
  xIdx = 0;
  yIdx = 0;
  while(xIdx < arr.length && yIdx < arr.length) {
    if(xIdx !== yIdx) {
      if(arr[yIdx] - arr[xIdx] === k) {
        output.push([arr[yIdx], arr[xIdx]])
      }
    }
    yIdx++;
    if(yIdx === arr.length) {
      xIdx++;
      yIdx = 0;
    }
  }
  return output;
}
*/


/*function findPairsWithGivenDifference(arr, k) {
  // your code goes here
  let output = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(i !== j) {
        if(arr[j] - arr[i] === k) {
          output.push([arr[j], arr[i]]);
        }
      }
    }
  }
  return output;
}*/
/*
function findPairsWithGivenDifference(arr, k) {
  let output = [];
  const map = {};
  arr.forEach(itemX => {
    map[itemX - k] = itemX;
  });
  arr.forEach(itemY => {
    if(itemY in map) {
      output.push([map[itemY], itemY])
    }
  });
  console.log(output)
  return output;
}
*/
// findPairsWithGivenDifference([4,1], 3) // [[4,1]]
// findPairsWithGivenDifference([1,5,11,7], 4) // [[5,1],[11,7]]
// findPairsWithGivenDifference([1,5,11,7], 6) // [[7,1],[11,5]]
// findPairsWithGivenDifference([1,5,11,7], 10) // [[11,1]]
// findPairsWithGivenDifference([0,-1,-2,2,1], 1) // [[1,0],[0,-1],[-1,-2],[2,1]]
// findPairsWithGivenDifference([1,7,5,3,32,17,12], 17) // []

/*
function findPairsWithGivenDifference(arr, k) {
  let output = [];
  xIdx = 0;
  yIdx = 0;
  while(xIdx < arr.length && yIdx < arr.length) {
    if(xIdx !== yIdx) {
      if(arr[yIdx] - arr[xIdx] === k) {
        output.push([arr[yIdx], arr[xIdx]])
      }
    }
    yIdx++;
    if(yIdx === arr.length) {
      xIdx++;
      yIdx = 0;
    }
  }
  console.log(output)
  return output;
}

findPairsWithGivenDifference([4,1], 3) // [[4,1]]
findPairsWithGivenDifference([1,5,11,7], 4) // [[5,1],[11,7]]
*/


//brute force
/*function findPairsWithGivenDifference(arr, k) {
  // your code goes here
  let output = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(i !== j) {
        if(arr[j] - arr[i] === k) {
          output.push([arr[j], arr[i]]);
        }
      }
    }
  }
  return output;
}*/