//https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem
//problema divertido, descobrir aonde duas listas encadeadas interceptam

function findMergeNode(headA, headB) {
    let viajanteA = headA; let viajanteB = headB;
    while (viajanteA != viajanteB) { //(comprimento A) + (comprimento B - (comprimento A intersecao B)) = (comprimento B) + (comprimento A - (comprimento A interscao B)) 
        if (viajanteA.next == null) viajanteA = headB; //se chegamos no fim de A, vamos correr B
        else viajanteA = viajanteA.next;
        if (viajanteB.next == null) viajanteB = headA; //chegamos no fim de B, vamos correr A
        else viajanteB = viajanteB.next; 
    }
    return viajanteA.data;
}