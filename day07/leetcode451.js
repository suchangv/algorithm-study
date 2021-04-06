/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    let value = map.get(s[i]) || 0
    map.set(s[i], value + 1)
  }

  const arr = []
  for (let [key, value] of map) {
    arr[value] ? arr[value].push(key) : (arr[value] = [key])
  }

  let result = ''
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i]) {
      for (const char of arr[i]) {
        for (let k = 0; k < i; k++) {
          result += char
        }
      }
    }
  }

  return result
}

let s = 'tree'

let result = frequencySort(s)

console.log(result)
