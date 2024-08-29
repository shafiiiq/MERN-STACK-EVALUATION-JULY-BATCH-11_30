// 43. Write a function to create a new array by multiplying corresponding elements of two arrays.
var arr1=[1,2,3,4,5,6,5]
var arr2=[2,4,6,2,2,2]

var arr=[]
if(arr1.length==arr2.length){
    for(i=0;i<arr1.length;i++){
        arr=arr1[i]*arr2[i]
        process.stdout.write(arr.toString()+' ')
    }
}else{
    if(arr1.length>arr2.length){
        for(i=0;i<arr2.length;i++){
            arr=arr1[i]*arr2[i]
            process.stdout.write(arr.toString()+' ')
        }
        for(i=arr2.length;i<arr1.length;i++){
            process.stdout.write(arr1[i].toString()+' ')
        }  

    }else{
        for(i=0;i<arr2.length;i++){
            arr=arr1[i]*arr2[i]
            process.stdout.write(arr.toString()+' ')
        } 
        for(i=arr1.length;i<arr2.length;i++){
            process.stdout.write(arr2[i].toString()+' ')
        } 
    }
}
