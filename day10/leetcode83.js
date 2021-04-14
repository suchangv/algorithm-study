const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let cur = head
  while (cur) {
    let next = cur.next

    while (next && cur.val === next.val) {
      next = next.next
      cur.next = next
    }

    cur = cur.next
  }
  return head
}

let head = createLinkedList([1, 1, 2, 3, 3])
head = deleteDuplicates(head)
printLinkedList(head)
