let arr = [14, 12, 15, 13, 11, 16]

function MergeSort(array) {
  let len = array.length
  if (len <= 1) {
    return array
  }
  let num = Math.floor(len / 2)
  let left = MergeSort(array.slice(0, num))
  let right = MergeSort(array.slice(num, array.length))
  return merge(left, right)

  function merge(left, right) {
    let [l, r] = [0, 0]
    let result = []
    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l])
        l++
      } else {
        result.push(right[r])
        r++
      }
    }
    result = result.concat(left.slice(l, left.length))
    result = result.concat(right.slice(r, right.length))
    return result
  }
}
arr = MergeSort(arr)
console.log(arr)
