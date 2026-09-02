function checkInclusion(s1: string, s2: string): boolean {
    // let start = 0
    // let end = 0
    // const temp = ""
    // while (end < s2.length){
    //     temp = temp + s2[end]
    //     if(end - start === s1.length - 1){
    //         if(permutationCheck(s1, temp)) return true
    //         temp.shift()
    //         start++
    //     }
    //     end++
    // }
    // return false

    const alphabetArray = new Array(26).fill(0)
    for(let item of s1){
        alphabetArray[item.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    let start = 0
    let end = 0
    const n = s1.length
    while(end < s2.length){
        alphabetArray[s2[end].charCodeAt(0) - 'a'.charCodeAt(0)]--
        if(end - start >= n - 1){
            if(permutationCheck(alphabetArray)) return true
            alphabetArray[s2[start].charCodeAt(0) - 'a'.charCodeAt(0)]++
            start++
        }
        end++
    }
    return false
};

function permutationCheck(alphabetArray: number[]): boolean{
    return alphabetArray.every(item => item === 0)
}