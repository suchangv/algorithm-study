const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummyNode = new ListNode(-1)
  dummyNode.next = head

  let cur = dummyNode
  while (cur) {
    let next = cur.next
    while (next && next.val === val) {
      next = next.next
    }
    cur.next = next
    cur = cur.next
  }

  return dummyNode.next
}

let head = createLinkedList([7, 7, 7, 7])
let val = 7

head = removeElements(head, val)
printLinkedList(head)
