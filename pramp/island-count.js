function islandCount(matrix) {
  // console.log(matrix);
  for(let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for(let j = 0; j < row.length; j++) {
      let num = row[j];
      console.log(row, num);
    }
  }
}

const matrix = [ [ 0, 1, 0, 1, 0 ],
                 [ 0, 0, 1, 1, 1 ],
                 [ 1, 0, 0, 1, 0 ],
                 [ 1, 0, 1, 0, 1 ],
                 [ 0, 1, 0, 0, 1 ] ]; // => 6

console.log(islandCount(matrix), '=> 6');