//problema: https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem
//unir duas listas ordenadas numa só

function mergeLists(headA, headB) {
    if (headA === null) return headB;
    if (headB === null) return headA;

    var previous = null;
    var lower, head;
    
    while (headA !== null && headB !== null) {
        if (headA.data < headB.data) {
            lower = headA;
            headA = headA.next;
        } else {
            lower = headB;
            headB = headB.next;
        }

        if (previous !== null) {
            previous.next = lower;
        } else {
            head = lower;
        }
        
        previous = lower;    
    }
    
    var nonEmpty = (headA === null ? headB : headA);
    var currentNode = nonEmpty;
    while (currentNode !== null) {
        previous.next = currentNode;
        previous = currentNode;
        currentNode = currentNode.next;
    }
    
    
    return head;

}