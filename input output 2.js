//como processar input vindo de um arquivo de texto

function processData(input) {

    var lines = input.split('\n'); //lines[0]='5 3', lines[1]='4 7 8 2 1'
    var line = lines[0]; //line='5 3'

    var n = line.split(' ')[0]; //n='5'
    var d = line.split(' ')[1]; //d='3'
    var arr = lines[1].split(' ').map(Number); //arr=[4,7,8,2,1]

}

//--input exemplo--
//5 3       n=5 elementos, d=3 shiftToLeft
//4 7 8 2 1     elementos do vetor a ser manuseado