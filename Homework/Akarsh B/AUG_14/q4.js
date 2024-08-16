// 4. Write a function to count the number of times a specific value appears in an array.
var prompt = require('prompt-sync')();
var num=prompt('Enter number? ');
var arr=[1,3,5,6,7,5]

function CountOfSpecificElement(){
    var count=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]==num){
            count++;

        }
    }
    console.log("No of times element "+num+" occured is: "+count);
}

CountOfSpecificElement()
