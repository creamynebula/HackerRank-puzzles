problem: https://www.hackerrank.com/challenges/reverse-a-linked-list/

function reverse(head) {

    if (head == null) return head;

    let current = head;
    let previous = null; 
    let nextTemp;

    while (current != null) { //percorre a lista
        nextTemp = current.next; //guarda o pointer pro (n+1)
        current.next = previous; //(n) aponta pro (n-1)
        previous = current; //previous aponta pro (n)
        current = nextTemp; //current aponta pra (n+1)
    }

    head = previous; //head aponta pro que anteriormente era o último
    return head;
}