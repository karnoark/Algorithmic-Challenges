function minDays(bloomDay: number[], m: number, k: number): number {
    // feasibility condition: if x number of days could produce at least m bouquets
    // binary search: least satisfying x

    function feasible(x){
        let flowers = 0
        let bouquets = 0
        for(let bday of bloomDay){
            if(bday <= x){
                bouquets += Math.floor((flowers + 1) / k)
                flowers = (flowers + 1) % k
            }else{
                flowers = 0
            }
            if(bouquets >= m) return true
        }
        return false
    }

    // binary search
    let left = 1
    let right = Math.max(...bloomDay)
    if(!feasible(right)) return -1
    while(left < right){
        let mid = left + Math.floor((right - left)/2)
        if(feasible(mid)){
            right = mid
        }else{
            left = mid + 1
        }
    }
    return left



};