// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

const nums = [0, 1, 0, 3, 12]

// 0 1 0 3 12
// 1 0 0 3 12
// 1 3 0 0 12
// 1 3 12 0 0

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[j] === 0) {
  //       ;[nums[i], nums[j]] = [nums[j], nums[i]]
  //     }
  //   }
  // }
  for (let i = 0, k = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // nums[k++] = nums[i]
      ;[nums[k], nums[i]] = [nums[i], nums[k]]
      k++
    }
  }
}

moveZeroes(nums)

console.log(nums)
