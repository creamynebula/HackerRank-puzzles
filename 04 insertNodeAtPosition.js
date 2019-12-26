problema: https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem

function deleteNode(head, position) {
    
    if (head == null) return head;
        else {
        if (position == 0) {
            head = head.next
            return head;
        }
        
        let current = head;
        let previous;
        for (let i=0; i < position; i++) {
            if (i == position - 1) previous = current; //se chegamos ao destino, current aponta pro elemento em (n-1)
            current = current.next; //no fim do for, current passa a ser o pointer pro elemento da posicao a ser removida (n)
        }
        if (current.next) previous.next = current.next; //se existe o (n+1), (n-1) passa a apontar pra ele
        else previous.next = null; //se nao existe o (n+1), isso retira o (n)
        current.next = null;
    }
    return head;

}