// Write a function to find the longest string in an array of strings.
function longest(arr = []) {
    var longg = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i].length > arr[longg].length) {
            longg = i
        }
    }
    console.log(arr[longg]);

}
longest(n = ["hai", "there", "zoople"])