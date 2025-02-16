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
    if(head == null || head.next == null){
        return head
    }
    var currentNode = head;
    var nextNode = currentNode.next;
    currentNode.next = null
    var prevNode = currentNode;
    currentNode = nextNode;
    while (currentNode.next!=null){
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    currentNode.next = prevNode
    return currentNode
};