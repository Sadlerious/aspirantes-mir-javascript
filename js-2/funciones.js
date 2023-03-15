function sum(arreglo) {
    if (arreglo.length === 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i <= arreglo.length - 1; i = i + 1) {
        total = total + arreglo[i];
    }
    return total;
}
console.log(sum([10, 8, 5, 12]));
console.log(sum([]));
