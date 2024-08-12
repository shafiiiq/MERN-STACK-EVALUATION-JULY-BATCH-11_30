var prompt = require('prompt-sync')();
var num=prompt("enter the number")
mul=0;
for(i=1;i<=10;i++){
    mul=i*num

console.log(i+"*"+num+"="+mul)
}