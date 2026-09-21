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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	let node = root
    let small: number;
    let big: number;
    if(p.val < q.val){
        small = p.val
        big = q.val
    }else{
        small = q.val
        big = p.val
    }
    while(node != null){
        if(node.val >= small && node.val <= big) return node
        if(node.val >= small && node.val >= big) node = node.left
        else node = node.right
    }
    return null
};