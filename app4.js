
import { calcularImpuesto } from "./modulos/calculo_iva.js";

// Función principal para procesar los vehículos y calcular impuestos
const procesarimpuesto = function (){
    let cantidad = parseInt(prompt("Ingresar la cantidad de vehiculos: "));
    let totalimpuestos = 0;
// Validar la entrada de cantidad
    if(isNaN(cantidad) || cantidad <=0) // Si la entrada no es un número válido o es menor o igual a cero
        {
        console.log("Ingrese un valor valido");
        return; // Salir de la función si la entrada es inválida
        }
    // Ciclo para ingresar los valores y porcentajes de impuestos de cada vehículo
        for (let i = 1;i <= cantidad;i++)
            {
                let valor = parseInt(prompt(`Ingrese el valor del vehiculo ${i}`)) // Solicitar el valor del vehículo
                let porcentaje = parseInt(prompt(`Ingrese el valor del impuesto del vehiculo ${i}`)) // Solicitar el porcentaje de impuesto del vehículo

                let impuesto = calcularImpuesto(valor,porcentaje); // Calcular el impuesto utilizando la función importada

                totalimpuestos += impuesto; // Acumular el impuesto total
            }
            // Mostrar el impuesto total acumulado
            console.log("El impuesto total acumulado es de " + totalimpuestos);

        }
        // Llamar a la función principal para iniciar el proceso
        procesarimpuesto();
    
        