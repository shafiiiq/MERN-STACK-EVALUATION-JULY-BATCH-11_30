// Write a program to calculate the factorial of a given number using a loop.
var prompt = require('prompt-sync')();
var num=prompt('Enter number? ');
fact=1;
for(i=num;i>0;i--){
    fact=fact*i;
}
console.log(fact);