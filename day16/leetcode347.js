/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map()
  for (let num of nums) {
    if (!map.get(num)) map.set(num, 0)
    map.set(num, map.get(num) + 1)
  }
  const arr = Array.from(map)
  arr.sort((a, b) => b[1] - a[1])
  const res = []
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0])
  }
  return res
}

let nums = [2, 2, 3, 1, 1, 1],
  k = 2
const res = topKFrequent(nums, k)
console.log(res)
