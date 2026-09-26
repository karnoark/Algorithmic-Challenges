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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if(!subRoot) return true;
    if(!root) return false
    if(isIdentical(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)  
};

function isIdentical(node1: TreeNode, node2: TreeNode){
         if (!node1 && !node2) return true;
         if (!node1 || !node2) return false;
        return (node1.val == node2.val) && isIdentical(node1.left, node2.left) && isIdentical(node1.right, node2.right)
    }