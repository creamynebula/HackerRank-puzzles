//https://www.hackerrank.com/challenges/crush
//se tivermos a soma dos elementos de 0 a (n-1), sum (a,n-1) = sum(0,n-1) - sum(0,a)
//pra achar sum, monte o prefix sum array, fazendo a[i] = a[i] + a[i-1]
//para calcular a soma entre os elementos [i,j] do array original, fazemos sumArray[j]-sumArray[i-1]

function main() {
    let n_temp = readLine().split(' ');
    let n = parseInt(n_temp[0]);
    let m = parseInt(n_temp[1]);
    let res = [];
    let sum = 0;
    let max = 0;

    for (let i = 0; i<n; i++) {
        res[i] = 0;
    }
    
    for(var a0 = 0; a0 < m; a0++){
        var a_temp = readLine().split(' ');
        var a = parseInt(a_temp[0]);
        var b = parseInt(a_temp[1]);
        var k = parseInt(a_temp[2]);

        res[a-1] += k;
        if (b<n) res[b]-=k;
    }
  
    for (let i=0; i<n; i++) {
        sum += res[i];
        if (max < sum) max = sum;
    }
   
    console.log(max);
}