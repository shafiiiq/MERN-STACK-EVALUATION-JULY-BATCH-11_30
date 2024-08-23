// 40. Write a function to check if an array contains duplicate values.

var arr1=[1,2,4,4,5,6,5]
var flag=1
for(i=0;i<arr1.length;i++){
    for(j=i+1;j<arr1.length-1;j++){
        if(arr1[i]==arr1[j]){
            flag=1
            console.log(arr1[i],arr1[j]);
            
        }else{
            flag=0
        }
    }
}
if(flag==1){
    console.log("contains duplicate");
    
}else{
    console.log("doesnot contains duplicate");
}