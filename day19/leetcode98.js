function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let stack = []
  let inorder = -Infinity

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()
    if (root.val <= inorder) return false
    inorder = root.val
    root = root.right
  }
  return true
}

const root = new TreeNode(5)
root.left = new TreeNode(4)
root.right = new TreeNode(6)
root.right.left = new TreeNode(3)
root.right.right = new TreeNode(7)

const res = isValidBST(root)
console.log(res)
