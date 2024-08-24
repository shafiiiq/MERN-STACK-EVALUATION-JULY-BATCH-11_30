function countelement(arr,value)
{
     let count =0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>value){
        count++;}
    }
    return count;
    
}
var arr=[1,3,4,5,6,7]
let value =4
console.log(countelement(arr,value))