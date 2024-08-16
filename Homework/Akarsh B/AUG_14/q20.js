// 20. Write a function to find the sum of all even numbers in an array.

var arr=[1,2,3,4,5,6,7,8,9]

var sum=0;
function SumEven(){
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sum=sum+arr[i];
        }
    }
    console.log(sum);
}
SumEven()
