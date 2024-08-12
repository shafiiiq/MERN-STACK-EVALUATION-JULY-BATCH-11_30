var prompt = require('prompt-sync')();
var num = prompt("enter the number");
sum=0
for(i=1;i<=10;i++)
{
 sum=i*num;
 console.log(i+"*" +num+ "=" +sum)
}
