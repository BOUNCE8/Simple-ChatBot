function quickSort (arr) {
    const pivot = arr.length - 1;
    const tail = 0;
    for (let head = 0; head < pivot; head++) {
        if (arr[head] < arr[pivot]) {
           [arr[head], arr[tail]] = [arr[tail], arr[head]]
           tail++
        }
    }
}