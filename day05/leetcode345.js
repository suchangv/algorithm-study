const s = 'leetcode'

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split('')
  const regex = /a|e|i|o|u|A|E|I|O|U/

  let i = 0,
    j = s.length - 1
  while (i < j) {
    if (!regex.test(s[i])) {
      i++
      continue
    }
    if (!regex.test(s[j])) {
      j--
      continue
    }
    let temp = s[i]
    s[i] = s[j]
    s[j] = temp
    i++, j--
  }
  return s.join('')
}

let result = reverseVowels(s)
console.log(result)
