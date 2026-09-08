function isAnagram(s: string, t: string): boolean {
    let freqMap = new Map()
    for(let ch of Array.from(s)){
        freqMap.set(ch, (freqMap.get(ch) || 0) + 1)
    }
    let newFreqMap = new Map()
    for(let ch of Array.from(t)){
        newFreqMap.set(ch, (newFreqMap.get(ch) || 0) + 1)
    }
    function mapsEqual(m1, m2): boolean {
        if(m1.size !== m2.size) return false
        for(let [key, value] of m1){
            if(!m2.has(key) || m2.get(key) !== m1.get(key)){
                return false
            }
        }
        return true
    }
    return mapsEqual(freqMap, newFreqMap)
};