//problema: https://www.hackerrank.com/contests/microverse-fast-track/challenges/sock-merchant/problem
//ar = Array contendo meias de diferentes tipos (tamanhos, cores, whatever), ex: duas com o valor "10" seriam um par de uma certa meia, duas com outro valor um par de outro tipo. Essa funcao retorna quantos pares de meias existem no array

function sockMerchant(n, ar) {
    var ordenado = ar.sort((a, b) => a - b); //ordena 'ar' em ordem crescente
    var i, pares = 0;
    for (i=0; i < n-1; i++)
        if (ordenado[i] == ordenado[i+1]) {
            pares += 1; //achamos um par
            i++; //note que dai vamos voltar pro if com i=i+2
        }
    return pares;
    }
//a ordenação facilita mto computar o numero de pares, se [i] e [i+1] nao forem iguais, nao eh par
