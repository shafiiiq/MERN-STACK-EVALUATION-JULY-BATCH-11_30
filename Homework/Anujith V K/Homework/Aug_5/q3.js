var prompt=require("prompt-sync")();
var num=prompt("enter the temperature=");
if(num<0){
    console.log("freezing");
    
}
else if(num>=0 && num<=30)
{
    console.log("cold");
    
}
else if(num>30)
{
    console.log("hot");
    
}
else{
    console.log("Error");
    
}