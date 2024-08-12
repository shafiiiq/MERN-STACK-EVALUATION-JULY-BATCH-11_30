 var prompt= require("prompt-sync")();
var num = prompt("enter the age=");
if(num>=13 && num<=17)
{
    console.log("Young");
}
else if(num>=18 && num<65)
{
    console.log("Adult");
    
}
else if(num>=65){
    console.log("Old");  
}
else{
   console.log("age group not mentioned in the question");
    
}