function join(array) {
   if (!array.length) return 0;
   let str_acu = array[0];
   for (i = 1; i < array.length; i++) {
      str_acu = str_acu + " " + array[i];
   } return str_acu;
} console.log(join(["Hola","mundo","azul"]))