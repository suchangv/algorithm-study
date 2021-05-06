function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 === null) return root2
  if (root2 === null) return root1

  let merged = new TreeNode(root1.val + root2.val)
  merged.left = mergeTrees(root1.left, root2.left)
  merged.right = mergeTrees(root1.right, root2.right)
  return merged
}

const root1 = new TreeNode(1)
root1.left = new TreeNode(3)
root1.right = new TreeNode(2)
root1.left.left = new TreeNode(5)

const root2 = new TreeNode(2)
root2.left = new TreeNode(1)
root2.right = new TreeNode(3)
root2.left.right = new TreeNode(4)
root2.right.right = new TreeNode(7)

const res = mergeTrees(root1, root2)
console.log(res)
