

var arr=[22,14,6,86,75];


function small(){
    var smallest;
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            smallest=arr[i];
        }
    }
}
console.log(arr.indexOf(smallest));
}

small()