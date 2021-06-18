/**
 * https://leetcode.com/problems/two-sum/
 */

function twoSum(nums: number[], target: number): number[] {
  let i = 0
  let j = 1

  while (i < nums.length) {
    let num1 = nums[i]
    let num2 = nums[j]

    if (num1 + num2 === target) {
      return [i, j]
    }

    j++

    if (j === nums.length) {
      i++
      j = i + 1
    }
  }

  return []
}