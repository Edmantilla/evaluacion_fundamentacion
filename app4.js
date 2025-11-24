
import { calcularImpuestoUnitario } from "./modulos/calcular_impuesto_unitario.js";

const procesarImpuestos = function() {
    let cantidadProductos = Number(prompt("Ingrese la cantidad de productos:"));
    let impuestoTotalAcumulado = 0;
    for (let i = 0; i < cantidadProductos; i++) {
        let valorProducto = Number(prompt(`Ingrese el valor del producto ${i + 1}:`));
        let porcentajeImpuesto = Number(prompt(`Ingrese el porcentaje de impuesto para el producto ${i + 1}:`));
        let impuestoUnitario = calcularImpuestoUnitario(valorProducto, porcentajeImpuesto);
        impuestoTotalAcumulado += impuestoUnitario;
    }
    return impuestoTotalAcumulado;
};

let totalImpuesto = procesarImpuestos();
console.log(`El impuesto total acumulado es: $${totalImpuesto.toFixed(2)}`);
