export const buscarElemento = (arreglo, elemento) => {
// Recorre el arreglo para buscar el elemento
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === elemento) {
            return true;
        }

    }
return false;   // Si no se encuentra el elemento, retorna false
};
