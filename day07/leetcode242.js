/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const map = new Map()

  for (const char of s) {
    let value = map.get(char) || 0
    map.set(char, value + 1)
  }

  for (const char of t) {
    let value = map.get(char) || 0
    map.set(char, value - 1)
  }

  for (let [key, value] of map) {
    if (value !== 0) return false
  }
  return true
}

let s = 'anagram',
  t = 'nagaram'

let result = isAnagram(s, t)
console.log(result)
