
var prompt = require('prompt-sync')();
//
// get input from the user.
//
var num = prompt("Enter the no");
if(num%2==0){
    console.log(num+"is even")}
    else{
        console.log(num+"is odd")
}
