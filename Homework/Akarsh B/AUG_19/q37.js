// 37. Write a function to find the index of the first occurrence of the smallest element in an array.
var arr1=[9,2,4,4,5,6,5]
var index=0
smallest=arr1[0]
for(i=0;i<arr1.length;i++){
    if(arr1[i]<smallest){
        smallest=arr1[i];
        index=i
    }
}
console.log(index);
