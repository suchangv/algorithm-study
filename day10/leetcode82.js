const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummyHead = new ListNode(0)
  dummyHead.next = head

  let cur = dummyHead
  while (cur) {
    let next1 = cur.next
    if (next1) {
      let next2 = next1.next
      while (next2 && next1.val === next2.val) {
        next2 = next2.next
      }
      if (next1.next !== next2) {
        cur.next = next2
      } else {
        cur = cur.next
      }
    } else {
      cur = null
    }
  }

  return dummyHead.next
}

let head = createLinkedList([1, 2, 3, 3, 4, 4, 5])
head = deleteDuplicates(head)
printLinkedList(head)
