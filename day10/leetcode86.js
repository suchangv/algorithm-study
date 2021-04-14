const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let small = null
  let big = null
  let cur = head
  while (cur) {
    if (cur.val < x) {
      if (small === null) {
        small = new ListNode(cur.val)
      } else {
        let last = null
        let curSmall = small
        while (curSmall) {
          if (curSmall.next === null) last = curSmall
          curSmall = curSmall.next
        }
        last.next = new ListNode(cur.val)
      }
    } else {
      if (big === null) {
        big = new ListNode(cur.val)
      } else {
        let last = null
        let curBig = big
        while (curBig) {
          if (curBig.next === null) last = curBig
          curBig = curBig.next
        }
        last.next = new ListNode(cur.val)
      }
    }
    cur = cur.next
  }

  if (small !== null && big !== null) {
    let last = null
    let curSmall = small
    while (curSmall) {
      if (curSmall.next === null) last = curSmall
      curSmall = curSmall.next
    }
    last.next = big

    return small
  } 
  return head
}

let head = createLinkedList([1, 4, 3, 2, 5, 2])
head = partition(head, 3)
printLinkedList(head)
