/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let n = s.length
    let mid = Math.floor(n/2)
    for(let i = 0 ; i < mid; i++){
        [s[i], s[n-1-i]] = [s[n-1-i], s[i]]
    }
};