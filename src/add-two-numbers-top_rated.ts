/**
 * https://leetcode.com/problems/add-two-numbers/
 */

class ListNode {
  val: number
  next: ListNode

  constructor (value: number) {
    this.val = value
    this.next = null
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const output = new ListNode(0)
  let node1 = l1
  let node2 = l2
  let current = output
  let carry = 0

  while (node1 != null || node2 != null) {
    const value1 = node1 !== null ? node1.val : 0
    const value2 = node2 !== null ? node2.val : 0

    const sum = value1 + value2 + carry
    carry = Math.floor(sum / 10)

    current.next = new ListNode(sum % 10)
    current = current.next

    node1 = node1 !== null ? node1.next : node1
    node2 = node2 !== null ? node2.next : node2
  }

  if (carry > 0) {
    current.next = new ListNode(carry)
  }

  return output.next
}

function listNodeToNumber(list: ListNode): bigint {
  let node = list
  let numberString = ''

  while (node !== null) {
    numberString = `${node.val}${numberString}`
    node = node.next
  }

  return BigInt(numberString)
}


function arrayToListNode (arr: any[]): ListNode {
  if (!arr.length) {
    return null
  }

  const list = new ListNode(arr[0])
  list.next = arrayToListNode(arr.slice(1))

  return list
}

console.log(addTwoNumbers(
  arrayToListNode([2, 4, 3]),
  arrayToListNode([5, 6, 4])
)) // [7,0,8]
console.log(addTwoNumbers(
  arrayToListNode([0]),
  arrayToListNode([0])
)) // [0]
console.log(addTwoNumbers(
  arrayToListNode([9, 9, 9, 9, 9, 9, 9]),
  arrayToListNode([9, 9, 9, 9])
)) // [8,9,9,9,0,0,0,1]
