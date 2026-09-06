function singleNumber(nums: number[]): number {
    let ans;
    for(let num of nums){
        ans ^= num
    }
    return ans
};