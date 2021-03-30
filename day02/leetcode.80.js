// 给定一个增序排列数组 nums ，你需要在 原地 删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

const nums = [1, 1, 1, 1, 2, 3, 4, 4, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var len = 0
  for (var i = 0; i < nums.length; i++) {
    if (len < 2 || nums[i] != nums[len - 2]) {
      nums[len++] = nums[i]
    }
  }
  return len
}

removeDuplicates(nums)
console.log(nums)
