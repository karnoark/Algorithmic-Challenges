function findKthNumber(m: number, n: number, k: number): number {
    // double loop to traverse the matrix and insert numbers to the heap
    // let kHeap = new MaxxHeap(k)
    // for(let i = 0; i < m; i++){
    //     for(let j = 0; j < n; j++){
    //         kHeap.insert((i+1)*(j+1))
    //     }
    // }
    // return kHeap.getMax()
    if (m === 0 || n === 0) return 0
    let left = 1
    let right = m * n

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if(feasibility(mid)){
            right = mid
        }else{
            left = mid + 1
        }
    }
    return left

    function feasibility(x): boolean {
        // we will check if x is the solution then sum of the total number of elements that are less than x should be less than k
        // we also need to check if that x is valid element of the matrix => fortunately, binary search gurantees the answer would belong to the matrix. 
        let count = 0
        for(let i= 1; i <= m; i++){
            count += Math.min(n, Math.floor(x/i))
        }
        return count >= k
    }
};

// class MaxxHeap {
//     maxSize: number;
//     arr: number[];
//     constructor(k: number) {
//         this.maxSize = k
//         this.arr = []
//     }

//     left(i) {
//         return 2 * i + 1
//     }

//     right(i) {
//         return 2 * i + 2
//     }

//     parent(i) {
//         return Math.floor((i - 1) / 2)
//     }

//     getMax() {
//         if (this.arr.length > 0) return this.arr[0]
//         return 0
//     }

//     insert(element: number) {
//         // checks the size of the heap
//         // if size < k -> 
//         // if size >= k -> getMax > element -> extract max, push element, maxHeapify()

//         // if size < k -> 
//         // console.log("--- insert operation--- element: ", element)
//         if (this.arr.length < this.maxSize) {
//             let element_index = this.arr.length
//             this.arr.push(element)
//             while (element_index >= 1 && this.arr[element_index] > this.arr[this.parent(element_index)]) {
//                 // let temp = arr[this.parent(element_index)]
//                 [this.arr[element_index], this.arr[this.parent(element_index)]] = [this.arr[this.parent(element_index)], this.arr[element_index]]
//                 element_index = this.parent(element_index)
//             }

//         } else {
//             // if size >= k -> getMax > element -> extract max, push element, maxHeapify()
//             let maxElement = this.arr[0]
//             if (maxElement > element) {
//                 this.arr[0] = element
//                 this.maxHeapify(0)
//             }

//         }
//     }

//     // this method assumes that all the subtrees are already heapified
//     maxHeapify(i) {
//         while (i < this.arr.length) {
//             let l = this.left(i)
//             let r = this.right(i)
//             // if(l > this.arr.length || r > this.arr.length) return
//             let largest = i
//             if (l < this.arr.length && this.arr[largest] < this.arr[l]) {
//                 largest = l
//             }
//             if (r < this.arr.length && this.arr[largest] < this.arr[r]) {
//                 largest = r
//             }
//             if (largest === i) break
//             [this.arr[i], this.arr[largest]] = [this.arr[largest], this.arr[i]]
//             i = largest
//         }
//         return
//     }
// }