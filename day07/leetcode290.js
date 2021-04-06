/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const strs = s.split(' ')
  if (pattern.length !== strs.length) return false

  const map1 = new Map()
  const map2 = new Map()
  for (let i = 0; i < pattern.length; i++) {
    map1.set(pattern[i], strs[i])
    map2.set(strs[i], pattern[i])
  }

  for (let i = 0; i < strs.length; i++) {
    if (strs[i] !== map1.get(pattern[i])) return false
    if (pattern[i] !== map2.get(strs[i])) return false
  }
  return true
}

let pattern = 'abba',
  str = 'dog cat cat dog'

let result = wordPattern(pattern, str)

console.log(result)
