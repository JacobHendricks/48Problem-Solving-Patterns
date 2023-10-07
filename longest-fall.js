// Write a function called longestFall, which accepts an array of integers, and returns the length of the longest consecutive decrease of integers.

// Examples:
//              1  2
// longestFall([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
// longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
// longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers
// longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
// longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
// longestFall([]) // 0



// add whatever parameters you deem necessary
function longestFall(arr) {
  if (arr.length === 0) return 0;
  let longest = 1
  let current = 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      current += 1;
    } else {
      current = 1;
    }
    if (current > longest) longest = current
  }
  return longest;
}
