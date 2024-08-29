// Write a function to find the mode (most frequent element) in an array.
function mod(a = []) {
    const freq = {}
    a.forEach(element => freq[element] = (freq[element] || 0) + 1);
    let count = null
    let maxcount = 0
    for (element in freq) {
        if (maxcount < freq[element]) {
            maxcount = freq[element];
            count = element
        }
    }
    console.log(count);

}
mod([1, 2, 3, 4, 4, 4, 3, 2, 1, 1, 1, 1, 1, 1])