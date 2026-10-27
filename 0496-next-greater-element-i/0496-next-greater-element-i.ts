function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let checkNGE = false
    const ans: number[] = []
    for(let ele of nums1){
        for(let item of nums2){
            if(ele == item){
                checkNGE = true
            }
            if(checkNGE && item > ele){
                ans.push(item)
                checkNGE = false
                break
            }
        }
        if(checkNGE){
            ans.push(-1)
            checkNGE = false
        }
    }
    return ans
};