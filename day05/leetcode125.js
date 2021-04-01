/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function (s) {
  let i = 0, j = s.length - 1
  while (i < j) {
      if (!isChar(s[i])) {
          i++
          continue
      }
      if (!isChar(s[j])) {
          j--
          continue
      }
      if (s[i].toLowerCase() !== s[j].toLowerCase()) {
          return false
      }
      i++ , j--
  }
  return true
};

function isChar(c) {
  return /[a-zA-Z0-9]/.test(c)
}

let result = isPalindrome("OP")
console.log(result)