// 48. Write a function to convert all strings in an array to uppercase


var prompt = require('prompt-sync')();
var num=prompt('Enter Array size? ');
var arr=[]
for(i=0;i<num;i++){
     arr[i]=prompt()
}

function Upper(up){
    const newarr=arr.map(elements=>(
        elements.toUpperCase()
    ))
    console.log(newarr)
}

// var arr=['OK','WEare']
Upper(arr)


// var arr=['ok','weare']

// const newarr=arr.map(elements=>(
//     elements.toUpperCase()
// ))
// console.log(newarr)