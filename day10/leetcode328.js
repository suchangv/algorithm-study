const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let odd = new ListNode(0)
  const oddHead = odd
  let even = new ListNode(0)
  const evenHead = even

  let i = 1
  while (head !== null) {
    if (i % 2 !== 0) {
      odd.next = head
      odd = odd.next
    } else {
      even.next = head
      even = even.next
    }
    i++
    head = head.next
  }

  even.next = null
  odd.next = evenHead.next
  return oddHead.next
}

let head = createLinkedList([1, 2, 3, 4, 5])
head = oddEvenList(head)
printLinkedList(head)
