for (let x = 1; x <= 9; x++) {
  let n = Math.pow(10, x)

  let startTime = Date.now()

  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += i
  }

  let endTime = Date.now()

  console.log(`10^${x} : ${(endTime - startTime) / 1000} s`)
}

// 如果想在1s内解决问题
// O(n^2)的算法可以处理大约10^4级别的数据
// O(n)的算法可以处理大约10^8级别的数据
// O(nlogn)的算法可以处理大约10^7级别的数据