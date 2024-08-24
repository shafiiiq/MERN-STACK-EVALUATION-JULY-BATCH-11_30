function mergearray(arr1,arr2){
  arr=[]
  arr1len=arr1.length
  arr2len=arr2.length
  maxlen=Math.max(arr1len,arr2len)

 for(i=0;i<maxlen;i++)
 {
  if(i<arr1len)
  {
    arr.push(arr1[i])
  }
  if(i<arr2len)
  {
    arr.push(arr2[i])
  }
 }
console.log(arr)
}
arr1=[1,2,3,4]
arr2=[3,4,5,6]
mergearray(arr1,arr2)
