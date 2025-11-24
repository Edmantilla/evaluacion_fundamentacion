// Función declarada que recibe un arreglo de notas
export function calcularPromedio(notas) {
    let suma = 0;

    // Recorrer el arreglo con un ciclo
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    // Calcular el promedio
    let promedio = suma / notas.length;

    // Determinar rendimiento
    let rendimiento = "";

    if (promedio >= 4.5) {
        rendimiento = "Alto";
    } else if (promedio >= 3.0) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }

    // Retornar ambos resultados
    return {
        promedio: promedio,
        rendimiento: rendimiento
    };
}

