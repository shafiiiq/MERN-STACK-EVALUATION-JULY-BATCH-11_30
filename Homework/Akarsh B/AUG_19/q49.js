// 49. Write a function to convert all strings in an array to lowercase.


var prompt = require('prompt-sync')();
var num=prompt('Enter Array size? ');
var arr=[]
for(i=0;i<num;i++){
     arr[i]=prompt()
}

function Lower(lp){
    const newarr=arr.map(elements=>(
        elements.toLowerCase()
    ))
    console.log(newarr)
}

// var arr=['OK','WEare']
Lower(arr)
