function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    let max = 0
    const arr: [TreeNode, number][] = [[root, 1]]
    while(arr.length > 0){
        const [node, depth] = arr.pop()
        max = Math.max(max, depth)
        if(node?.left) arr.push([node.left, depth + 1])
        if(node?.right) arr.push([node.right, depth + 1])
    }
    return max
}