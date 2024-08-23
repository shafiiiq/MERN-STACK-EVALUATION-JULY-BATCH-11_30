// 20. Write a function to insert a new element at a specific index in an array.
var arr=[1,2,3,4,5,6]
var index=2;
value=5
function insert(arr){
    arr.splice(index,0,value)
    console.log(arr);
    
}
insert(arr)
