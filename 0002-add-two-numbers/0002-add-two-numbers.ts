/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(!l1) return l2
    if(!l2) return l1
    let carryOver = 0
    // if(l1.val + l2.val >= 10){
    //     carryOver = (l1.val + l2.val) % 10
    // }

    const dummy = new ListNode(0)
    let curr = dummy

    while((l1 !== null) || (l2 !== null) || carryOver){
        let sum = carryOver
        if(l1 !== null){
            sum += l1.val
            l1 = l1.next
        }
        if(l2 !== null){
            sum += l2.val
            l2 = l2.next
        }
        carryOver = Math.floor(sum/10)
        curr.next = new ListNode(sum % 10)
        curr = curr.next

    }
    return dummy.next
    
};