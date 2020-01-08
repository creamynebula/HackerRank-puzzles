function main() {
    var S = readLine(); //le string do input
    
    try {
        var num = parseInt(S) || error; //o valor só fica numérico se a string S for representável como número
        console.log(num);
        
    } 
    catch (error) {
        console.log("Bad String");
    }

}