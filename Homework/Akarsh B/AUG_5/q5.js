// Write a program to check if a person is eligible for a driving license. Print "Eligible" if age is 18 or above, otherwise print "Not Eligible".
var prompt = require('prompt-sync')();
var age=prompt('Enter Age? ');
// const age=18;
if(age>=18){
    console.log("Eligible");
}else{
    console.log("Not Eligible");
}