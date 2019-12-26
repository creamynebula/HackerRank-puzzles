//problema: https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

function processData(input) {
    let linhas = input.split('\n'); //['n', 'name number', 'name number',..., name, name]
    let tamanhoPhonebook = parseInt(linhas[0]);
    let phoneBook = {};
    let temp1;
    
    for (let i=1; i <= tamanhoPhonebook; i++) {
        temp1 = linhas[i].split(' '); //['name','number]
        phoneBook[temp1[0]] = temp1[1]; //par (name:number) adicionados ao phonebook
        //lookup = phoneBook[name] aonde name=string
    }

    for (let k = tamanhoPhonebook + 1; k < linhas.length; k++) {
        if (phoneBook[linhas[k]]) { //se a entry existe no phonebook
            console.log(linhas[k] + '=' + phoneBook[linhas[k]]); //print entry
        }
        else {console.log('Not found'); }
    }
}
/*
--sample input--
3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry
*/
