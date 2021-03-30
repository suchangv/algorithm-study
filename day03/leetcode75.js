// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

const nums = [2, 0, 2, 1, 1, 0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // let zeroCount = 0
  // let oneCount = 0
  // nums.forEach((i) => {
  //   if (i === 0) zeroCount++
  //   else if (i === 1) oneCount++
  // })

  // for (let i = 0; i < nums.length; i++) {
  //   if (i < zeroCount) {
  //     nums[i] = 0
  //   } else if (i < zeroCount + oneCount) {
  //     nums[i] = 1
  //   } else {
  //     nums[i] = 2
  //   }
  // }
  let zero = -1 // nums[0...zero] = 0
  let two = nums.length // nums[tow...n-1] = 2

  for (let i = 0; i < two; ) {
    if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      two--
      // swap(nums[i], nums[two])
      ;[nums[i], nums[two]] = [nums[two], nums[i]]
    } else {
      zero++
      // swap(nums[i], nums[zero])
      ;[nums[i], nums[zero]] = [nums[zero], nums[i]]
      i++
    }
  }
}

sortColors(nums)

console.log(nums)
