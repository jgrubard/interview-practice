const wall = [
  [5, 8, 3, 4],
  [5, 11, 4],
  [13, 2, 1, 3, 1]
];

function minCuts(wall) {
  const map = {}
  const minCuts = Infinity;
  // const length = wall[0].reduce((sum, num) => sum + num)
  for(let i = 0; i < wall.length; i++) {
    let row = wall[i];
    for(let j = 0; j < row.length; j++) {
      let brick = row[j];
      // console.log(brick);
      // console.log(map);
      if(map[i] === undefined) {
        map[i] = brick;
      } else {
        map[i] += brick;
      }
    }
    // console.log('next-row');
  }
  // console.log(map);
}


console.log(minCuts(wall));