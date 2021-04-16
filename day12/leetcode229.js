var majorityElement = function (nums) {
  const map = new Map()
  for (let num of nums) {
    let value = map.get(num) || 0
    map.set(++value)
  }

  const res = []
  for (let [key, value] of map) {
    if (value > nums.length / 3) {
      res.push(key)
    }
  }

  return res
}

let nums = [3, 2, 3]
let res = majorityElement(nums)
console.log(res)
