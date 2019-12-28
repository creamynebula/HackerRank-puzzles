//problema: https://www.hackerrank.com/challenges/30-binary-numbers/problem
//a funcao recebe (no código lê input) um numero em base 10, e retorna (console.log no codigo) o numero de dígitos 1 consecutivos na representação binária do input

function main() {
    const n = parseInt(readLine(), 10);
    let numero = n;

    let resto = 0;
    let binarioAoContrario = []; //vou guardar os digitos do numero ao contrario pq fica facil de implementar, soh usar array.push
    let consecutivosAtuais = 0;
    let maxConsecutivos = 0;

    while (numero != 0) {
        resto = numero%2;
        binarioAoContrario.push(resto);
        numero = (numero - resto)/2;
    }

    for (let i=0; i < binarioAoContrario.length; i++) {
        if (binarioAoContrario[i] == 1) {
            consecutivosAtuais++;
            if (consecutivosAtuais > maxConsecutivos) maxConsecutivos = consecutivosAtuais;
        }
        else consecutivosAtuais = 0;
    }

    console.log(maxConsecutivos);
}