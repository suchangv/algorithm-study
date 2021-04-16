/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function (s) {
  if(s.startsWith('0')) return 0
  let num = 0
  for (let i = 0; i < s.length; ) {
    if ((s[i] === '1' || s[i] === '2') && s[i+1] && s[i+1] !== '0' && Number(s[i+1]) <= 6) {
      num += 2
      i += 2
    } else if(s[i]==='0'){
      i++
    }else{
      num++
      i++
    }
  }
  return num
}

let s = '27'
let res = numDecodings(s)
console.log(res)
