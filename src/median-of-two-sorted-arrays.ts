/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 */

function mergeArrays (nums1: number[], nums2: number[]): number[] {
  const output = []
  let i1 = 0, i2 = 0

  while (i1 < nums1.length && i2 < nums2.length) {
    if (nums1[i1] < nums2[i2]) {
      output.push(nums1[i1])
      i1++
    } else {
      output.push(nums2[i2])
      i2++
    }
  }

  output.push(...nums1.slice(i1))
  output.push(...nums2.slice(i2))

  return output
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergedArray = mergeArrays(nums1, nums2)

  if (mergedArray.length % 2 === 0) {
    const middle1 = (mergedArray.length / 2) - 1
    const middle2 = mergedArray.length / 2
    const sum = mergedArray[middle1] + mergedArray[middle2]
    return sum / 2
  } else {
    const middle = Math.floor(mergedArray.length / 2)
    return mergedArray[middle]
  }
}

console.log(findMedianSortedArrays([1,3], [2]) === 2)
console.log(findMedianSortedArrays([1,2], [3,4]) === 2.5)
console.log(findMedianSortedArrays([0,0], [0,0]) === 0)
console.log(findMedianSortedArrays([], [1]) === 1)
console.log(findMedianSortedArrays([2], []) === 2)
