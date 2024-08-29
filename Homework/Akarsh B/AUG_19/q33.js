// 33. Write a function to create an array of n random numbers.

var arr=[20,40,50,4]
value=Math.random()
for(i in arr){
    arr[i]=Math.floor(Math.random()*5)
}
console.log(arr);
