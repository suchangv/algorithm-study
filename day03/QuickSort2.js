const arr = [2, 1, 3, 5, 6, 4]

function quickSort(arr, low, high) {
  console.log(arr)
  if (low < high) {
    // 找寻基准数据的正确索引
    let index = getIndex(arr, low, high)

    // 进行迭代对index之前和之后的数据进行相同的操作使整个数组变成有序
    quickSort(arr, low, index - 1)
    quickSort(arr, index + 1, high)
  }
}

function getIndex(arr, low, high) {
  // 基准数据
  let tmp = arr[low]
  while (low < high) {
    // 当队尾的元素大于等于基准数据时,向前挪动high指针
    while (low < high && arr[high] >= tmp) {
      high--
    }
    // 如果队尾元素小于tmp了,需要将其赋值给low
    arr[low] = arr[high]
    // 当队首元素小于等于tmp时,向前挪动low指针
    while (low < high && arr[low] <= tmp) {
      low++
    }
    // 当队首元素大于tmp时,需要将其赋值给high
    arr[high] = arr[low]
  }
  // 跳出循环时low和high相等,此时的low或high就是tmp的正确索引位置
  // 由原理部分可以很清楚的知道low位置的值并不是tmp,所以需要将tmp赋值给arr[low]
  arr[low] = tmp
  return low // 返回tmp的正确位置
}

quickSort(arr, 0, arr.length - 1)
// console.log(arr)
