// 15. Write a function to find the mode (most frequent element) in an array.
var arr=[1,2,2,2,3,4,5,5,6]
frequent={}
index=0
maxfrequent=0
arr.forEach(elements=>{
    frequent[elements]=(frequent[elements]||0)+1;
    // console.log(frequent[elements]);
    if(maxfrequent<frequent[elements]){
        maxfrequent=frequent[elements]
        index=elements;
    }
})
console.log(index);
