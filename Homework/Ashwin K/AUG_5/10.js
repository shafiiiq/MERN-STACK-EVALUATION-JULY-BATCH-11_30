var prompt = require('prompt-sync')();
var num = prompt("enter the number");
if(num>=1 && num<=100)
{
    console.log("within the range");
}
else{
    console.log("out of range");
}