// 14. Write a function to sort an array in ascending order.

var arr=[22,3,25,65,34,2]

function ascending(){
    var order=arr.sort(function(a,b){return a-b});
    console.log(order);
    
}
ascending()