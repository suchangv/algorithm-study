/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set()
  return calc(n, set)
}

/**
 *
 * @param {number} n
 * @param {Set} set
 */
var calc = function (n, set) {
  let result = 0
  let x = n
  while (x > 0) {
    result += (x % 10) ** 2
    x = Math.floor(x / 10)
  }
  if (result === 1) return true
  if (set.has(result)) return false

  set.add(result)
  return calc(result, set)
}

let result = isHappy(19)
console.log(result)
