function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let arr = []
for (let i = 0; i < 1000; i++) {
  const random = getRandom(0, 1000)
  arr.push(random)
}

arr = arr.sort((a, b) => a - b)

console.log(arr)

// 0,1,2,3,4,5,6,7,8,9

function binarySearch(arr, target) {
  let l = 0
  let r = arr.length - 1

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2)

    if (arr[mid] > target) {
      r = mid - 1
    } else if (arr[mid] < target) {
      l = mid + 1
    } else {
      return mid
    }
  }

  return -1
}

console.log(binarySearch(arr, 10))
