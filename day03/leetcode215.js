// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

const nums = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8]
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

function find(nums, left, right, k) {
  if (left > right) return

  let key = nums[low]
  let i = left
  let j = right

  while (i < j) {
    while (i < j && nums[j] <= key) {
      j--
    }
    nums[i] = nums[j]
    while (i < j && nums[i] >= key) {
      i++
    }
    nums[j] = num[i]
    nums[i] = key
    if (i === k) {
      return
    }else if(i)
  }
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const result = findKthLargest(nums, k)
console.log(result)
