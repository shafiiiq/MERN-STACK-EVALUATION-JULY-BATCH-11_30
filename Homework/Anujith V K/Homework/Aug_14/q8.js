
var prompt=require("prompt-sync")();
function rem(a=[])
{
    var value=parseInt(prompt("enter the value="),10)
    var updated_array=a.filter(item => item !== value)
    console.log(updated_array);
    
}
rem(n=[10,10,20,30,40,50])