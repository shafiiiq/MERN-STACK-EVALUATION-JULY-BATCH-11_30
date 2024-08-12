// 10.  Write a program that checks if a given number is within the range of 1 to 100 and prints "Within Range" if it is, otherwise print "Out of Range".

var prompt=require('prompt-sync')();
var num=prompt("enter the number");

if(num >=1 && num<=100)
{
  console.log("within Range");
}

else{
  console.log("Out of Range");
}