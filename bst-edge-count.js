/*
Given a Binary Search Tree and two values that are in the tree,
calculate the number of edges between the two values.
*/

const binarySearchTree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 2,
      left: { value: 1, left: null, right: null },
      right: { value: 3, left: null, right: null },
    },
    right: {
      value: 6,
      left: null,
      right: null
    },
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: null,
      right: null,
    },
    right: null,
  },
};

/*
                     8
                 /        \
            4                12
          /   \             /  
        2        6        10
      /  \
    1     3
*/
 
function calcDistance(tree, val1, val2) {
  // console.log(tree);
  // console.log(val1, val2)
  
}

console.log(calcDistance(binarySearchTree, 2, 6)); // 2














// function calcSubdistance(tree, val) {
//   if (tree.value === val) return 0;
//   else if (tree.value > val) return 1 + calcDistance(tree.left, val);
//   else return 1 + calcDistance(tree.right, val);
// }
 
// function calcDistance(tree, val1, val2) {
//   let commonAncestor = tree;
//   let keepGoing = true;
//   while (keepGoing) {
//     if (val1 < commonAncestor.value && val2 < commonAncestor.value) {
//       commonAncestor = commonAncestor.left;
//     } else if (val1 > commonAncestor.value && val2 > commonAncestor.value) {
//       commonAncestor = commonAncestor.right;
//     } else {
//       keepGoing = false;
//     }
//   }
//   return calcSubdistance(commonAncestor, val1) + calcSubdistance(commonAncestor, val2);         
// }

// console.log(calcDistance(binarySearchTree, 2, 6)); // 2