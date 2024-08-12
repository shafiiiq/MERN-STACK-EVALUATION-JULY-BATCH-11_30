var prompt = require('prompt-sync')();
var temp = prompt("enter the number");
if(temp<0)
{
    console.log("freezing");
}
else if(temp<=30){
    console.log("cold");
}
else{
    console.log("hot");
}