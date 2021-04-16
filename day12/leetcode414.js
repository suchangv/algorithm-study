/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let count = 0,
    maxv = -Infinity

  let a = -Infinity,
    b = -Infinity,
    c = -Infinity

  for (let e of nums) {
    if (count === 0) {
      a = e
      count++
    } else if (count === 1 && e != a) {
      b = e
      count++
    } else if (count === 2 && e != b && e != b) {
      c = e
      count++
    } else if (count === 3 && e > c && e !== a && e !== b) {
      c = e
    }

    if (b < c) {
      let temp = b
      b = c
      c = temp
    }
    if (a < b) {
      let temp = a
      a = b
      b = temp
    }
    maxv 
  }
}
