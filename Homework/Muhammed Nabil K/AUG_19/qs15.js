function frequentelement(arr){
    let frequent=[]
    let maxfrequent=0
    let index=0
    
    arr.forEach(element => {
    frequent[element]=(frequent[element]||0)+1 
    if(maxfrequent<frequent[element])
    {
     maxfrequent=frequent[element]
     index=element
    }
    });
    console.log(index)
 }
 var arr1=[1,2,3,2,5,2,6,3,7,2,8,3,2]
 frequentelement(arr1)