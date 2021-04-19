/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const res = []
  for (let i of intervals) {
    for (let j = 0; j < res.length; j++) {
      let re = res[j]
      if ((i[0] >= re[0] && i[0] <= re[1]) || (re[0] >= i[0] && re[0] <= i[1])) {
        // 可合并
        let left = Math.min(i[0], re[0])
        let right = Math.max(i[1], re[1])
        i[0] = left
        i[1] = right
      } else {
        continue
      }
      res.splice(j, 1)
      j--
    }
    res.push(i)
  }
  return res
}

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]
const res = merge(intervals)
console.log(res)
