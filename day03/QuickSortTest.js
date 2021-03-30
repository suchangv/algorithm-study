function quickSort(arr, low, high) {
  if (low >= high) return

  let l = low,
    h = high,
    key = low

  while (l < h) {
    if (arr[l] > arr[key] && arr[h] < arr[key]) {
      swap(arr, l, h)
      l++, h--
    }

    if (arr[l] <= arr[key]) {
      l++
    }

    if (arr[h] >= arr[key]) {
      h--
    }
  }

  swap(arr, key, h)

  quickSort(arr, low, h)
  quickSort(arr, l, high)
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function generateRandomArray(n, min, max) {
  const arr = []
  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    arr.push(random)
  }
  return arr
}

function isEqual(a, b, n) {
  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) {
      return false
    }
  }
  return true
}

function copyArr(arr) {
  const copy = []
  for (let i = 0; i < arr.length; i++) {
    copy[i] = arr[i]
  }
  return copy
}

for (let i = 1; i < 15; i++) {
  let n = Math.pow(2, i)
  const arr = generateRandomArray(n, 0, 10000)

  const copy = copyArr(arr)

  console.time(`quickSort 2^${i}`)
  quickSort(arr, 0, arr.length - 1)
  console.timeEnd(`quickSort 2^${i}`)

  console.time(`Array.prototype.sort 2^${i}`)
  copy.sort((a, b) => a - b)
  console.timeEnd(`Array.prototype.sort 2^${i}`)

  if (!isEqual(arr, copy)) {
    throw new Error()
  }
}
