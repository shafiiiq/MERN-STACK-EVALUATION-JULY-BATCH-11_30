function count(a=[])
    {
var prompt=require("prompt-sync")();
var val=prompt("enter the value=");
count=0;
for(i=0;i<a.length;i++)
{
    if(a[i]==val)
    {
        count+=1;
    }
}
console.log(count);
}
count(n=[10,20,30,40,30,30,20,10])
