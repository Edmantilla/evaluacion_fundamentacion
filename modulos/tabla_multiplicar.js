
// • Arreglo con los resultados 1×n hasta 10×n.
export const generarTabla = (numero) => {
// Lógica para generar la tabla de multiplicar
    let resultados = [];
    for (let i = 1; i <= 10; i++) {
        resultados.push(i * numero);
    }
    return resultados;
}  ;

