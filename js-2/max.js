function max(array) {
    if (!array.length) return undefined;
    let maxnum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (maxnum < array[i]) maxnum = array[i]
    } return maxnum;
}

console.log(max([1, 3, 2]));