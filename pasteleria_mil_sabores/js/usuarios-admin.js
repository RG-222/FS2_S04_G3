// Obtiene los usuarios guardados en el navegador
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Calcula la edad del usuario
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const diferenciaMes = hoy.getMonth() - nacimiento.getMonth();
    if (
        diferenciaMes < 0 ||
        (diferenciaMes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
        edad--;
    }
    return edad;
}

// Muestra los usuarios registrados
function mostrarUsuarios() {
    const listaUsuarios = document.getElementById("listaUsuarios");
    if (!listaUsuarios) {
        return;
    }
    listaUsuarios.innerHTML = "";

    // Comprueba si existen usuarios registrados
    if (usuarios.length === 0) {
        listaUsuarios.innerHTML =
            "<article><p>No hay usuarios registrados.</p></article>";

        return;
    }

    // Recorre todos los usuarios guardados
    usuarios.forEach(function(usuario, indice) {
        const edad = calcularEdad(usuario.fecha);
        let beneficio = "No corresponde";
        if (edad > 50) {
            beneficio = "50% de descuento";
        }

        const articulo = document.createElement("article");
        articulo.innerHTML = `
            <h3>${usuario.nombre} ${usuario.apellido}</h3>
            <p>
                <strong>Correo:</strong> ${usuario.correo}
            </p>
            <p>
                <strong>Teléfono:</strong> ${usuario.telefono}
            </p>
            <p>
                <strong>Fecha de nacimiento:</strong> ${usuario.fecha}
            </p>
            <p>
                <strong>Edad:</strong> ${edad} años
            </p>
            <p>
                <strong>Beneficio:</strong> ${beneficio}
            </p>
            <button type="button" onclick="eliminarUsuario(${indice})">
                Eliminar usuario
            </button>
        `;
        listaUsuarios.appendChild(articulo);
    });
}

// Elimina un usuario registrado
function eliminarUsuario(indice) {
    const confirmar = confirm(
        "¿Seguro que deseas eliminar este usuario?"
    );
    if (confirmar) {
        usuarios.splice(indice, 1);
        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );
        mostrarUsuarios();
        alert("Usuario eliminado correctamente!");
    }
}

// Espera a que la página termine de cargar
document.addEventListener("DOMContentLoaded", function() {

    // Vuelve a obtener los usuarios guardados
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    mostrarUsuarios();

});