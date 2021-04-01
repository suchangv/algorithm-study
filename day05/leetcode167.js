const numbers = [2, 7, 11, 15]
const target = 13

var twoSum = function (numbers, target) {
  let i = 0,
    j = numbers.length - 1
  while (i < j) {
    if (numbers[i] + numbers[j] > target) {
      j--
    } else if (numbers[i] + numbers[j] < target) {
      i++
    } else {
      return [i + 1, j + 1]
    }
  }
}
