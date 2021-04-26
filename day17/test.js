function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 *
 * @param {number[]} arr
 */
function createTree(arr) {
  if (arr.length === 0) return null

  let root = new TreeNode(arr[0])
  setChildren(root, arr, 0)
  return root
}

function setChildren(root, arr, index) {
  if (index >= arr.length) return

  let leftIndex = index * 2 + 1
  let rightIndex = index * 2 + 2

  if (leftIndex >= arr.length || rightIndex >= arr.length) return

  let left = arr[leftIndex] ? new TreeNode(arr[leftIndex]) : null
  let right = arr[rightIndex] ? new TreeNode(arr[rightIndex]) : null

  root.left = left
  root.right = right

  if (left) {
    setChildren(root.left, arr, leftIndex)
  }
  if (right) {
    setChildren(root.right, arr, rightIndex)
  }
}

let arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]
let root = createTree(arr)
console.log(root)

module.exports = {
  TreeNode
}
