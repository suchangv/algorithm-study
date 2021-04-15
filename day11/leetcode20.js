/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = []
  for (let c of s) {
    if (c === '(') arr.push(')')
    else if (c === '{') arr.push('}')
    else if (c === '[') arr.push(']')
    else if (arr.length === 0 || c !== arr.pop()) return false
  }
  return arr.length === 0
}

let s = '()[]{}'
let res = isValid(s)
console.log(res)
