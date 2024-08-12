var k=require("prompt-sync")();
var num=k("enter the number=");
if(num % 5 == 0)
{
    console.log(num+ "Multiple of 5");
    
}
else
{
    console.log(num+ "is not a Multiple of 5");  
}