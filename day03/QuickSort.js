// const nums = [49, 38, 65, 97, 76, 13, 27, 49]
const nums = [3, 2, 1, 5, 6, 4, 7]

/**
 *
 * @param {number[]} arr
 */
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

    while (l < h && arr[l] <= arr[key]) {
      l++
    }

    while (l < h && arr[h] >= arr[key]) {
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

quickSort(nums, 0, nums.length - 1)

console.log(nums)
