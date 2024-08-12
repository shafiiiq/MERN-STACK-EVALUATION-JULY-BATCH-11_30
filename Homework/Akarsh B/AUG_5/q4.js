// 1.Write a program that checks the grade of a student and prints "Pass" if the grade is 50 or above, and "Fail" if it is below 50.
var prompt = require('prompt-sync')();
var grade=prompt('Enter Grade? ');
// const grade=50;
if(grade>=50){
    console.log("Pass");
}else{
    console.log("Fail");
}