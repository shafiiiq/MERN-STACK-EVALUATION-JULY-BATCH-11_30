// 21. Write a function to split an array into two halves.

arr=[1,2,3,4,5,6]
len=(arr.length)
mid=Math.floor((arr.length)/2)
firsthalf=arr.splice(0,mid)
secondhalf=arr.splice(0)//print remaining elements
console.log(firsthalf);
console.log(secondhalf);

