// 15. Write a function to sort an array in descending order.

var arr=[22,3,25,65,34,2]

function descending(){
    var order=arr.sort(function(a,b){return b-a});
    console.log(order);
    
}
descending()