function powlogn(x, n) {
  if (n === 0) {
    return 1
  }

  let t = powlogn(x, Math.floor(n / 2))
  if (n % 2) {
    return x * t * t
  }
  return t * t
}

function pown(x, n) {
  let sum = 1
  for (let i = 0; i < n; i++) {
    sum = sum * x
  }
  return sum
}

function f(n) {
  if (n === 0) return 1
  return f(n - 1) + f(n - 1)
}

for (let i = 1; i <= 20; i++) {
  console.time(`2^${i}, nlogn, time = `)
  let result = powlogn(2, i)
  console.timeEnd(`2^${i}, nlogn, time = `)

  console.time(`2^${i}, n, time = `)
  result = pown(2, i)
  console.timeEnd(`2^${i}, n, time = `)

  console.time(`2^${i}, Math.pow, time = `)
  result = Math.pow(2, i)
  console.timeEnd(`2^${i}, Math.pow, time = `)

  console.time(`${i}, f, time = `)
  result = f(i)
  console.timeEnd(`${i}, f, time = `)
}
