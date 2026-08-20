function searchInsert(nums: number[], target: number): number {
    const n = nums.length
    let left = 0
    let right = n - 1

    while (left < right){
        let mid = left + Math.floor((right - left)/2)
        if(nums[mid] < target){
            left = mid + 1
        }else{
            right = mid
        }
    }
    return target <= nums[n-1] ? left : left + 1
};