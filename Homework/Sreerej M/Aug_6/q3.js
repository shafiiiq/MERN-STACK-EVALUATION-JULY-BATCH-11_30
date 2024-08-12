// 3.  Write a program to print the multiplication table of a given number using a loop.

var prompt=require('prompt-sync')();
var num=prompt("enter the num:");
let sum=0;

for(i=1;i<=10;i++)
{
 sum=i*num;
 console.log(i+"*"+num+"="+sum);
}