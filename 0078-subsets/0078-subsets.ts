function subsets(nums: number[]): number[][] {
    const result: number[][] = [[]]
    nums.forEach(num => {
        result.push(...result.map(r => [...r, num]))
    })
    return result
};