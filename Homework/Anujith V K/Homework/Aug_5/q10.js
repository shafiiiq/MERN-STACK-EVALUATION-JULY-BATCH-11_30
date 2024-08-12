var prompt=require("prompt-sync")();
var num=prompt("enter the number=");
if(num>=1 && num<=100)
{
    console.log("Within Range");
    
}
else{
    console.log("Out of Range");
    
}
