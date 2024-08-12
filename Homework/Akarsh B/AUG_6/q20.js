// 10. Write a program to find the sum of the digits of a given number using a loop.

var prompt = require('prompt-sync')();
var num=prompt('Enter number? ');
sum=0
while(num>0){
    n=num%10;
    sum=sum+n;
    num=Math.floor(num/10);
}
console.log(sum)