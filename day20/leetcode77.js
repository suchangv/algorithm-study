/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []

  const backtrack = (list, start) => {
    if (list.length === k) {
      res.push(list.concat())
      return
    }
    // 还有k - c.length个空位，所以 [i...n]中至少要有k-list.length个元素
    // i最多为n- (k-list.length)+1
    console.log('n', n)
    console.log('n - (k - list.length) + 1', n - (k - list.length) + 1)
    for (let i = start; i <= n - (k - list.length) + 1; i++) {
      list.push(i)
      backtrack(list, i + 1)
      list.pop()
    }
  }

  backtrack([], 1)

  return res
}

let n = 10,
  k = 2

const res = combine(n, k)
console.log(res)
