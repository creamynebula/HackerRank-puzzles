//https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail/problem
//retorna o conteudo do node a tantas posicoes da cauda da lista
function getNode(head, positionFromTail) {
    
    var pivotNode = head; //pivô = 1o elemento
    var returnNode = head; //msm coisa
    
    for(let i=0; i < positionFromTail; i++) {
        pivotNode = pivotNode.next;
    }
    
    while(pivotNode.next) { //enquanto nao chegar ao ultimo elemento da lista, o que falta (n-positionFromTail) elementos a percorrer
        returnNode = returnNode.next; //returnNode estará no fim do while na posição (n-positionFromTail), ou seja, faltando positionFromTail pro fim
        pivotNode = pivotNode.next;
    }
    
    return returnNode.data;
    

}