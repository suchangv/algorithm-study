// 给定一个增序排列数组 nums ，你需要在 原地 删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

const nums = [1, 1, 1, 2, 3, 4, 4, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (var i = 0, k = 2; i < nums.length; i++) {
    if (nums[i] > nums[k]) {
      ;[nums[k], nums[i]] = [nums[i], nums[k]]
      k++
    }
  }
  console.log(k)
}

removeDuplicates(nums)
console.log(nums)
