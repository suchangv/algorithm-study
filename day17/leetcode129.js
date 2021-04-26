function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
// var sumNumbers = function (root) {
//   if (!root) return 0

//   if (root.left === null && root.right === null) {
//     return root.val
//   }

//   let leftSum = sumNumbers(root.left)
//   let rightSum = sumNumbers(root.right)

//   return root.val * Math.pow(10,)
// }

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  const paths = []
  const q = [[root, [root.val]]]

  while (q.length !== 0) {
    const node = q[0][0]
    let path = q[0][1]
    q.shift()

    if (node.left === null && node.right === null) {
      paths.push(path)
    }
    if (node.left) {
      q.push([node.left, [...path, node.left.val]])
    }
    if (node.right) {
      q.push([node.right, [...path, node.right.val]])
    }
  }
  let sum = 0
  for (let i = 0; i < paths.length; i++) {
    let item = paths[i]
    item = item.join('')
    item = Number(item)
    sum += item
  }
  return sum
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

const res = sumNumbers(root)
console.log(res)
