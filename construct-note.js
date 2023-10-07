/**
 * Build two frequency counters. If any of the message characters are not
 *  found in the 'letters' characters, or if there are not enough of them,
 *  return false. Otherwise return true.
 */

// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if (message.length > letters.length) return false
  let messageFreq = makeFreqCounter(message)
  let lettersFreq = makeFreqCounter(letters)
  for (let key in messageFreq) {
    if (messageFreq[key] > lettersFreq[key]) return false
  }
  return true
}

function makeFreqCounter(str) {
  freqCounter = {}
  for (let letter of str) {
     freqCounter[letter] = (freqCounter[letter] += 1) || 1;
  }
  return freqCounter;
}