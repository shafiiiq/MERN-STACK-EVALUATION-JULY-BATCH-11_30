// 7. Write a function to check if an array contains a specific value.
var prompt = require('prompt-sync')();
var num=prompt('Enter number? ');

var arr=[1,2,3,4,5,6,7]

function SpecificValueArray(){
    var temp;
    for(i=0;i<arr.length;i++){
        if(arr[i]==num){
            temp=1;
        }
    }
    if(temp==1){
        console.log(num+" is an element of this array");
    }else{
        console.log(num+" is not an element of this array");
    }

}
SpecificValueArray()