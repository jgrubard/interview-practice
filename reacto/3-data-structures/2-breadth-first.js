const util = require('util');

function node(value) {
  return {
    value,
    children: []
  }
}
var a = node('a');
var b = node('b');
var c = node('c');
var d = node('d');
var e = node('e');
var f = node('f');
var g = node('g');
var h = node('h');
var i = node('i');
var j = node('j');
var k = node('k');
var l = node('l');
var m = node('m');

a.children.push(b,c,d);
b.children.push(e);
e.children.push(k,l);
c.children.push(f,g,h);
h.children.push(m);
d.children.push(i,j);

// console.log(util.inspect(a, { depth: null }));

function breadthFirst(root) {
  const queue = [root];
  const result = [];
  while(queue.length) {
    let node = queue.shift();
    result.push(node.value);
    node.children.forEach(child => queue.push(child))
  }
  return result;
}

// console.log(breadthFirst(a)); // A B C D E F G H I J K L M

function dfPreHelper(root, result) {
  if(!root) return [];
  result.push(root.value);
  root.children.forEach(child => {
    dfPreHelper(child, result);
  });
  return result;
}

function depthFirstPreOrder(root) {
  return dfPreHelper(root, []);
}

// console.log(depthFirstPreOrder(a))// A B E K L C F G H M D I J

function dfPostHelper(root, result) {
  if(!root) return [];
  root.children.forEach(child => {
    dfPostHelper(child, result);
  });
  result.push(root.value);
  
  return result;
}

function depthFirstPostOrder(root) {
  return dfPostHelper(root, []);
}

console.log(depthFirstPostOrder(a))// K L E B F G M H C I J D A