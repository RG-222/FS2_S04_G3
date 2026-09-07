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

    //Detiene el inicio de sesión si existen errores
    if (mensajeError !== "") {
        return false;
    }

    //Comprueba si se está utilizando la cuenta de administrador
    if (correo === "admin@milsabores.cl" && contrasena === "admin123") {
        const administrador = {
            nombre: "Administrador",
            correo: correo,
            tipo: "admin"
        };

        //Guarda la sesión del administrador
        localStorage.setItem("usuarioActivo", JSON.stringify(administrador));
        alert("Inicio de sesión como administrador correcto!");
        window.location.href = "admin/index.html";
        return false;
    }

    //Obtiene los usuarios guardados en el navegador
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    //Busca al usuario por su correo
    const usuario = usuarios.find(function(usuario) {
        return usuario.correo === correo;
    });

    //Comprueba que el usuario exista y que la contraseña sea correcta
    if (!usuario || usuario.contrasena !== contrasena) {
        document.getElementById("errores").innerHTML =
            "El correo o la contraseña son incorrectos.";
        return false;
    }

    //Indica que el usuario es un cliente normal
    usuario.tipo = "cliente";

    //Guarda el usuario que inició sesión
    localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
    alert("Inicio de sesión correcto!");
    window.location.href = "index.html";
    return false;
}

//Detecta cuando se envía el formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    validarLogin();

});