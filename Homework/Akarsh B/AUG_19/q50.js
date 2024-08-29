// 50. Write a function to check if an array is a palindrome (the array reads the same forward and backward).
var prompt = require('prompt-sync')();
var num=prompt('Enter Array size? ');
var arr=[]
for(i=0;i<num;i++){
     arr[i]=prompt()
}
// var arr=[1,2,1,1]

function palindrome(arr){
    let flag=1;
    rev=arr.slice().reverse()
    for(i=0;i<=arr.length;i++){
        if(arr[i]!==rev[i]){
            flag=0
            break;
        }
    }

    if(flag==1){
        console.log('palindrome');
        
    }else{
        console.log('Not palindrome');
        
    }
}

palindrome(arr)