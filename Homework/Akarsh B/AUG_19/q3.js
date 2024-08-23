// 3. Write a function to count how many elements in an array are greater than a given number.

var ar=[2,3,7,3,2,7,5,7]
var n=3
count=0;
for(i in ar){
    if(ar[i]>n){
        count++
    }
}

console.log(count);
