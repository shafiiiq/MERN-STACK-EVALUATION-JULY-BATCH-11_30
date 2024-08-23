// 47. Write a function to capitalize the first letter of each string in an array of strings.

var arr=['akarsh','rahul']

function capf(ar){
    const newv=arr.map(elements=>{
       console.log(elements.slice(0,1).toUpperCase()+elements.slice(1)) 
    })
    
    
}

capf(arr)