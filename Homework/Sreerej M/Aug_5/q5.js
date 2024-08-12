// 5. Write a program to check if a person is eligible for a driving license. Print "Eligible" if age is 18 or above, otherwise print "Not Eligible".

var prompt = require('prompt-sync')();
var age=prompt("enter your Age:");

if(age>=18)
{
  console.log("Eligible for Driving License");
}

else{
  console.log(" Not Eligible for Driving License");
}