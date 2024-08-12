// 2. Write a program to calculate the factorial of a given number using a loop.

let fact=1;
var prompt=require('prompt-sync')();
var num=prompt("enter the num:");

for(i=num;i>0;i--)
{
  fact=fact*i;
}

console.log("factorial of "+ num+"="+ fact);