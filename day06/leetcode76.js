var s = 'ADOBECODEBANCEFGBA',
  t = 'ABC'

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return ''
  var res = [-1, s.length]

  var l = 0,
    r = t.length - 1
  // [l...r]是滑动窗口

  var need = new Array(64)
  need.fill(0)
  var window = new Array(64)
  window.fill(0)

  for (var i = 0; i < t.length; i++) {
    need[t.charCodeAt(i) - 65]++
    window[s.charCodeAt(i) - 65]++
  }

  while (l < s.length && r < s.length) {
    if (!t.includes(s[l])) {
      l++
      continue
    }

    if (!isContains(window, need)) {
      window[s.charCodeAt(++r) - 65]++
    } else {
      if (r - l + 1 === t.length) return s.slice(l, r + 1)
      if (r - l < res[1] - res[0]) {
        res[0] = l
        res[1] = r
      }

      window[s.charCodeAt(l++) - 65]--
    }
  }

  if (res[0] > -1) {
    return s.slice(res[0], res[1] + 1)
  } else {
    return ''
  }
}

function isContains(a, b) {
  for (var i = 0; i < b.length; i++) {
    if (b[i] === 0) continue
    if (a[i] < b[i]) return false
  }
  return true
}

var result = minWindow(s, t)
console.log(result)
