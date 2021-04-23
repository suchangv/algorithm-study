function PriorityQueue() {
  this.value = []
}

PriorityQueue.prototype.push = function (item) {
  for (let i = 0; i < this.value.length; i++) {
    if (item[1] < this.value[i][1]) {
      this.value.splice(i, 0, item)
      return
    }
  }
  this.value.push(item)
}

PriorityQueue.prototype.pop = function () {
  return this.value.shift()
}

Object.defineProperty(PriorityQueue.prototype, 'size', {
  get: function () {
    return this.value.length
  }
})

Object.defineProperty(PriorityQueue.prototype, 'top', {
  get: function () {
    return this.value[0]
  }
})

/**
 *
 * @param {number[]} nums 数组
 * @param {*} k
 */
var topKFrequent = function (nums, k) {
  const freq = new Map()
  for (let num of nums) {
    if (!freq.get(num)) freq.set(num, 0)
    freq.set(num, freq.get(num) + 1)
  }

  const pq = new PriorityQueue()

  for (let [key, value] of freq) {
    if (pq.size === k) {
      if (value > pq.top[1]) {
        pq.pop()
        pq.push([key, value])
      }
    } else {
      pq.push([key, value])
    }
  }
  return pq.value.map((item) => item[0])
}

let nums = [-1, 1, 4, -4, 3, 5, 4, -2, 3, -1],
  k = 3
const res = topKFrequent(nums, k)
console.log(res)
