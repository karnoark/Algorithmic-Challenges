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

function rightSideView(root: TreeNode | null): number[] {
    if(root == null) return []
    const depthMap = new Map<number, number[]>()
    const rsv = []

    function preOrder(node: TreeNode, depth: number){
        if(node == null) return
        depthMap.set(depth, [...(depthMap.get(depth) || []), node.val])
        preOrder(node.left, depth + 1)
        preOrder(node.right, depth + 1)
    }
    preOrder(root, 0)
    for(let val of depthMap.values()){
        rsv.push(val.pop())
    }
    return rsv
};