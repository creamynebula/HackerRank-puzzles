function Solution(){
    let stack = [];
    let queue = [];

    this.pushCharacter = function(char) {
      stack.push(char); //coloca o char em cima da pilha
    }

    this.popCharacter = function() {
        return stack.pop(); //tira o char de cima da pilha e retorna o char
    }

    this.enqueueCharacter = function(char) {
        queue.push(char);
    }

    this.dequeueCharacter = function() {
        return queue.shift(); //shift remove o 1o elemento e retorna ele
    }
}

function main(){
    // lê a string S que vamos verificar se é palíndromo
    var s=readLine();
    var len=s.length;
    var obj=new Solution();

    //preenche as pilhas e filas com os caracteres da string
    for(var i=0;i<len;i++){
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }
  
    var isPalindrome=true;

    //pega o 1o da fila e o topo da pilha e vê se são iguais
    for(var i=0;i<len/2;i++){
        if(obj.popCharacter()!=obj.dequeueCharacter()){
            isPalindrome=false;
          	break;
        }
    }

    //imprimir o resultado
    if(isPalindrome) 
        console.log(s + " é um palíndromo");    
    else
        console.log(s + " não é um palíndromo");
}

//o VSCode lê na hora a mudança de repo, tem que fazer nada... cool