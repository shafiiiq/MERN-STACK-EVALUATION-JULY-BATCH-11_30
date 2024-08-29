// Write a function to count the number of elements in an array that are divisible by a given number.
var prompt=require("prompt-sync")()
function findcount(arr=[]) {
    var num=prompt("enter the value=")
    var newar=arr.filter(item=>item%num==0)
    console.log(newar.length);
    
}
findcount(n=[10,15,20,25,30,35,40,45,50])