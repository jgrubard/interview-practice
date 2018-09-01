const arr = [
  ['ORL', 'SFI'],
  ['JFK', 'ORL'],
  ['LAX', 'LGA'],
  ['SFI', 'LAX']
];

function findStart(arr) {
  const set = new Set();
  arr.forEach(ticket => set.add(ticket[1]))
  for(let i = 0; i < arr.length; i++) {
    let ticket = arr[i];
    if (!set.has(ticket[0])) {
      return ticket[0];
    }
  }
}

function findEnd(arr) {
  const set = new Set();
  arr.forEach(ticket => set.add(ticket[0]))
  for(let i = 0; i < arr.length; i++) {
    let ticket = arr[i];
    if (!set.has(ticket[1])) {
      return ticket[1];
    }
  }
}

function findStartAndEnd(arr) {
  const start = findStart(arr);
  const end = findEnd(arr);
  return [start, end];
}

console.log(findStartAndEnd(arr));