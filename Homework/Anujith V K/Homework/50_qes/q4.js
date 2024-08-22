// Write a function to capitalize the first letter of each string in an array of strings.
function cap(arr = []) {
    var newarr = arr.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1)
    })
    console.log(newarr);

}
cap(n = ["hai", "there", "zoople"])