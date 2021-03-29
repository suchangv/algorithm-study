class MyVector {
  constructor() {
    this.data = new Array(10)
    this.capacity = 10
    this.size = 0
  }

  resize(newCapacity) {
    let newData = new Array(newCapacity)
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i]
    }
    this.data = newData
    this.capacity = newCapacity
  }

  // Average: O(1) 平均复杂度仍然是O(1)
  push(e) {
    if (this.size === this.capacity) {
      this.resize(2 * this.capacity)
    }
    this.data[this.size++] = e
  }

  pop() {
    return this.data[--this.size]
  }
}

let vector = new MyVector()
for (let i = 0; i < 1000; i++) {
  vector.push(i)
}
for (let i = 0; i < 100; i++) {
  console.log(vector.pop())
}
console.log(vector)
