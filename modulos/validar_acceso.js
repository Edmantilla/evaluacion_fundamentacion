
export const validarAcceso = function(edad, contrasenaIngresada) {
    const contrasenaCorrecta = "12345"; // contraseña válida del sistema

    // Validaciones
    const esMayorDeEdad = edad >= 18;            // operador relacional
    const contrasenaValida = contrasenaIngresada === contrasenaCorrecta; // comparación estricta

    // Evaluar ambas condiciones con operador lógico AND
    if (esMayorDeEdad && contrasenaValida) {
        return "Acceso concedido: Bienvenido al sistema.";
    } else if (!esMayorDeEdad && !contrasenaValida) {
        return "Acceso denegado: Usted es menor de edad y la contraseña es incorrecta.";
    } else if (!esMayorDeEdad) {
        return "Acceso denegado: Debe ser mayor de edad.";
    } else {
        return "Acceso denegado: La contraseña no es válida.";
    }
};

