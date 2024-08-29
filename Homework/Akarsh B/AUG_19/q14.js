// 14. Write a function to find the median value of an array.

var arr=[2,17,3]

newarr=arr.sort((a,b)=>a-b)
full=newarr.length;
midlength=Math.floor(full/2);
if(full%2!==0){
    console.log(newarr[midlength]);

}else{
    mid1=newarr[midlength-1]
    mid2=newarr[midlength]
    console.log(Math.floor((mid1+mid2)/2));
}
console.log(newarr);
