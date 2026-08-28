function splitArray(nums: number[], k: number): number {
    // let x be the minimum largest sum of any subarray
    // minimum of x is maximum element of nums
    // maximum of x is sum of all elements of nums
    let max_element = nums[0]
    let sum_nums = 0
    for(let num of nums){
        if(num > max_element){
            max_element = num
        }
        sum_nums += num
    }


    // condition
    function cond(x: number): boolean{
        let tempK = 0
        let tempSum = 0
        for(let num of nums){
            tempSum += num
            if(tempSum === x){
                tempK++
                tempSum = 0
            }else if(tempSum > x){
                tempK++
                tempSum = num
            }else {
                // tempSum += num
            }
        }
        if(tempSum > 0) tempK++
        return tempK <= k ? true : false
    }

    // binary search
    let left = max_element
    let right = sum_nums
    while(left < right){
        let mid = left + Math.floor((right - left)/2)
        if(cond(mid)){
            right = mid
        }else{
            left = mid + 1
        }
    }
    return left
};