var arr1=[9,2,4,4,5,6,5]
var index=0
largest=arr1[0]
for(i=0;i<arr1.length;i++){
    if(arr1[i]>largest){
        largest=arr1[i];
        index=i
    }
}
console.log(index);
