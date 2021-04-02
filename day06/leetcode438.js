let s = 'cbaebabacd'
let p = 'abc'

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let l = 0
  let r = p.length - 1 // [l...r]是我们的滑动窗口

  //记录p的所有字母及其个数
  let need = new Array(26)
  need.fill(0)
  let window = new Array(26)
  window.fill(0)

  let res = []

  for (let i = 0; i < p.length; i++) {
    need[p.charCodeAt(i) - 97]++
    window[s.charCodeAt(i) - 97]++
  }

  while (r < s.length) {
    if (isSame(need, window)) res.push(l)

    window[s.charCodeAt(++r) - 97]++
    window[s.charCodeAt(l++) - 97]--
  }
  return res
}

function isSame(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}

let res = findAnagrams(s, p)
console.log(res)
