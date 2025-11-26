import { buscarElemento } from "./modulos/buscar_elementos.js";
// Solicitar al usuario la cantidad de elementos
let cantidad = parseInt(prompt("Ingrese la cantidad de elementos a ingresar: "));
let arreglos = [];

// Llenar el arreglo con los elementos ingresados por el usuario
for (let i = 0; i < cantidad; i++) {
    let elemento = prompt(`Ingrese el elemento ${i + 1}:`);
    arreglos.push(elemento);
}

// Solicitar al usuario el elemento a buscar
let buscar = prompt("Ingrese el elemento a buscar: ");
let encontrado = buscarElemento(arreglos, buscar);
// Mostrar el resultado de la búsqueda

if (encontrado) {
    console.log(`El elemento "${buscar}" fue encontrado en el arreglo.`);
} else {
    console.log(`El elemento "${buscar}" no fue encontrado en el arreglo.`);
}


