// Write a function to check if an array is sorted in descending order.
function descend(a = []) {
    var flag = true
    for (i = 0; i < a.length - 1; i++) {
        if (a[i] < a[i + 1]) {
            flag = false
            break;
        }
        else {
            flag = true
        }
    }
    if (flag == true) {
        console.log("sorted in descending order");

    }
    else {
        console.log("not sorted in descending");

    }
}
descend([4, 3, 2, 1])
descend([1,2,3,4])