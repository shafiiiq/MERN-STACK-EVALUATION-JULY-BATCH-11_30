// 3. Write a program to check if the temperature is below 0, print "Freezing"; between 0 and 30, print "Cold"; and above 30, print "Hot".

var prompt = require('prompt-sync')();
var temp= prompt("enter the temparature");

if(temp<0)
{
  console.log("Freezing")
}

else if(temp>=0 && temp<=30)
{
  console.log("cold");
}

else if(temp>30)
{
  console.log("hot")
}