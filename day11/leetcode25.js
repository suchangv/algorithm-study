const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  
}
let head = createLinkedList([1, 2, 3, 4, 5])
let k = 3
head = reverseKGroup(head, k)
printLinkedList(head)
