const graph = {
  a: ['b'],
  b: ['c', 'd'],
  c: ['d'],
  d: []
}

const doesPathExist = (graph, start, end) => {
  // let result = [];
  let queue = [start];
  // let connections = graph[start];
  while(queue.length) {
    let node = queue.shift();
    let connections = graph[node];
    for(let i = 0; i < connections.length; i++) {
      let point = connections[i];
      if(point !== end) {
        return true;
      } else {
        queue.push(point);
      }
    }
    // result.push(node);
  }
  return false;
}

// console.log(doesPathExist(graph, 'a', 'b')) // true
// console.log(doesPathExist(graph, 'b', 'a')) // false
// console.log(doesPathExist(graph, 'a', 'd')) // true
// console.log(doesPathExist(graph, 'a', 'a')) // false


/* const graph = {
  a: ['b'],
  b: ['c', 'd'],
  c: ['d'],
  d: []
}

const doesPathExist = (graph, start, end) => {
  // console.log(graph);
  // console.log(start, end);
  let connections = graph[start];
  // let noMatches = true;
  let visited = new Set();
  while(connections.length) {
    let temp = [];
    for(let i = 0; i < connections.length; i++) {
      // console.log(connections[i]);
      let node = connections[i]
      if(node === end) return true;
      if(visited.has(node)) {
        return false;
      } else {
        temp.push(node);
        visited.add(node);
      }
    }
    connections = temp;
    // console.log(connections);
  }
  return false;
}

// console.log(doesPathExist(graph, 'a', 'b')) // true
// console.log(doesPathExist(graph, 'b', 'a')) // false
// console.log(doesPathExist(graph, 'a', 'd')) // true
// console.log(doesPathExist(graph, 'a', 'a')) // false */


/* const graph = {
  a: ['b'],
  b: ['c', 'd'],
  c: ['d'],
  d: []
}

const doesPathExist = (graph, start, end) => {
  // console.log(graph);
  // console.log(start, end);
  let connections = graph[start];
  while(connections.length) {
    let temp = [];
    for(let i = 0; i < connections.length; i++) {
      // console.log(connections[i]);
      let node = connections[i]
      if(node !== end) {
        temp.push(node)
      } else {
        return true;
      }
    }
    connections = temp;
    console.log(connections);
  }
  return false;
}

// console.log(doesPathExist(graph, 'a', 'b')) // true
console.log(doesPathExist(graph, 'b', 'a')) // false
// console.log(doesPathExist(graph, 'a', 'd')) // true
// console.log(doesPathExist(graph, 'a', 'a')) // false */