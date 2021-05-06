function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var kthSmallest = function (root, k) {
  const arr = getArr(root, [])
  return arr[k - 1]
}

function getArr(root, res) {
  if (!root) return
  getArr(root.left, res)
  res.push(root.val)
  getArr(root.right, res)
  return res
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

kthSmallest(root)
