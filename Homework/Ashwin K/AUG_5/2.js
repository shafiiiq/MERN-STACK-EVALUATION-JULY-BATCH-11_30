var prompt = require('prompt-sync')();
var num = prompt("enter the number");
if(num%2==0)
{
    console.log("even");
}
else{
    console.log("odd");
}