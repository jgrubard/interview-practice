function smallestSubstring(arr, str) {
  const map = {};
  let startIdx = 0;
  let endIdx = 0;
  let uniques = 0;
  let minStart;
  let minEnd;
  let minLength = Infinity;
  arr.forEach(element => map[element] = 0);
  for(let i = 0; i < str.length; i++) {
    const letter = str[i];
    if(arr.includes(letter)) {
      if(map[letter] === 0) {
        uniques++;
      }
      map[letter]++;
    }
    while(uniques === arr.length) {
      if(endIdx + 1 - startIdx < minLength) {
        minStart = startIdx;
        minEnd = endIdx;
        minLength = minEnd + 1 - minStart;
      }
      const startLetter = str[startIdx];
      if(arr.includes(startLetter)) {
        map[startLetter]--;
      }
      if(map[startLetter] === 0) {
        uniques--;
      }
      startIdx++;
    }
    endIdx++;
  }
  return str.slice(minStart, minEnd+1);
}

console.log(smallestSubstring(['x', 'y', 'z'], 'zxzxoyxyxz')); // 'xyz'



// function smallestSubstring(arr, str) {
//   const map = {};
//   let startIdx = 0;
//   let endIdx = 0;
//   let uniques = 0;
//   let minStart;
//   let minEnd;
//   let minLength = Infinity;
//   arr.forEach(element => map[element] = 0);
//   for(let i = 0; i < str.length; i++) {
//     const letter = str[i];
//     if(arr.includes(letter)) {
//       map[letter]++;
//     }
//     if(map[letter] === 1) {
//       uniques++;
//     }
//     while(uniques === arr.length) {
//       // console.log('uniques:', uniques, i, startIdx, endIdx, map, str.slice(minStart, minEnd + 1));
//       if(endIdx + 1 - startIdx < minLength) {
//         // once all uniques are fulfilled, we check to see if this
//         // string fits the criteria
//         minStart = startIdx;
//         minEnd = endIdx;
//         minLength = minEnd + 1 - minStart;
//       }
//       const firstLetter = str[minStart];
//       if(arr.includes(firstLetter)) {
//         map[firstLetter]--;
//         if(map[firstLetter] === 0) {
//           uniques--;
//           // console.log('')
//         }
//       }
//       startIdx++;
//     }
//     if(uniques < arr.length) {
//       endIdx++;
//     }
//     console.log('uniques:', uniques, 'index:', i);
//     console.log('startIdx', startIdx, 'endIdx', endIdx);
//     console.log(map, str.slice(minStart, minEnd + 1));
//     console.log('next iteration')
//     console.log()
//   }
// }

// console.log(smallestSubstring(['x', 'y', 'z'], 'zxzxoyxyxz'));



// function smallestSubstring(arr, str) {
//   const map = {};
//   let startIdx = 0;
//   let endIdx = 0;
//   let uniques = 0;
//   let minStart;
//   let minEnd;
//   let minLength = Infinity;
//   arr.forEach(element => map[element] = 0);
//   for(let i = 0; i < str.length; i++) {
//     const letter = str[i];
//     if(arr.includes(letter)) {
//       map[letter]++;
//     }
//     if(map[letter] === 1) {
//       uniques++;
//     }
//     if(uniques < arr.length) {
//       endIdx++;
//     } else {
//       while(uniques === arr.length) {
//         if(arr.includes(str[startIdx])) {
//           map[str[startIdx]]--;
//           if(map[str[startIdx]] === 0) {
//             uniques--;
//             startIdx++;
//           }
//         }
//         if(endIdx + 1 - startIdx < minLength) {
//           minStart = startIdx;
//           minEnd = endIdx;
//           minLength = minEnd - minStart;
//         }
//       }
//       // endIdx++;
//     }
//     console.log('uniques:', uniques, i, startIdx, endIdx, map, str.slice(minStart, minEnd + 1));
//   }
// }

// console.log(smallestSubstring(['x', 'y', 'z'], 'zxzxoyxyxz'));


// function smallestSubstring(arr, str) {
//   const map = {};
//   let startIdx = 0;
//   let endIdx = 0;
//   let uniques = 0; 
//   let minStart;
//   let minEnd;
//   let minLength = Infinity;
//   arr.forEach(element => map[element] = 0);
//   for(let i = 0; i < str.length; i++) {
//     const letter = str[i];
//     if(arr.includes(letter)) {
//       if(map[letter] === 0) {
//         uniques++;
//       }
//       map[letter]++;
//     }
//     if(uniques === arr.length) {
//       if((endIdx+1) - startIdx < minLength) {
//         minStart = startIdx;
//         minEnd = endIdx;
//         minLength = minEnd - minStart;
//       }
//       map[str[startIdx]]--;
//       if(map[str[startIdx]] === 0) {
//         uniques--;
//       }
//       startIdx++;
//     } else {
//       endIdx++;
//     }
//     console.log(uniques, startIdx, endIdx, map, str.slice(minStart, minEnd + 1))
//   }
// }

// console.log(smallestSubstring(['x', 'y', 'z'], 'zxzxoyxyxz'));



















// function smallestSubstring(arr, str) {
//   const map = {};
//   let start = 0;
//   let end = 0;
//   let minStart;
//   let minEnd;
//   let minCount = Infinity;
//   let uniqueNeeded = arr.length;
//   arr.forEach(letter => map[letter] = 0)
//   for(let i = 0; i < str.length; i++) {
//     let _letter = str[i];
//     if(map[_letter] === 0) {
//       uniqueNeeded--;
//     }
//     map[_letter]++;
//     if(uniqueNeeded === 0) {
//       if(end - start < minCount) {
//         minStart = start;
//         minEnd = end;
//         minCount = minEnd - minStart;
//       }
//       start++;
//       map[_letter]--;
//     }
//     if(uniqueNeeded > 0) {
//       end++;
//     }
//     // console.log('start:', start, '->', 'end:', end, '->', str.slice(start, end+1));
//     // console.log('uniqueNeeded:', uniqueNeeded, '->', 'map:', map)
//     console.log(minStart, minEnd, minCount, str.slice(minStart, minEnd))
//   }

// }

// console.log(smallestSubstring(['x', 'y', 'z'], 'zxzxyxyxz'));