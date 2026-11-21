/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let c = m - 1
    for(let b = 0; b < n; b++){
        let a = c
        while(nums1[a] > nums2[b] && a >= 0){
            console.log('a: ', a, ' b: ', b)
            console.log('nums1[a]: ', nums1[a], ' nums2[b]', nums2[b])
            nums1[a + 1] = nums1[a]
            a = a - 1
        }
        nums1[a + 1] = nums2[b]
        c++
    }
};