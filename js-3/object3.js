let receta = {};
receta.nombre = "Sandwich";
receta.ingredientes = [];
receta.ingredientes.push({ nombre: "pan", cantidad: 2 });
receta.ingredientes.splice(1, 0, { nombre: "Queso", cantidad: 1 });
let ingredientes = receta.ingredientes;
console.log(ingredientes[0].nombre); //imprime el nombre del primer ingrediente.
let totalingredientes = 0;
for (i = 0; i < receta.ingredientes.length; i++) {
  totalingredientes += receta.ingredientes[i].cantidad;
}
console.log(totalingredientes);
