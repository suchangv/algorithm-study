const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}
let head = createLinkedList([1, 2, 3, 4, 5])
head = middleNode(head)
printLinkedList(head)
