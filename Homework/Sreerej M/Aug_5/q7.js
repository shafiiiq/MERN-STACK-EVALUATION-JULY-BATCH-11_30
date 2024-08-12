// 7. Write a program to check if a given number is a multiple of 5. Print "Multiple of 5" if it is, otherwise print "Not a multiple of 5".

var prompt=require('prompt-sync')();
var num=prompt("enter the number");

if(num%5==0)
{
  console.log(num + " is a Multiple of 5");
}

else
{
  console.log(num + " is not a Multiple of 5");
}