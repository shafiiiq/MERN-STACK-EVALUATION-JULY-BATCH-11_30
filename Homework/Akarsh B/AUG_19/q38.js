// 38. Write a function to find the index of the last occurrence of a specific value in an array.
var arr1=[1,2,3,5,5,5,7,6]

value=5;

for(i=0;i<arr1.length;i++){
    if(arr1[i]==value){
        index=i
    }
}
console.log(index)