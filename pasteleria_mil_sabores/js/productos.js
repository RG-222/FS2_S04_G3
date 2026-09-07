//Obtiene los productos guardados en el navegador
const productos = JSON.parse(localStorage.getItem("productos")) || [];

//Muestra los productos en el catálogo
function mostrarProductos(lista) {
    const catalogo = document.getElementById("catalogo-productos");
    catalogo.innerHTML = "";
    if (lista.length === 0) {
        catalogo.innerHTML = "<p>No hay productos que coincidan con los filtros.</p>";
        return;
    }
    lista.forEach(function(producto) {
        const articulo = document.createElement("article");
        let imagen = "";
        //Comprueba si el producto tiene una imagen
        if (producto.imagen !== "") {
            imagen = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
            `;
        }
        articulo.innerHTML = `
            ${imagen}
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p><strong>Precio:</strong> $${producto.precio}</p>
            <p><strong>Categoria:</strong> ${producto.categoria}</p>
            <a href="registro.html">Personalizar producto</a>
        `;
        catalogo.appendChild(articulo);
    });
}

//Filtra los productos según la categoría seleccionada
function filtrarProductos() {
    const categoria = document.getElementById("filtroCategoria").value;
    const productosFiltrados = productos.filter(function(producto) {
        const coincideCategoria =
            categoria === "todos" || producto.categoria === categoria;
        return coincideCategoria;
    });
    mostrarProductos(productosFiltrados);
}

//Detecta cuando cambia el filtro de categoría
document.getElementById("filtroCategoria").addEventListener("change", filtrarProductos);
//Muestra todos los productos al cargar la página
mostrarProductos(productos);