// 3. Write a function to calculate the sum of all elements in an array.

var arr=[2,4,5,9,10];

function SumOfElements(){
    var sum=0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    console.log(sum);
}

SumOfElements()