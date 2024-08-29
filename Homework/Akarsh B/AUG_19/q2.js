// 2. Write a function to check if all elements in an array are positive.

var ar=[1,3,7,3,2,7,5,7]
flag=0
ar.forEach(element=>{
    if(element<=0){
        flag=1
    }
})

if(flag=0){
    console.log("all are positive");
    
}else{
    console.log("all are not positive");
    
}