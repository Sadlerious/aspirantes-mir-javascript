let persona = {
    nombre: "Manuel",
    edad: 35,
    ciudad: "Bucaramanga",
    profesión: "Ingeniero"
}
/* console.log(persona); */
/* persona.presentacion = function () {
    return `${persona.nombre} ${persona.edad} ${persona.ciudad}`;
}
let mensaje = persona.presentacion();
console.log(mensaje); */
persona.hobbies = ["Pescar", "Dormir", "Leer"];
console.log(persona.hobbies);
for (i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}
