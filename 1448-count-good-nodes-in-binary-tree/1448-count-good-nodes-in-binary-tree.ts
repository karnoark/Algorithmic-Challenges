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

function goodNodes(root: TreeNode | null): number | null {
    if(root == null) return 0
    let goodNodes = 0
    function preOrder(node: TreeNode | null, maxSoFar: number): void{
        if(node == null) return
        if(node.val >= maxSoFar){
            goodNodes++
            maxSoFar = node.val
        }
        preOrder(node.left, maxSoFar)
        preOrder(node.right, maxSoFar)
    }
    preOrder(root, -Infinity)
    return goodNodes
};