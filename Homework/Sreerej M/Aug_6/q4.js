// 4.  Write a program to reverse a given string using a loop.


var prompt=require('prompt-sync')();
var string=prompt("enter the string:");
var ch=""
var len=string.length;

for(i=len-1;i>=0;i--)
{
  ch=ch+string[i];
}

console.log(ch);