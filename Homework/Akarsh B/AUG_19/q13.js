// 13. Write a function to count the number of odd numbers in an array.
var arr=[1,2,3,4,5,6,7,7]

function NoOfOdd(arr){
    let count=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            count++;
        }
    }
    console.log(count);
}
NoOfOdd(arr)