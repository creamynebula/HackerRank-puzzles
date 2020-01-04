//https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem

function reverse(head) {
    if(head == null || head.next == null) {
        return head;
    }
    
    var remaining = reverse(head.next);
    head.next.next = head;
    head.next = null;
    
    remaining.prev = null;
    
    return remaining;    
}