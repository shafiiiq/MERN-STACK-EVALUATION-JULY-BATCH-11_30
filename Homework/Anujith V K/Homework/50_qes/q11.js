// Write a function to check if an array contains duplicate values.
function dupe(arr = []) {
    var count = 0
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
        }
    }
    if (count > 0) {
        console.log("has duplicate element");
    }
    else {
        console.log("no duplicate element");

    }
}
dupe(arr = [1, 2, 3])