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

const res = []
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === '') return []

  findCombination(digits, 0, '')
}

function findCombination(digits, index, s) {
  if (index === digits.length) {
    res.push(s)
    return
  }

  let c = digits[index]
  let letters = map.get(c)
  for (let i = 0; i < letters.length; i++) {
    findCombination(digits, index + 1, s + letters[i])
  }
}

let digits = '2345'
letterCombinations(digits)
console.log(res)
