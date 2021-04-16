/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
  ])
  if (digits === '') return []
  else {
    let res = []
    for (let digit of digits) {
      let newRes = []
      for (let char of map.get(digit)) {
        if (res.length === 0) {
          newRes.push(char)
        } else {
          for (let item of res) {
            newRes.push(item + char)
          }
        }
      }
      res = newRes
    }
    return res
  }
}

let digits = '2345'
let res = letterCombinations(digits)
console.log(res)
