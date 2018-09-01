/*
add number from front to end, if nth sum>9, (n+1)th (sum + 1)
*/

var addTwoNumbers = function(list1, list2) {
  var arr = loop(list1,list2,[],0,0);
  return arr;
};
  
function loop(list1, list2, arr, index, add){
  let list1val;
  let list2val;
  list1val = list1 ? list1.val : 0;
  list2val = list2 ? list2.val : 0;
  //add=1, if prev sum >9
  let sum = list1val + list2val + add;
  add = 0;
  if(sum > 9){
    sum = sum -10;
    add = 1;
  };
  arr.push(sum);
  index++;
  //special case, if length is not equal
  if ((list1 ? list1.next : null) || (list2 ? list2.next : null)) {
    return loop(list1 ? list1.next : null, list2 ? list2.next : null, arr, index, add);
  };
  if (add) {
    arr.push(add);
  }
  return arr;
}