/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    if (head === null || head.next === null) return head; //empty or 1-item linked list, not worth the process
    //if not, linked list reversal shall be done
    let current = head;
    let next_node = undefined;
    let previous_node = undefined;

    while(current !== null){ //While there are still nodes to process
        next_node = current.next; //Store the next node
        current.next = previous_node; //Reverse the current node's pointer to point to the previous node
        previous_node = current; //Move the previous node pointer to the current node
        current = next_node; //Move to the next node in the original list
    }
    //At the end of the loop, previous_node will be the new head of the reversed linked list
    return previous_node;
};

/*
Recursive version:
var reverseList = function(head) {
    if (head === null || head.next === null) return head;//empty or 1-item linked list, not worth the process (also, base case for recursion)
    //if not, linked list reversal shall be done
    let newHead = reverseList(head.next); //Recursion
    head.next.next = head; //The next node's next pointer should point to the current head
    head.next = null; //The current head's next pointer should be null to avoid cycles
    //At the end of the recursion, newHead will be the new head of the reversed linked list
    return newHead;
};
 */