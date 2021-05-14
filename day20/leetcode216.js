/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = []
  const backtrack = (list, sum, start) => {
    if (list.length === k && sum === n) {
      res.push(list.concat())
      return
    }
    if (list.length > k || sum > n) {
      return
    }

    for (let i = start; i < 9 - (k - list.length) + 2; i++) {
      list.push(i)
      backtrack(list, sum + i, i + 1)
      list.pop()
    }
  }
  backtrack([], 0, 1)
  return res
}

let k = 3,
  n = 9

const res = combinationSum3(k, n)
console.log(res)
