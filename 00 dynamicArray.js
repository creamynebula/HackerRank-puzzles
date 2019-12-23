//problema: https://www.hackerrank.com/challenges/dynamic-array/problem

function dynamicArray(n, queries) {
    let sequences = [];
    let lastAnswer = 0;
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let [q, x, y] = queries[i]; //q = tipo de query
        let seqIndex = (x^lastAnswer)%n; //seqIndex vai de 0 a (n-1)
        if (!sequences[seqIndex]) { //se nao existe a sequencia que vamos query
            sequences[seqIndex] = []; //cria
        }
        if (q === 1) {
            sequences[seqIndex].push(y);
        }
        else if (q === 2) {
            lastAnswer = sequences[seqIndex][y % sequences[seqIndex].length];
            //acho que aqui lastAnswer passa a ser o ultimo numero adicionado às sequencias
            result.push(lastAnswer);
        }
    }
    return result;
}