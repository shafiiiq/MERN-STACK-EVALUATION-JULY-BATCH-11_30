// Write a function to count the total number of characters in an array of strings.
function co(arr = []) {
    var count = 0
    var newe = arr.map(Element => {
        return Element.split("").length
    });
    for (i = 0; i < newe.length; i++) {
        count = count + newe[i]
    }
    console.log(count);
}
co(c = ["hai", "there", "zoople"])
