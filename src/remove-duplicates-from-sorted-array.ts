/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

function removeDuplicates(nums: number[]): number {
  const set = new Set();
  let index = 0;

  while (index < nums.length) {
    if (set.has(nums[index])) {
      nums.splice(index, 1);
    } else {
      set.add(nums[index]);
      index++;
    }
  }

  return nums.length;
}

console.log(removeDuplicates([1, 1, 2]) === 2); // [1,2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) === 5); // [0,1,2,3,4]
console.log(removeDuplicates([0, 1, 1, 1, 2, 3, 3, 4, 5, 6, 7]) === 8); // [0,1,2,3,4,5,6,7]
