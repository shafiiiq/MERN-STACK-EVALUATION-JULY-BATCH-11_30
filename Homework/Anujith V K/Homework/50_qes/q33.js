// Write a function to merge two arrays alternately (e.g., [1, 2] and [3, 4] becomes [1, 3, 2, 4]).
function mer(a = [], b = []) {
    let mergedarray = []
    let totallength = Math.max(a.length, b.length)
    for (i = 0; i < totallength; i++) {
        if (i < totallength) {
            mergedarray.push(a[i])
        }
        if (i < totallength) {
            mergedarray.push(b[i])
        }
    }
    console.log(mergedarray);
}
mer(n = [1, 2], m = [3, 4])