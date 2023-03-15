function max(array1) {
    if (!array1.length) return undefined;
    let maxnum = array1[0];
    for (let i = 1; i < array1.length; i++) {
        if (maxnum < array1[i]) maxnum = array1[i]
    } return maxnum;
}

console.log(max([1, 3, 2]));