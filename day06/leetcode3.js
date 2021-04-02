const s = 'abcabcbb'

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0
  let r = -1 // [l...r]是我们的滑动窗口
  let max = 0

  const slice = []
  while (l < s.length) {
    if (r + 1 < s.length && !slice.includes(s[r + 1])) {
      r++
      slice.push(s[r])
    } else {
      slice.shift()
      l++
    }
    max = Math.max(max, r - l + 1)
  }
  return max
}

let result = lengthOfLongestSubstring(s)

console.log(result)
