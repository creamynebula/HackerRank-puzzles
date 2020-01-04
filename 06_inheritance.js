//https://www.hackerrank.com/challenges/30-inheritance/problem

function getGrade(n){
    if (n >= 90)
        return 'O';
    else if (n >= 80)
        return 'E';
    else if (n >= 70)
        return 'A';
    else if (n >= 55)
        return 'P';
    else if (n >= 40)
        return 'D';
    else return 'T'
}

class Student extends Person {

    //as propriedades firstName, lastName e id foram herdadas por Student de Person
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id); //super chama o constructor da superclass (no caso Person), sem ele não dá pra usar o 'this'
        this.scores = scores;        
    }

    calculate() {
        return getGrade( this.scores.reduce((a,c) => a+c, 0) / this.scores.length );
        //array.reduce((a,c) => a+c, 0) / array.length) retorna a média dos elementos do array.
        //reduce((a,c) => a+c, 0) retorna a soma dos elementos do array
    }
}