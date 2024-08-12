var prompt = require('prompt-sync')();
var num = prompt("enter the number");
if(num==1 )
{
    console.log("monday");
}
else if(num==2){
    console.log("tuesday");
}
else if(num==3){
    console.log("wed");
}
else if(num==4){
    console.log("thurs");
}
else if(num==5){
    console.log("fri");
}
else if(num==6){
    console.log("sat");
}
else if (num==7)
{
    console.log("sun");
}
else{
    console.log("invalid")
}