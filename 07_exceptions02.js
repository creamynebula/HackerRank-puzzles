class Calculator {

    power(n,p) {
        try {
            if ((n < 0) || (p < 0)) throw 'n and p should be non-negative'; //mensagem de erro que o HR pediu
            return Math.pow(n,p); 
        }
        catch(error) {
            return error;
        }
    }
}

function main(){
    var myCalculator=new Calculator();
    var T=parseInt(readLine());
    while(T-->0){
        var num = (readLine().split(" "));
        try{
            var n=parseInt(num[0]);
            var p=parseInt(num[1]);
            var ans=myCalculator.power(n,p);
            console.log(ans);
        }
        catch(e){
            console.log(e);
        }

    }
}