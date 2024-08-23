var arr=[20,40,50,4]
value=5;
for(i=arr.length;i>0;i--){
    if(arr[i]>value){
        last=arr[i]
        break;
    }
}
console.log(last);
