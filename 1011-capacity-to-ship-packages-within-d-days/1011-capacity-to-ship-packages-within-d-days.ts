function shipWithinDays(weights: number[], days: number): number {
    // edge cases

    // max & total sum
    let max = weights[0]
    let total_sum = 0
    for(let x of weights){
        total_sum += x
        max = x > max ? x : max
    }
    let min_wc = max > total_sum/days ? max : Math.floor(total_sum/days)
    let max_wc = total_sum


    // function to check a certain weight capacity
    function weightCapacityPass(wc) {
        let sw = 0
        let number_of_trips = 0
        for(let x of weights){
            sw +=x
            if(sw === wc){
                sw = 0;
                number_of_trips++
            }
            if(sw > wc){
                sw = x;
                number_of_trips++
            }
        }
        if(sw > 0) number_of_trips++
        console.log("weight capacity: ", wc, " number of trips: ", number_of_trips)
        return number_of_trips <= days ? true : false
    }
    
    // check all the capcities from lowest to highest using binary search

    let left = min_wc
    let right = max_wc
    while(left < right){
        let mid = left + Math.floor((right - left)/2)
        if(weightCapacityPass(mid)){
            right = mid
        }else{
            left = mid + 1
        }
    }
    return left

};