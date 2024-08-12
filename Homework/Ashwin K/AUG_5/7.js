var prompt = require('prompt-sync')();
var num = prompt("enter the number");
if(num%5==0)
{
    console.log("number is multiple of 5");
}
else{
    console.log("number is not multiple of 5");
}