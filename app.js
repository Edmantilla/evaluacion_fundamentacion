
import { calcularPromedio } from "./modulos/calcular_promedio.js";

let cantidad = Number(prompt("Ingrese la cantidad de notas:"));
let notas = [];

for (let i = 0; i < cantidad; i++) {
    let nota = Number(prompt(`Ingrese la nota ${i + 1}:`));
    notas.push(nota);
}

// Llamar la función
let resultado = calcularPromedio(notas);

// Mostrar resultados
console.log("Promedio final:", resultado.promedio);
console.log("Rendimiento:", resultado.rendimiento);

