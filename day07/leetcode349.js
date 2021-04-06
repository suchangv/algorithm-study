/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 使用set 76ms
  // 整体来看，时间复杂度应该是O(n)级别的

  // O(n)
  let set = new Set(nums1)

  let result = new Set()

  // O(n)
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      result.add(nums2[i])
    }
  }

  // O(n)
  return Array.from(result)

  // 不使用set 96ms
  // let result = [] 
  // let nums = [...nums1, ...nums2]
  // for (let i = 0; i < nums.length; i++) {
  //   if (result.includes(nums[i])) continue

  //   if (nums1.includes(nums[i]) && nums2.includes(nums[i])) {
  //     result.push(nums[i])
  //   }
  // }
  // return result
}

let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2]

let result = intersection(nums1, nums2)
console.log(result)
