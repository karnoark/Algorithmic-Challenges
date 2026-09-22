/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    let loMap = new Map<number, Array<number>>()
    // let depth = 0
    function dft(node: TreeNode | null, depth) {
        if(node == null) return
        loMap.set(depth, [...(loMap.get(depth) || []), node.val])
        dft(node.left, depth + 1)
        dft(node.right, depth + 1)
    }
    dft(root, 0)
    const arr: number[][] = []
    arr.push(...loMap.values())
    return arr
};