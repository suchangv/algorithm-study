/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const q = []
  q.push([n, 0])
  // const visited = []
  // visited[n] = true
  while (q.length !== 0) {
    console.log(q)
    let num = q[0][0]
    let step = q[0][1]
    q.shift()

    if (num === 0) return step

    for (let i = 1; ; i++) {
      let a = num - i * i
      if (a < 0) break
      // if (!visited[a]) {
      q.push([a, step + 1])
      //   visited[a] = true
      // }
    }
  }
}
// var isSquare = function (n) {
//   let sq = Math.floor(Math.sqrt(n))
//   return sq * sq === n
// }

// var numSquares = function (n) {
//   while (n & (3 == 0)) {
//     n >>= 2
//   }
//   if (n & (7 === 7)) {
//     return 4
//   }
//   if (isSquare(n)) return 1
//   for (let i = 1; i < Math.floor(n ** 0.5) + 1; i++) {
//     if (isSquare(n - i * i)) return 2
//   }
//   return 3
// }

let n = 12
const res = numSquares(n)
console.log(res)
