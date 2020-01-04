function processData(input) {

    let linhasEntrada = input.split("\n"); //array contendo as linhas da entrada

    for (let i=1; i < linhasEntrada.length; i++) { //para cada entrada
        let string1 = ''; let string2 = '';
        for (let j = 0; j < linhasEntrada[i].length; j++) {
            if (j%2 == 0) string1 += linhasEntrada[i][j]; //se índice par, coloca o char em string1
            else string2 += linhasEntrada[i][j]; //índice par char em string2
        }
        console.log (string1 + ' ' + string2);
    }

} 