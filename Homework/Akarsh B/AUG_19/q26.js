// 26. Write a function to check if two arrays are equal (have the same elements in the same order).
var arr1=[1,23,2,3]
var arr2=[1,23,2,3]
flag=1
for(i=0;i<arr1.length;i++){
    if(arr1[i]!==arr2[i]){
        flag=0;
    }else{
        flag=1;
    }
}
if(flag){
    console.log('equal')
}else{
    console.log('no');
    
}