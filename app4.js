
import { calcularImpuesto } from "./modulos/calculo_iva.js";

const procesarimpuesto = function (){
    let cantidad = parseInt(prompt("Ingresar la cantidad de vehiculos: "));
    let totalimpuestos = 0;

    if(isNaN(cantidad) || cantidad <=0)
        {
        console.log("Ingrese un valor valido");
        return;
        }
    
        for (let i = 1;i <= cantidad;i++)
            {
                let valor = parseInt(prompt(`Ingrese el valor del vehiculo ${i}`))
                let porcentaje = parseInt(prompt(`Ingrese el valor del impuesto del vehiculo ${i}`))

                let impuesto = calcularImpuesto(valor,porcentaje);

                totalimpuestos += impuesto;
            }

            console.log("El impuesto total acumulado es de " + totalimpuestos);

        }

        procesarimpuesto();
        