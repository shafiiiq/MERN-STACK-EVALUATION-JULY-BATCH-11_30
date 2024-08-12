// 4. Write a program that checks the grade of a student and prints "Pass" if the grade is 50 or above, and "Fail" if it is below 50.

var prompt = require('prompt-sync')();
var mark= prompt("enter the mark");

if(mark<50)
{
  console.log("fail");
}

else{
  console.log("Pass")
}