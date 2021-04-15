function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function Command(s, node) {
  this.s = s
  this.node = node
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = []
  if (!root) return res

  const stack = []
  stack.push(new Command('go', root))
  while (stack.length !== 0) {
    const command = stack.pop()
    if (command.s === 'print') {
      res.push(command.node.val)
    } else {
      if (command.node.right) {
        stack.push(new Command('go', command.node.right))
      }
      if (command.node.left) {
        stack.push(new Command('go', command.node.left))
      }
      stack.push(new Command('print', command.node))
    }
  }
  return res
}

let root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)
let res = preorderTraversal(root)
console.log(res)
