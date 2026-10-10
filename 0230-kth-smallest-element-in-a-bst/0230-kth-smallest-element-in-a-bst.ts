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

function kthSmallest(root: TreeNode | null, k: number): number {
    let kthSmallest = root.val
    function inOrder(node: TreeNode){
        if(node == null) return null
        inOrder(node.left)
        console.log(node.val)
        k--
        if(k == 0) kthSmallest = node.val
        k > 0 && inOrder(node.right)
    }
    inOrder(root)
    return kthSmallest
};