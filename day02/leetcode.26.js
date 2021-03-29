// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

const nums = [1, 1, 2, 2, 2, 3, 3]

//  1,1,2,2,2,3,4,5,5,5,5,6,7

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[k] < nums[i]) {
      k++
      nums[k] = nums[i]
    }
  }
  nums.splice(k, nums.length - k - 1)
  return nums.length
}

removeDuplicates(nums)

console.log(nums)
