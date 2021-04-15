const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}

let head = createLinkedList([4, 5, 1, 9])
let node = head.next
deleteNode(node)
printLinkedList(head)
