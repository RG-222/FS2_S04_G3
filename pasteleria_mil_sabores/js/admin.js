//Obtiene el usuario que inició sesión
const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

//Comprueba que exista un usuario administrador
if (!usuarioActivo || usuarioActivo.tipo !== "admin") {

    alert("Debes iniciar sesión como administrador!");

    window.location.href = "../login.html";
}

//Cierra la sesión del administrador
function cerrarSesion() {

    localStorage.removeItem("usuarioActivo");

    alert("Sesión cerrada correctamente!");

    window.location.href = "../login.html";
}