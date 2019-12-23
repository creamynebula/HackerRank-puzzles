//problema> https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem

function insertNodeAtHead(head, data) {

    if (head == null) return {data: data, next: head} //se a lista estiver vazia, crie o node e retorne ele

    else var a = {data: data, next: head} //do contrario, crie o node e mude o pointer do head pra ele
    head = a;
    return head;

}