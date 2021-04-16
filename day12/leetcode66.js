/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 0
  for (let i = digits.length - 1; i > -1; i--) {
    if (i === digits.length - 1) {
      let sum = digits[i] + 1
      digits[i] = sum % 10
      carry = Math.floor(sum / 10)
    } else {
      let sum = digits[i] + carry
      digits[i] = sum % 10
      carry = Math.floor(sum / 10)
    }
  }
  if (carry > 0) {
    digits.unshift(carry)
  }
  return digits
}

let digits = [9,9,9]
digits = plusOne(digits)
console.log(digits)
