// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

let nums1 = [0],
  m = 0,
  nums2 = [1],
  n = 1

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; i < m + n; i++, j++) {
    nums1[i] = nums2[j]
  }
  nums1.sort((a, b) => a - b)
}

merge(nums1, m, nums2, n)

console.log(nums1)
