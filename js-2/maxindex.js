function maxindex(array2) {
    if (!array2.length) { return -1 };
    let maxind = 0;
    let max = array2[0];
    for (let i = 1; i < array2.length; i++) {
        if (max < array2[i]) {
            max = array2[i];
            maxind = i;
        }
    } return maxind;
} console.log(maxindex([1, 3, 2, 5, 8]));