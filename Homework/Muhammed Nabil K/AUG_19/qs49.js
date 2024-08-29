
// var lowercaseWords = words.map(word => word.toLowerCase());
// console.log(lowercaseWords);
// var words = ["Hello","ABC"]

function toLowerCase(arr) {
    return arr.map(str => str.toLowerCase());
  }
  
  var words = ["HELLO", "WoRlD"];
  var lowerCaseArray = toLowerCase(words);
  
  console.log(lowerCaseArray);
