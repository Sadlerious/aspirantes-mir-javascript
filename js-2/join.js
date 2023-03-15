function join(array3){
 let aryi=array3[0];
 for (i=1; i<array3.length;i++){
    aryi=aryi + " " + array3[i];
 } return aryi;
} console.log(join(["Hola","mundo","azul"]))