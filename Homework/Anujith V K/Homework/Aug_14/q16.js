function Numbers(arr=[]) {
    return arr.filter(num => num % 2 === 0);
  }
  const evenNumbers =Numbers(n=[1,2,3,4,5,6,7,8,9,10]);
  
  console.log(evenNumbers);
  