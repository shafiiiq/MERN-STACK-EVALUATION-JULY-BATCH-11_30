// 9. Write a program that checks if a given number (1-7) corresponds to a weekday (1 for Monday, 2 for Tuesday, etc.) and prints the name of the day.

var prompt = require('prompt-sync')();
var num=prompt('Enter number? ');
if(num==1){
    console.log("Monday");
}else if(num==2){
    console.log("Tuesday");
}else if(num==3){
    console.log("wednesday");
}else if(num==4){
    console.log("Thursday");
}else if(num==5){
    console.log("Friday");
}else if(num==6){
    console.log("Saturday");
}else if(num==7){
    console.log("Sunday");
}else{
    console.log("Enter number from 1-7");
}