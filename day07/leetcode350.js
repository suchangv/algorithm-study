/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let record = new Map()

  for (let i = 0; i < nums1.length; i++) {
    let value = record.get(nums1[i]) || 0
    record.set(nums1[i], ++value)
  }

  let result = []
  for (let i = 0; i < nums2.length; i++) {
    if (record.get(nums2[i]) > 0) {
      result.push(nums2[i])
      let value = record.get(nums2[i])
      record.set(nums2[i], --value)
    }
  }
  return result
}

let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2]

let result = intersect(nums1, nums2)

console.log(result)
