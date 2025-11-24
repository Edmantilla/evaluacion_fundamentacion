
export function calcularImpuestoUnitario(valor, porcentaje) {
    // Cálculo del impuesto unitario
    let impuesto = (valor * porcentaje) / 100;
    return impuesto;
}

const procesarImpuestos = function() {
    let cantidadProductos = Number(prompt("Ingrese la cantidad de productos:"));
    let totalImpuesto = 0;
    for (let i = 0; i < cantidadProductos; i++) {
        let valorProducto = Number(prompt(`Ingrese el valor del producto ${i + 1}:`));
        let porcentajeImpuesto = Number(prompt(`Ingrese el porcentaje de impuesto para el producto ${i + 1}:`));
        let impuestoUnitario = calcularImpuestoUnitario(valorProducto, porcentajeImpuesto);
        totalImpuesto += impuestoUnitario;
    }
    return totalImpuesto;
};

let impuestoTotalAcumulado = procesarImpuestos();
console.log(`El impuesto total acumulado es: $${impuestoTotalAcumulado.toFixed}`);
