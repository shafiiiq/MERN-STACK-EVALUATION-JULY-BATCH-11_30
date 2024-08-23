// 46. Write a function to reverse the order of words in an array of strings.

var arr=['akarsh','rahul']

const newarr=arr.map(elements=>(
    elements.split('').reverse('').join('')
))
console.log(newarr)