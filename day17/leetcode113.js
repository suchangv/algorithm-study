function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const res = bfs(root)
  console.log(res)
  // return res.filter((item) => item.reduce((s, a) => s + a) === targetSum)
}

function bfs(root) {
  let res = []
  if (!root) return res

  if (root.left === null && root.right === null) {
    return [[root.val]]
  }

  let leftArr = bfs(root.left)
  for (let i = 0; i < leftArr.length; i++) {
    leftArr[i].unshift(root.val)
    res.push(leftArr[i])
  }

  let rightArr = bfs(root.right)
  for (let i = 0; i < rightArr.length; i++) {
    rightArr[i].unshift(root.val)
    res.push(rightArr[i])
  }

  return res
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

const res = pathSum(root, 30)
console.log(res)
