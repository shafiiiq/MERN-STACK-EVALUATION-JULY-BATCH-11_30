// Write a function to find the sum of elements in an array that are greater than a given value.
var prompt=require("prompt-sync")()
function adding(arr=[]){
    var summ=0
    var val=prompt("enter the value=")
    var newar=arr.filter(item=>item>val)
for(i=0;i<newar.length;i++)
{
summ=summ+newar[i]
}
console.log(summ);
}
adding(n=[1,2,3,4,5,6])