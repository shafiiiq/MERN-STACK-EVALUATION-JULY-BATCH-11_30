// 5.  Write a program to count the number of digits in a given number using a loop.


var prompt=require('prompt-sync')();
var num=prompt("enter the num:");
var count=0;

var len=num.length

for(i=0;i<len;i++)
{
  count++;
}

console.log(count);