function maxindex(array) {
    if (!array.length) return -1;
    let maxind = 0;
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            maxind = i;
        }
    } return maxind;
} console.log(maxindex([1, 3, 2, 5, 8]));