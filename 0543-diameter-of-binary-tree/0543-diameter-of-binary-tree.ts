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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let max = 0
    
    function height(node: TreeNode | null): number{
        if(node == null) return 0
        let ht1 = height(node.left)
        let ht2 = height(node.right)
        max = Math.max(ht1 + ht2, max)
        return Math.max(ht1,ht2) + 1
    }
    height(root)
    return max
};