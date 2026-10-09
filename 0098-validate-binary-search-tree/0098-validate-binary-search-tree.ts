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

function isValidBST(root: TreeNode | null): boolean {
    
    let x = true
    function preOrder(node: TreeNode | null, lowerBound: number, upperBound: number){
        if(node == null) return false
        console.log("node.val: ", node.val, " lowerBound: ", lowerBound, " upperBound: ", upperBound)
        if(node.val <= node.left?.val || node.val >= node.right?.val){
            x = false
            return false
        } 
        if(node.val <= lowerBound || node.val >= upperBound){
            x = false
            return false
        }
        if(!x) return false
        preOrder(node.left, lowerBound, node.val)
        preOrder(node.right, node.val, upperBound)
        return true
    }
    preOrder(root, -Infinity, Infinity)
    return x
};