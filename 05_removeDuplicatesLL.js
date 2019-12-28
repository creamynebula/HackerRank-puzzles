//https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem
//remover elementos repetidos numa lista encadeada ordenada

function removeDuplicates(head) {
    let node = head;
    while(node !== null) {
        let next = node.next;
        if(next && (node.data === next.data)) {
            node.next = next.next;
        }
        else {
            node = node.next;
        }
    }
    return head;
}