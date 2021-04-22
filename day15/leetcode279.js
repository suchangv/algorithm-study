/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  while (n % 4 === 0) n /= 4
  if (n % 8 === 7) return 4

  for (let i = 0; i * i <= n; i++) {
    if (n - i * i == 0) return 1
  }

  for (let i = 0; i * i < n; i++) {
    for (let j = 0; j * j < n; j++) {
      if (n - i * i - j * j === 0) return 2
    }
  }
  return 3
}

const res = numSquares(12312312312)
console.log(res)
