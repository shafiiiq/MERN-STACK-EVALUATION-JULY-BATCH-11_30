function positiveElement(arr){
    let flag=0;
     for(i=0;i<arr.length;i++){
         if(arr[i]<=0){
             flag=1
         }
     }
     if(flag==0){
         console.log("contain only postive element")
     }
     else{
         console.log("contain zero or negative")
     }
 
 
 }
 var arr=[1,0,4,5,6]
 positiveElement(arr)