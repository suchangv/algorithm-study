const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 扫描一遍
  let dummyNode = new ListNode(0)
  dummyNode.next = head
  let p1 = dummyNode,
    p2 = dummyNode
  for (let i = 0; i < n + 1; i++) {
    p2 = p2.next
  }
  while (p2) {
    p2 = p2.next
    p1 = p1.next
  }
  p1.next = p1.next.next
  return dummyNode.next
}

let head = createLinkedList([1, 2, 3, 4, 5])
let n = 2
head = removeNthFromEnd(head, n)
printLinkedList(head)
