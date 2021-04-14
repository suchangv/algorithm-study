const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let nums1 = []
  let nums2 = []

  while (l1) {
    nums1.push(l1.val)
    l1 = l1.next
  }

  while (l2) {
    nums2.push(l2.val)
    l2 = l2.next
  }

  let head = null
  let tail = null
  let carry = 0
  while (nums1.length > 0 || nums2.length > 0) {
    let n1 = nums1.pop() || 0
    let n2 = nums2.pop() || 0
    let sum = n1 + n2 + carry
    if (!head) {
      head = tail = new ListNode(sum % 10)
    } else {
      // tail.next = new ListNode(sum % 10)
      // tail = tail.next
      head = new ListNode(sum % 10)
      head.next = tail
      tail = head
    }
    carry = Math.floor(sum / 10)
  }
  if (carry > 0) {
    head = new ListNode(carry)
    head.next = tail
    tail = head
  }
  return head
}

let l1 = createLinkedList([5])
let l2 = createLinkedList([5])
let res = addTwoNumbers(l1, l2)
printLinkedList(res)
