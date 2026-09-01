function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let start = 0
    let end = 0
    const numsSet = new Set<number>()
    while(end < nums.length){
        if(end - start <= k){
           if(numsSet.has(nums[end])) return true
            numsSet.add(nums[end])
            end++
        }else{
            numsSet.delete(nums[start])
            start++
        }
    }
    return false
};