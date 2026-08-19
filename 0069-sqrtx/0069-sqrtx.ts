function mySqrt(x: number): number {
    if(x === 0 || x === 1) return x
    let left = 0
    let right = x
    while(left < right){
        let mid = left + Math.floor((right - left)/2)
        if(mid*mid === x){
            return mid
        }
        else if(mid*mid < x){
            left = mid + 1
        }else{
            right = mid
        }
        // console.log("mid: ", mid, " left: ", left, " right: ", right)
    }
    return left-1
};