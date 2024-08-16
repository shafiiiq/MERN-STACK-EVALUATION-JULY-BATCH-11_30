
var prompt=require('prompt-sync')();
function check(a=[])
{
    let present=false;
    var value=parseInt(prompt("enter the value="))
    for(let i=0;i<a.length;i++)
    {
        if(a[i] === value)
      {
present=true;
break;
      }
        }
if(present==true)
{
    console.log("value is present");
    
}
else{
    console.log("value is not present");
    
}
        
 }
check(num=[10,20,30,40,50,60])