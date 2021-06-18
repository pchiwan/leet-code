/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 */

interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

type TreeArray = [number, ...(number | null)[]]

function treeToArray(node: TreeNode): TreeArray {
  const output = [
    ...(node.left !== null ? treeToArray(node.left) : []),
    node.val,
    ...(node.right !== null ? treeToArray(node.right) : []),
  ] as TreeArray

  return output
}

function findTarget(root: TreeNode | null, target: number): boolean {
  const treeArray = treeToArray(root)

  let i = 0
  const set = new Set()

  while (i < treeArray.length) {
    if (set.has(target - treeArray[i])) {
      return true
    }
    set.add(treeArray[i])
    i++
  }

  return false
};

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

console.log(findTarget(tree, 9))
console.log(findTarget(tree, 28))
