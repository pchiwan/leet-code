/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 */

interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

function find (node: TreeNode, set: Set<number>, target: number): boolean {
  if (node === null) {
    return false
  }
  if (set.has(target - node.val)) {
    return true
  }
  set.add(node.val)
  return find(node.left, set, target) || find(node.right, set, target)
}

function findTarget(root: TreeNode | null, target: number): boolean {
  const set = new Set<number>()
  return find(root, set, target)
}

const tree = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

console.log(findTarget(tree, 9) === true)
console.log(findTarget(tree, 28) === false)
