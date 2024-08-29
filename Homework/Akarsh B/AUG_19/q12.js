// 12. Write a function to count the number of even numbers in an array.

var arr=[1,2,3,4,5,6,7,7]

function NoOfEven(arr){
    let count=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            count++;
        }
    }
    console.log(count);
}
NoOfEven(arr)