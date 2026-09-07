//Función para validar el formulario de registro
function validarRegistro() {
    const nombre = document.getElementById("nom").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fecha = document.getElementById("fecha").value;
    const contrasena = document.getElementById("contrasena").value;
    const confirmar = document.getElementById("confirmar").value;

    let mensajeError = "";

    //Comprueba que el nombre no esté vacío
    if (nombre === "") {
        mensajeError += "El nombre no puede quedar vacío.<br>";
    }
    //Comprueba que el apellido no esté vacío
    if (apellido === "") {
        mensajeError += "El apellido no puede quedar vacío.<br>";
    }
    // Comprueba que el correo tenga un formato válido
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "") {
        mensajeError += "El correo no puede quedar vacío.<br>";
    } else if (!regexCorreo.test(correo)) {
        mensajeError += "El correo no tiene un formato válido.<br>";
    }
    //Comprueba que el teléfono no esté vacío
    if (telefono === "") {
        mensajeError += "El teléfono no puede quedar vacío.<br>";
    }
    // Comprueba que se haya ingresado una fecha
    if (fecha === "") {
        mensajeError += "La fecha de nacimiento es obligatoria.<br>";
    }
    //Comprueba la contraseña
    if (contrasena === "") {
        mensajeError += "La contraseña no puede quedar vacía.<br>";
    } else if (contrasena.length < 6) {
        mensajeError += "La contraseña debe tener al menos 6 caracteres.<br>";
    }
    //Comprueba que las contraseñas sean iguales
    if (confirmar === "") {
        mensajeError += "Debes confirmar tu contraseña.<br>";
    } else if (contrasena !== confirmar) {
        mensajeError += "Las contraseñas no coinciden.<br>";
    }
    //Muestra los errores encontrados
    document.getElementById("errores").innerHTML = mensajeError;
    //Detiene el envío si existen errores
    if (mensajeError !== "") {
        return false;
    }
    return true;
}

//Detecta cuando se intenta enviar el formulario
document.getElementById("datos").addEventListener("submit", function(event) {

    if (!validarRegistro()) {
        event.preventDefault();
    } else {
        event.preventDefault();

        alert("Registro realizado correctamente!");
    }

});