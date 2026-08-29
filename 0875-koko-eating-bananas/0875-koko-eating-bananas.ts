function minEatingSpeed(piles: number[], h: number): number {
    let total = 0
    for(let pile of piles){
        total += pile
    }
    function feasible(x: number){
        let hrs = 0
        // piles.forEach(i => hrs += Math.ceil(i/x))
        hrs = piles.reduce((acc, currV) => acc += Math.ceil(currV/x), 0)
        return hrs <= h
       
    }
    let left = 1
    let right = total
    while (left < right){
        let mid = left + Math.floor((right - left)/2)
        if(feasible(mid)){
            right = mid
        }else{
            left = mid + 1
        }
    }
    return left
};