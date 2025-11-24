
import { generarTabla } from "./modulos/tabla_multiplicar.js";
// Solicitar al usuario el número base
let numeroBase = Number(prompt("Ingrese el número base para generar la tabla de multiplicar:"));
// Llamar la función
let resultados = generarTabla(numeroBase);
// Mostrar los resultados
console.log(`Tabla de multiplicar del ${numeroBase}:`, resultados);

