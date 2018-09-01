const util = require('util');

function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.prototype.append = function(val) {
  let list = this;
  node = new ListNode(val)
  if(!this.val) {
    return node;
  } else {
    while(list.next) {
      list = list.next;
    }
    list.next = node;
  }
}
// const list1 = new ListNode(2);
// list1.append(4);
// list1.append(3);

// const list2 = new ListNode(5);
// list2.append(6);
// list2.append(4);

// ------------------

// const list1 = new ListNode(1);
// list1.append(8);

// const list2 = new ListNode(0);


const list1 = new ListNode(1);

const list2 = new ListNode(9);
list1.append(9);

/* ========================================= */

const sumSingleList = (list) => {
  let mult = 1;
  let num = 0;
  while(list) {
    num += list.val * mult; 
    list = list.next
    mult *= 10;
  }
  return num;
}

var addTwoNumbers = function(list1, list2) {
  let sum = sumSingleList(list1) + sumSingleList(list2)
  console.log(sum)
  if(!sum) return new ListNode(0);
  let divisor = 1;
  while(divisor <= sum) {
    divisor *= 10;
  }
  if(sum >= 10) divisor /= 10;
  let result;
  if(sum < 10) return new ListNode(sum);
  let zeroStart = sum % 10 / 10 === 0;
  while(sum > 0) {
    let first = Math.floor(sum / divisor);
    if(!result) {
      result = new ListNode(first);
    } else {
      let start = result;
      result = new ListNode(first);
      result.next = start;
    }
    sum -= first * divisor;
    divisor /= 10;     
  }
  if(zeroStart) {
    let hold = result;
    result = new ListNode(0);
    result.next = hold;
  }
  return result;
};

const result = addTwoNumbers(list1, list2);

console.log(util.inspect(result, { depth: null }));




/* 

var addTwoNumbers = function(list1, list2) {
  let num1 = 0;
  let num2 = 0;
  let mult = 1;
  while(list1 && list2) {
      num1 += list1.val * mult; 
      num2 += list2.val * mult;
      list1 = list1.next
      list2 = list2.next
      mult *= 10;
  }
  let sum = num1 + num2;
  if(!sum) return new ListNode(0);
  let divisor = 1;
  while(divisor < sum) {
      divisor *= 10;
  }
  if(sum > 10) divisor /= 10;
  let result;
  if(sum < 10) return new ListNode(sum);
  let exitLoop = false;
  while(!exitLoop) {
    if(sum === 0) {
      exitLoop = true;
    }   
    let first = Math.floor(sum / divisor);
    if(!result) {
        result = new ListNode(first);
    } else {
        let start = result;
        result = new ListNode(first);
        result.next = start;
    }
    sum -= first * divisor;
    divisor /= 10;     
  }
  return result;
};

*/