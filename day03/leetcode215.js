// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

const nums = [2, 1, 3, 5, 6, 4]
const k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let result = find(nums, 0, nums.length - 1, 2)
  return nums[result]
}

function find(arr, low, high, k) {
  if (low < high) {
    let index = getIndex(arr, low, high)

    if (arr.length - index === k) {
      return index
    } else if (arr.length - index > k) {
      return find(arr, index, high, k)
    } else {
      return find(arr, low, index, k)
    }
  }
}

function getIndex(arr, low, high, k) {
  let tmp = arr[low]
  while (low < high) {
    while (low < high && arr[high] >= tmp) {
      high--
    }
    arr[low] = arr[high]
    while (low < high && arr[low] <= tmp) {
      low++
    }
    arr[high] = arr[low]
  }

  arr[low] = tmp
  return low
}

const result = findKthLargest(nums, k)
console.log(result)
