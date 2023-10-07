// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  if (String(num1).length !== String(num2).length) return false

  let num1Freq = makeFreqCounter(num1)
  let num2Freq = makeFreqCounter(num2)
  for (let key in num1Freq) {
    if (num1Freq[key] !== num2Freq[key]) return false
  }
  return true
}

function makeFreqCounter(num) {
  let string = String(num)
  let obj = {};
  for (let digit of string) {
    obj[digit] = (obj[digit] + 1) || 1
  }
  return obj;
}