//problema: https://www.hackerrank.com/challenges/crush/problem

function arrayManipulation(n, queries) {
//query (a,b,k) = add k to elements between indices a and b (inclusive)
//n = tamanho do array
//retornar maior valor q sobra no array
    let arr=[]; let max = 0;

    for (let l = 0; l < n; l++) {
        arr[l] = 0;
    }

    //esse for aqui embaixo vai executar as queries de uma forma inteligente: +k cada [a-1] e -k cada [b], ai dps eh soh transformar o array num "prefix sum array" (prefixSumArr[i] = Arr[0]+...+Arr[i-1]) pra obtermos o array manipulado

    for(let i=0; i < queries.length; i++) { //pra cada query
        let a = queries[i][0]; let b = queries[i][1]; let k = queries[i][2];
        if (a > 0) arr[a-1]+=k; //a-1 pq o vetor começa em 0 e nao em 1 como no problem statement
        if (b < n) arr[b]-=k;
    }

    for(let i=1; i < n; i++) {
        arr[i] += arr[i-1];
    }

    for (let k = 0; k < arr.length; k++) {
        max = Math.max(max, arr[k]);
    }
    //max = Math.max(...arr); // nao funciona pra arrays grandes
    return max;

}