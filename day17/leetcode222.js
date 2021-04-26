function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let count = { value: 0 }
  if (!root) return 0
  preorder(root, count)
  return count.value
}

function preorder(root, count) {
  if (!root) return
  count.value++
  preorder(root.left, count)
  preorder(root.right, count)
}

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

const res = countNodes(root)
console.log(res)
