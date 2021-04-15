const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(0)
  let tail = head
  while (l1 || l2) {
    if (l1 && l2) {
      let n1 = l1.val
      let n2 = l2.val
      if (n1 < n2) {
        tail.next = new ListNode(n1)
        l1 = l1.next
      } else {
        tail.next = new ListNode(n2)
        l2 = l2.next
      }
    } else if (l1) {
      let n1 = l1.val
      tail.next = new ListNode(n1)
      l1 = l1.next
    } else if (l2) {
      let n2 = l2.val
      tail.next = new ListNode(n2)
      l2 = l2.next
    }
    tail = tail.next
  }
  return head.next
}

let l1 = createLinkedList([1, 2, 4])
let l2 = createLinkedList([1, 3, 4])
let head = mergeTwoLists(l1, l2)
printLinkedList(head)
