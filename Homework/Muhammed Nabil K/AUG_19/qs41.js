
let arr=[2,4,5,6,8]
let k=2
let n=arr.length



function elementcount(arr,k,n)
{
     let counter=0;
    for(i=0;i<n;i++){
        
        if(arr[i] % k == 0)
            counter++;
    }
        return counter;
   
   
}
var result=elementcount(arr,k,n)
console.log(result)




