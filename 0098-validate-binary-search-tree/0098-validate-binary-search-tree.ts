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
    function isValid(node: TreeNode | null, lowerBound: number | null, upperBound: number | null){
        if(node == null) return true
        if(
            (lowerBound != null && node.val <= lowerBound) || 
            (upperBound != null && node.val >= upperBound)
        ){
            return false
        }
        return (
            isValid(node.left, lowerBound, node.val) &&
            isValid(node.right, node.val, upperBound)
        )
    }
    return isValid(root, null, null)
};