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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let nodeA = p
    let nodeB = q
    let isSame = true
    function dfs(node1: TreeNode, node2: TreeNode) {
        console.log("node1: ", node1, " node2: ", node2)
        if(node1 == null || node2 == null) {
            if(node1 != null || node2 !== null) isSame = false
            return
        }
        // console.log(node.val)
        if(node1.val !== node2.val){
            isSame = false
            return
        }
        if(isSame){
        dfs(node1.left, node2.left)
        dfs(node1.right, node2.right)
        }
        return
    }
    dfs(nodeA, nodeB)
    // console.log("isSame: ", isSame, " nodeA")
    // if(nodeA != null || nodeB != null) return false
    return isSame
};