function search(nums: number[], target: number): number {
    if(nums.length < 1) return -1;
    const n = nums.length
    if(nums[0] > target || nums[n -1] < target) return -1
    if(n === 1 && nums[0] === target) return 0
    let left = 0;
    let right = n-1
    while(left <= right){
        let mid = Math.floor(left + (right - left)/2)
        if(nums[mid] === target){
            return mid
        }
        else if(nums[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return -1
};