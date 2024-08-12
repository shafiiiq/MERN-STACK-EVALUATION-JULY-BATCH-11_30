// 10. Write a program to find the sum of the digits of a given number using a loop.

var prompt=require('prompt-sync')();
var num=prompt("enter the num:");
var number=parseInt(num)
var n=0,sum=0;
console.log("number:"+num)
while(number>0)
{
  n=number%10
  
  number= Math.floor(number/10)
  sum=sum+n
  
}
console.log("sum of number=:"+ sum)