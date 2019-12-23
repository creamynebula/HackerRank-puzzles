//problema: https://www.hackerrank.com/challenges/array-left-rotation

function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10)); //array

    shiftDLeft (a,d);
    printResult (a);
}

function shiftDLeft(arr, d) {
    for (let i = 0; i < d; i++) {
        let temp = arr[0]; //guarda o 1o elemento
        arr.splice(0,1); //remove o 1o elemento
        arr.push(temp); //coloca ele no fim
    } //fim for
    return arr;
}

function printResult(arr) {
    let result = '';
    for (let i=0; i < arr.length; i++) result += arr[i] + ' ';
    console.log(result);
}