// 动态规划：
// 将原问题拆解成若干子问题，同时保存子问题的答案，使得每一个子问题只求解一次，最终获得原问题的答案

function fib(n) {
  const memo = []

  memo[0] = 0
  memo[1] = 1
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }
  return memo[n]
}

for (let i = 1; i <= 100; i++) {
  console.log(`i=${i}, fib(${i})=${fib(i)}`)
}
