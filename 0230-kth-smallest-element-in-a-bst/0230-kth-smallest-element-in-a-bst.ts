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
    // let kthSmallest = root?.val
    // function inOrder(node: TreeNode | null){
    //     if(node == null) return null
    //     inOrder(node.left)
    //     console.log(node.val)
    //     k--
    //     if(k == 0) kthSmallest = node.val
    //     k > 0 && inOrder(node.right)
    // }
    // inOrder(root)
    // return kthSmallest

    let node = root
    let stk: TreeNode[] = []
    while(node != null || stk.length > 0){
        // go to the leftmost node
        while(node != null){
            stk.push(node)
            node = node.left
        }

        node = stk.pop()
        // reduce the k and check if we have reached kth smallest
        if(--k == 0){
            return node.val
        }

        // move to right subtree
        node = node.right
    }
    throw new RangeError("k exceeds the number of nodes")

};