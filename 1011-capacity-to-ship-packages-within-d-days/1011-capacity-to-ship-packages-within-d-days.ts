function shipWithinDays(weights: number[], days: number): number {
    let totalWt = 0
    let maxWt = weights[0]
    for(let pkgWt of weights){
        totalWt += pkgWt
        maxWt = Math.max(maxWt, pkgWt)
    }
    // let left: number = Math.floor(totalWt/days)
    let left = maxWt
    let right: number = totalWt

    // let nums = [1, 2, 3, 4, 5 ,6]
    // let target = 5
    // let left = 0
    // let right = nums.length - 1
    while(left < right){
        let mid = left + Math.floor((right - left)/2)
        // if(nums[mid] >= target){
        if(wtValidity(mid, days, weights)){
            right = mid
        }else{
            left = mid + 1
        }
    }
    return left 
};

function wtValidity(hypoCap: number, days: number, weights: number[]): boolean{
    // if hypoDays > days => false
    let hypoDays = 0
    let tempTotalWt = 0
    for(let pkgWt of weights){
        tempTotalWt += pkgWt
        if(tempTotalWt > hypoCap){
            // console.log("tempTotalWt: ", tempTotalWt, " hypoCap: ", hypoCap)
            tempTotalWt = pkgWt
            hypoDays++
        }
    }
    if(tempTotalWt) hypoDays++
    // console.log("hypoDays: ", hypoDays)
    if(hypoDays > days) return false
    return true
}