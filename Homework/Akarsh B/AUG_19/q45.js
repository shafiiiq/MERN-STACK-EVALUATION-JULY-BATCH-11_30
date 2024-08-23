// 45. Write a function to create an array of elements that are common between two arrays.

var arr1=['akarsh','rahul']
var arr2=['akarsh','rahul','Raju']

const newarr=arr2.filter(element=>(
    arr1.includes(element)
))

console.log(newarr);
