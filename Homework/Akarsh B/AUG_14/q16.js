// 16. Write a function to create an array of even numbers from an existing array.

var arr=[1,2,3,4,5,6,7,8,9]

function evenarray(){
    for(i=0;i<=arr.length;i++){
        if(arr[i]%2==0){
            console.log(arr[i]);
            
        }
    }
}
evenarray()
