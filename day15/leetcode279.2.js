/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const q = []
  q.push([n, 0])
  const visited = []
  visited[n] = true

  while (q.length !== 0) {
    let num = q[0][0] // 当前的数字
    let step = q[0][1] // 步数
    q.shift()

    for (let i = 1; ; i++) {
      let a = num - i * i
      if (a < 0) break
      if (a === 0) return step + 1
      if (!visited[a]) {
        q.push([a, step + 1])
        visited[a] = true
      }
    }
  }
}

const res = numSquares(12312312312)
console.log(res)
