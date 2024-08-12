var prompt = require('prompt-sync')();
var num = prompt("enter the number");
fact=1
for(i=1;i<=num;i++)
{
 fact=fact*i
}
console.log("factorial is" + fact)