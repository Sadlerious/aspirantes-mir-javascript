let $numero=4;
function suma($numero){
    let total=0;
    for(let i=1;i<=$numero;i=i+1){
    total=total+i;
    }
    
    return(total);
}
console.log(suma($numero));
$numero=10;
console.log(suma($numero));
$numero=15;
console.log(suma($numero));
