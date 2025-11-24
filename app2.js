import { validarAcceso } from "./modulos/validar_acceso.js";

let edad = Number(prompt("Ingrese su edad:"));
let contrasena = prompt("Ingrese su contraseña:");

// Llamar la función
let mensaje = validarAcceso(edad, contrasena);

// Mostrar mensaje final
console.log(mensaje);