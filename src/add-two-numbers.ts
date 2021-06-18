/**
 * https://leetcode.com/problems/add-two-numbers/
 */

interface ListNode {
  val: number
  next: ListNode | null
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

  const list = {
    val: arr[0]
  } as ListNode

  list.next = arrayToListNode(arr.slice(1))

  return list
}

function numberToListNode(n: bigint): ListNode {
  const numberString = n.toString().split('').reverse()
  return arrayToListNode(numberString)
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const result = listNodeToNumber(l1) + listNodeToNumber(l2)
  return numberToListNode(result)
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
