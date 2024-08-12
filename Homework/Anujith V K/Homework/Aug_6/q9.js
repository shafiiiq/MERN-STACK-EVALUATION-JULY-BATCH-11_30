var prompt=require("prompt-sync")();
var n=parseInt(prompt("enter the number="),10);
let sum=0;
let k=0;
let r=0;
while(n!=0)
{
    k=n%10;
    sum=sum+k;
    n=Math.floor(n/10);
}
console.log(Math.round(sum));