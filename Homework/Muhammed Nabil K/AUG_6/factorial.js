var prompt = require('prompt-sync')();
var num=prompt("enter the number")
fact=1;
for(i=num;i>0;i--){
    fact=fact*i
}
console.log(fact)