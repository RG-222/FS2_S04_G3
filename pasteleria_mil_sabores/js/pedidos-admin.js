//Obtiene los pedidos guardados en el navegador
let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

//Crea pedidos de ejemplo si no existen
if (pedidos.length === 0) {
    pedidos = [
        {
            numero: "PED001",
            cliente: "Cliente de prueba",
            producto: "Torta Cuadrada de Chocolate",
            cantidad: 1,
            total: 45000,
            fecha: "2026-09-10",
            estado: "Pendiente"
        },
        {
            numero: "PED002",
            cliente: "Cliente de prueba 2",
            producto: "Torta Circular de Manjar",
            cantidad: 1,
            total: 42000,
            fecha: "2026-09-12",
            estado: "En preparación"
        }
    ];
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

//Guarda los pedidos en el navegador
function guardarPedidos() {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

//Muestra los pedidos registrados
function mostrarPedidos() {
    const listaPedidos = document.getElementById("listaPedidos");
    listaPedidos.innerHTML = "";
    if (pedidos.length === 0) {
        listaPedidos.innerHTML =
            "<article><p>No hay pedidos registrados.</p></article>";
        return;
    }
    pedidos.forEach(function(pedido, indice) {
        const articulo = document.createElement("article");
        articulo.innerHTML = `
            <h3>Pedido ${pedido.numero}</h3>
            <p><strong>Cliente:</strong> ${pedido.cliente}</p>
            <p><strong>Producto:</strong> ${pedido.producto}</p>
            <p><strong>Cantidad:</strong> ${pedido.cantidad}</p>
            <p><strong>Total:</strong> $${pedido.total.toLocaleString("es-CL")}</p>
            <p><strong>Fecha de entrega:</strong> ${pedido.fecha}</p>
            <p><strong>Estado actual:</strong> ${pedido.estado}</p>
            <label for="estado-${indice}">
                Cambiar estado:
            </label>
            <select id="estado-${indice}" onchange="cambiarEstado(${indice})">
                <option value="Pendiente"
                    ${pedido.estado === "Pendiente" ? "selected" : ""}>
                    Pendiente
                </option>
                <option value="En preparación"
                    ${pedido.estado === "En preparación" ? "selected" : ""}>
                    En preparación
                </option>
                <option value="Enviado"
                    ${pedido.estado === "Enviado" ? "selected" : ""}>
                    Enviado
                </option>
                <option value="Entregado"
                    ${pedido.estado === "Entregado" ? "selected" : ""}>
                    Entregado
                </option>
            </select>
            <br><br>

            <button type="button" onclick="eliminarPedido(${indice})">
                Eliminar pedido
            </button>
        `;
        listaPedidos.appendChild(articulo);
    });
}

//Cambia el estado de un pedido
function cambiarEstado(indice) {
    const nuevoEstado = document.getElementById("estado-" + indice).value;
    pedidos[indice].estado = nuevoEstado;
    guardarPedidos();
    mostrarPedidos();
    alert("Estado del pedido actualizado!");
}

//Elimina un pedido
function eliminarPedido(indice) {
    const confirmar = confirm("¿Seguro que deseas eliminar este pedido?");
    if (confirmar) {
        pedidos.splice(indice, 1);
        guardarPedidos();
        mostrarPedidos();
        alert("Pedido eliminado correctamente!");
    }
}

//Muestra los pedidos al cargar la página
mostrarPedidos();