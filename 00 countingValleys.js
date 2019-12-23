//problema: https://www.hackerrank.com/contests/microverse-fast-track/challenges/counting-valleys

function countingValleys(n, s) { //funcao que vai retornar o numero de vales atravessados
    //vale = DxxxxxU, qualquer quantidade de steps, mas soma de D = soma de U
    var caminho = 0; var numVales = 0; var i = 0;
    
    for (i=0; i < n; i++) {
        if (s[i] === 'D') //início do possível vale
            caminho -= 1; //computa o passo pra baixo, qdo caminho ficar 0 dnv encontramos um vale!   
        else {
            caminho += 1; // s[i] == 'U'
            if (caminho == 0) numVales += 1; //achamos o vale
        } //fim else
            
    } //fim for

    return numVales;


} //fim countingValleys