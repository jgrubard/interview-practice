
function longestSubstringWithoutDuplication(string) {
  const map = {};
  let startIdx = 0;
  let longest = [0, 0];
  for(let endIdx = 0; endIdx < string.length; endIdx++) {
    let letter = string[endIdx];
    if(map[letter] !== undefined) {
      startIdx = Math.max(startIdx, map[letter] + 1);
    }
    if(longest[1] - longest[0] < endIdx + 1 - startIdx) {
      longest = [startIdx, endIdx + 1]
    }
    map[letter] = endIdx;
  }
  return string.slice(longest[0], longest[1]);
}

// console.log(longestSubstringWithoutDuplication('a'), '=> a') // 'a'
// console.log(longestSubstringWithoutDuplication('abc'), '=> abc') // 'abc'
// console.log(longestSubstringWithoutDuplication('abcb'), '=> abc') // 'abc'
// console.log(longestSubstringWithoutDuplication('abcdeabcdefc'), '=> abcdef') // 'abcdef'
// console.log(longestSubstringWithoutDuplication('abccdeaabbcddef'), '=> cdea') // 'cdea'
// console.log(longestSubstringWithoutDuplication('abacacacaaabacaaaeaaafa'), '=> bac') // 'bac'
// console.log(longestSubstringWithoutDuplication('abcdabcef'), '=> dabcef') // 'dabcef' <- repair
// console.log(longestSubstringWithoutDuplication('abcbde'), '=> cdbe') // 'cbde' <- repair
// console.log(longestSubstringWithoutDuplication('clementisacap'), '=> mentisac') // 'mentisac'


// function longestSubstringWithoutDuplication(string) {
//   let map = {};
//   let startIdx = 0;
//   let word;
//   let resultLength = -Infinity;
//   let result;
//   if(string.length <= 1) return string;
//   for(let endIdx = 0; endIdx < string.length; endIdx++) {
//     let letter = string[endIdx];
//     // console.log(letter)
//     word = string.slice(startIdx, endIdx);
//     // console.log(word)
//     if(word.length > resultLength) {
//       result = word;
//       resultLength = result.length;
//     }
//     if(map[letter] === undefined) {
//       map[letter] = endIdx;
//       // console.log(letter, map)
//     } else {
//       // console.log(map)
//       // let temp = map[letter];
//       startIdx = Math.max(startIdx, map[letter] + 1);
//       map[letter] = endIdx;
//     }
//     console.log(result)
//     // console.log(startIdx, endIdx)
//   }
//   return result;
// }

// // console.log(longestSubstringWithoutDuplication('a'), '=> a') // 'a'
// console.log(longestSubstringWithoutDuplication('abc'), '=> abc') // 'abc'
// // console.log(longestSubstringWithoutDuplication('abcb'), '=> abc') // 'abc'
// // console.log(longestSubstringWithoutDuplication('abcdeabcdefc'), '=> abcdeg') // 'abcdef'
// // console.log(longestSubstringWithoutDuplication('abccdeaabbcddef'), '=> cdea') // 'cdea'
// // console.log(longestSubstringWithoutDuplication('abacacacaaabacaaaeaaafa'), '=> bac') // 'bac'
// // console.log(longestSubstringWithoutDuplication('abcdabcef'), '=> dabcef') // 'dabcef' <- repair
// // console.log(longestSubstringWithoutDuplication('abcbde'), '=> cdbe') // 'cbde' <- repair
// // console.log(longestSubstringWithoutDuplication('clementisacap'), '=> mentisac') // 'mentisac'




// function longestSubstringWithoutDuplication(string) {
//   const map = {};
//   let startIdx = 0;
//   let tempWord;
//   let resultLength = -Infinity;
//   let result;
//   let noDuplicate = true;
//   if(string.length <= 1) return string;
//   for(let endIdx = 0; endIdx < string.length; endIdx++) {
//     // if(endIdx === string.length-1) endIdx = string.length;
//     tempWord = string.slice(startIdx, endIdx);
//     if(tempWord.length > resultLength) {
//       result = tempWord;
//       resultLength = result.length;
//     }
//     let letter = string[endIdx];
//     if(!map[letter]) {
//       map[letter] = 1;
//     } else {
//       map[letter]++;
//       noDuplicate = false;
//       while(!noDuplicate) {
//         if(string[startIdx] === letter) {
//           noDuplicate = true;
//         }
//         map[string[startIdx]]--;
//         startIdx++;
//         // console.log(tempWord, result, startIdx, endIdx);
//       }
//     }
//     console.log(tempWord, result, startIdx, endIdx);
//   }
//   // console.log('final:', result);
//   return result;
// }

// // console.log(longestSubstringWithoutDuplication('a'), '=> a') // 'a'
// // console.log(longestSubstringWithoutDuplication('abc'), '=> abc') // 'abc'
// // console.log(longestSubstringWithoutDuplication('abcb'), '=> abc') // 'abc'
// // console.log(longestSubstringWithoutDuplication('abcdeabcdefc'), '=> abcdeg') // 'abcdef'
// // console.log(longestSubstringWithoutDuplication('abccdeaabbcddef'), '=> cdea') // 'cdea'
// // console.log(longestSubstringWithoutDuplication('abacacacaaabacaaaeaaafa'), '=> bac') // 'bac'
// // console.log(longestSubstringWithoutDuplication('abcdabcef'), '=> dabcef') // 'dabcef' <- repair
// // console.log(longestSubstringWithoutDuplication('abcbde'), '=> cdbe') // 'cbde' <- repair
// // console.log(longestSubstringWithoutDuplication('clementisacap'), '=> mentisac') // 'mentisac'


// function longestSubstringWithoutDuplication(string) {
// 	const map = {};
// 	let startIdx = 0;
// 	let wordLength = -Infinity;
// 	let result;
// 	let tempWord;
// 	if(string.length === 1) return string;
// 	for(let endIdx = 0; endIdx < string.length; endIdx++) {
//     tempWord = string.slice(startIdx, endIdx);
//     if(tempWord.length > wordLength) {
//       result = tempWord;
//       wordLength = result.length;
//     }
//     const letter = string[endIdx];
// 		if(map[letter] === undefined) {
// 			map[letter] = 1;
// 		} else {
//       let startLetter = string[startIdx];
//       console.log(letter, startLetter)
// 			while(string[startIdx] !== letter) {
//         console.log(result, tempWord)
// 				startIdx++;
// 			}
//     }
//     // console.log(result, tempWord)
//   }
//   return 'result: ' + result;
// }

// console.log(longestSubstringWithoutDuplication('clementisacap')) // 'mentisac'

// function longestSubstringWithoutDuplication(string) {
//   const map = {};
//   let startIdx = 0;
//   let result;
//   let tempWord;
//   let wordLength = -Infinity;
//   for(let endIdx = 0; endIdx < string.length; endIdx++) {
//     let tempWord = string.slice(startIdx, endIdx);
//     console.log(tempWord)
//     if(tempWord.length > wordLength) {
//       result = tempWord;
//       wordLength = result.length;
//     }
//     let endLetter = string[endIdx];
//     console.log(endLetter)
//     if(map[endLetter]) {
//       map[endLetter] = 1;
//     } else {
//       // let startLetter = string[startIdx];
//       while(string[startIdx] !== string[endIdx]) {
//         map[string[startIdx]]--;
//         startIdx++;
//       }
//     }
//     console.log(result);
//   }
// }

// console.log(longestSubstringWithoutDuplication('clementisacap')) // 'mentisac'




// function longestSubstringWithoutDuplication(string) {
// 	const map = {};
// 	let startIdx = 0;
// 	let wordLength = -Infinity;
// 	let result;
// 	let tempWord;
// 	if(string.length === 1) return string;
// 	for(let endIdx = 0; endIdx < string.length; endIdx++) {
//     tempWord = string.slice(startIdx, endIdx);
//     if(tempWord.length > wordLength) {
//       result = tempWord;
//       wordLength = result.length;
//     }
//     const letter = string[endIdx];
// 		if(map[letter] === undefined) {
// 			map[letter] = 1;
// 		} else {
//       let startLetter = string[startIdx];
//       console.log(letter, startLetter)
// 			// while(string[startIdx] === letter) {
//         // console.log(result, tempWord)
// 				startIdx++;
// 			// }
//     }
//     // console.log(result, tempWord)
//   }
//   return 'result: ' + result;
// }

// console.log(longestSubstringWithoutDuplication('clementisacap')) // 'mentisac'





// function longestSubstringWithoutDuplication(string) {
// 	const map = {};
// 	let startIdx = 0;
// 	let wordLength = -Infinity;
// 	let result;
// 	let tempWord;
// 	if(string.length === 1) return string;
// 	for(let endIdx = 0; endIdx < string.length; endIdx++) {
//     tempWord = string.slice(startIdx, endIdx+1);
//     if(tempWord.length > wordLength) {
//       result = tempWord;
//       wordLength = result.length;
//     }
//     const letter = string[endIdx];
//     // console.log(map);
// 		if(map[letter] === undefined) {
// 			map[letter] = 1;
// 		} else {
// 			map[letter]++;
// 			while(map[letter] > 1) {
// 				let startLetter = string[startIdx];
// 				if(startLetter === letter) {
// 					map[letter]--;
// 				}
// 				startIdx++;
// 			}
//     }
//     console.log(result, tempWord)
//   }
//   return result;
// }




// function longestSubstringWithoutDuplication(string) {
//   const map = {};
//   let startIdx = 0;
//   let endIdx = 0;
//   let word;
//   let longestWordLength = -Infinity;
//     while(startIdx < string.length && endIdx < string.length) {
//       if(map[string[endIdx]]) {
//         if(endIdx + 1 - startIdx > longestWordLength) {
//           longestWordLength = endIdx + 1 - startIdx;
//           word = string.slice(startIdx, endIdx + 1);
//         }
//         // map = {};
//       } else {
//         map[string[endIdx]] = 1;
//       }
//       endIdx++;
//     }
// }

// console.log(longestSubstringWithoutDuplication('clementisacap')) // 'mentisac'