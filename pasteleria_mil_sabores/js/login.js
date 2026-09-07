//Función para validar el inicio de sesión
function validarLogin() {
    const correo = document.getElementById("correo").value.trim();
    const contrasena = document.getElementById("contrasena").value;
    let mensajeError = "";

    //Comprueba que el correo no esté vacío
    if (correo === "") {
        mensajeError += "El correo no puede quedar vacío.<br>";
    }
    //Comprueba que la contraseña no esté vacía
    if (contrasena === "") {
        mensajeError += "La contraseña no puede quedar vacía.<br>";
    }
    //Muestra los errores encontrados
    document.getElementById("errores").innerHTML = mensajeError;
    //Detiene la búsqueda si existen errores
    if (mensajeError !== "") {
        return false;
    }

    //Obtiene los usuarios guardados en el navegador
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Busca al usuario por su correo
    const usuario = usuarios.find(function(usuario) {
        return usuario.correo === correo;
    });
    //Comprueba que el usuario exista y que la contraseña sea correcta
    if (!usuario || usuario.contrasena !== contrasena) {
        document.getElementById("errores").innerHTML =
            "El correo o la contraseña son incorrectos.";
        return false;
    }

    //Guarda el usuario que inició sesión
    localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

    return true;
}

//Detecta cuando se envía el formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validarLogin()) {
        alert("Inicio de sesión correcto!");

        window.location.href = "index.html";
    }
});