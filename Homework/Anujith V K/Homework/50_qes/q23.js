// Write a function to find the shortest string in an array of strings.
function shortest(arr = []) {
    let shortestindex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < arr[shortestindex].length) {
            shortestindex = i;
        }

    }

    console.log(arr[shortestindex]);
}
shortest(["hello", "there", "zoople"]);
