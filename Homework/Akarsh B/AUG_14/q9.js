// 9. Write a function to find the index of the largest element in an array.

var arr=[2,4,6,86,75];


function large(){
    var largest;
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            largest=arr[i];
        }
    }
}
console.log(arr.indexOf(largest));
}

large()