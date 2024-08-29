// 32. Write a function to find the last element in an array that is less than a given value.
let arr1 = [20, 25, 40,1, 40, 40]
value = 5
for(i=arr1.length;i>0;i--){
  if(arr1[i]<value){
    last=arr1[i]
    break
  }
}
console.log(last);
