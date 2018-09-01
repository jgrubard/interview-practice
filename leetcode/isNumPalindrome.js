function isNumPalindrome(num) {
  let divisor = 1;
  while(num / divisor >= 10) {
    divisor *= 10;
  }
  while(num !== 0) {
    let head = Math.floor(num / divisor);
    let tail = num % 10;
    // console.log(head, tail)
    if(head !== tail) {
      return false;
    }
    num = Math.floor((num % divisor) / 10)
    divisor /= 100;
  }
  return true;
}

console.log(isNumPalindrome(1000021))