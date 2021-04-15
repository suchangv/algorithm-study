const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummyHead = new ListNode(0)
  dummyHead.next = head

  let p = dummyHead
  while (p.next !== null && p.next.next !== null) {
    let node1 = p.next
    let node2 = node1.next
    let next = node2.next

    node2.next = node1
    node1.next = next
    p.next = node2

    p = node1
  }
  return dummyHead.next
}

let head = createLinkedList([1, 2, 3, 4])
head = swapPairs(head)
printLinkedList(head)
