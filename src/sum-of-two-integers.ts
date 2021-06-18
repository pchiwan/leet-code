/**
 * https://leetcode.com/problems/sum-of-two-integers/
 */

function getSum(a: number, b: number): number {
  let i

  if (b < 0) {
    i = b
    let j = -1

    while (j >= a) {
      j--
      i--
    }

  } else {
    i = a
    let j = 1

    while (j <= b) {
      j++
      i++
    }
  }

  return i
}

console.log(getSum(1, 2) === 3)
console.log(getSum(2, 3) === 5)
console.log(getSum(-12, -8) === -20)
console.log(getSum(-12, 4) === -8)
