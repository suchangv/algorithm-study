// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0,
    temp = []
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      temp.push(nums1[i++])
    } else {
      temp.push(nums2[j++])
    }
  }

  while (i < m) {
    temp.push(nums1[i++])
  }
  while (j < n) {
    temp.push(nums2[j++])
  }

  for (i = 0; i < m + n; i++) {
    nums1[i] = temp[i]
  }
}

merge(nums1, m, nums2, n)

console.log(nums1)
