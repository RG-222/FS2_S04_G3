//Obtiene las promociones guardadas en el navegador
let promociones = JSON.parse(localStorage.getItem("promociones")) || [];

//Crea la promoción inicial si no existe ninguna
if (promociones.length === 0) {
    const promocionInicial = {
        codigo: "FELICES50",
        nombre: "Promoción Felices 50",
        descuento: 10,
        descripcion: "10% de descuento de por vida para clientes que utilicen el código FELICES50."
    };
    promociones.push(promocionInicial);
    localStorage.setItem("promociones", JSON.stringify(promociones));
}

//Muestra las promociones registradas
function mostrarPromociones() {
    const listaPromociones = document.getElementById("listaPromociones");
    listaPromociones.innerHTML = "";
    if (promociones.length === 0) {
        listaPromociones.innerHTML =
            "<article><p>No hay promociones registradas.</p></article>";
        return;
    }
    promociones.forEach(function(promocion, indice) {
        const articulo = document.createElement("article");
        articulo.innerHTML = `
            <h3>${promocion.nombre}</h3>
            <p><strong>Código:</strong> ${promocion.codigo}</p>
            <p><strong>Descuento:</strong> ${promocion.descuento}%</p>
            <p>${promocion.descripcion}</p>
            <button type="button" onclick="eliminarPromocion(${indice})">
                Eliminar promoción
            </button>
        `;
        listaPromociones.appendChild(articulo);
    });
}
//Agrega una nueva promoción
document.getElementById("formPromocion").addEventListener("submit", function(event) {
    event.preventDefault();
    const codigo = document.getElementById("codigoPromocion").value.trim();
    const nombre = document.getElementById("nombrePromocion").value.trim();
    const descuento = document.getElementById("descuentoPromocion").value;
    const descripcion = document.getElementById("descripcionPromocion").value.trim();
    let mensajeError = "";

    //Comprueba que el código no esté vacío
    if (codigo === "") {
        mensajeError += "*El código es obligatorio.<br>";
    }

    //Comprueba que el nombre no esté vacío
    if (nombre === "") {
        mensajeError += "*El nombre de la promoción es obligatorio.<br>";
    }

    //Comprueba que el descuento sea válido
    if (descuento === "" || Number(descuento) <= 0 || Number(descuento) > 100) {
        mensajeError += "*El descuento debe estar entre 1% y 100%.<br>";
    }

    //Comprueba que la descripción no esté vacía
    if (descripcion === "") {
        mensajeError += "*La descripción es obligatoria.<br>";
    }

    //Comprueba que el código no esté repetido
    const codigoExiste = promociones.some(function(promocion) {
        return promocion.codigo.toUpperCase() === codigo.toUpperCase();
    });

    if (codigoExiste) {
        mensajeError += "*El código ingresado ya existe.<br>";
    }

    //Muestra los errores encontrados
    document.getElementById("errores").innerHTML = mensajeError;
    if (mensajeError !== "") {
        return;
    }

    //Crea la nueva promoción
    const nuevaPromocion = {
        codigo: codigo.toUpperCase(),
        nombre: nombre,
        descuento: Number(descuento),
        descripcion: descripcion
    };
    //Agrega la promoción a la lista
    promociones.push(nuevaPromocion);
    //Guarda las promociones en el navegador
    localStorage.setItem("promociones", JSON.stringify(promociones));
    alert("Promoción agregada correctamente!");

    //Limpia el formulario
    document.getElementById("formPromocion").reset();
    document.getElementById("errores").innerHTML = "";

    //Actualiza la lista
    mostrarPromociones();
});

//Elimina una promoción
function eliminarPromocion(indice) {
    const confirmar = confirm("¿Seguro que deseas eliminar esta promoción?");
    if (confirmar) {
        promociones.splice(indice, 1);
        localStorage.setItem("promociones", JSON.stringify(promociones));
        mostrarPromociones();
        alert("Promoción eliminada correctamente!");
    }
}
//Muestra las promociones al cargar la página
mostrarPromociones();