// 26. Write a function to check if two arrays are equal (have the same elements in the same order).
let arr1 = [1, 2, 6, 5, 5, 2, 2]
let arr2 = [1, 2, 6, 5, 5, 2, 2]
flag=1
function check(arr1, arr2) {
  for(i=0;i<arr1.length;i++){
     if(arr1[i]!=arr2[i])
      flag=0 
  }
  if (flag==1){
    console.log('two arrays are Equal');
    
  }else{console.log('two arrays are Not Equal');
  }
   
}

check(arr1, arr2)