//Función para configurar los filtros de productos
function configurarProductos() {
    const categoria = document.getElementById("categoria");
    const busqueda = document.getElementById("busqueda");
    const productos = document.querySelectorAll(".producto");
    const sinResultados = document.getElementById("sin-resultados");
    //Comprueba que los elementos existan antes de continuar
    if (!categoria || !busqueda) {
        return;
    }
    //Función que realiza el filtrado de productos
    function filtrarProductos() {
        const categoriaSeleccionada = categoria.value;
        const textoBusqueda = busqueda.value.toLowerCase();
        let productosVisibles = 0;

        productos.forEach(function(producto) {
            const categoriaProducto = producto.dataset.categoria;
            const nombreProducto = producto.querySelector("h3").textContent.toLowerCase();

            const coincideCategoria =
                categoriaSeleccionada === "todos" ||
                categoriaProducto === categoriaSeleccionada;

            const coincideBusqueda =
                nombreProducto.includes(textoBusqueda);

            if (coincideCategoria && coincideBusqueda) {
                producto.style.display = "block";
                productosVisibles++;
            } else {
                producto.style.display = "none";
            }
        });
        //Muestra un mensaje cuando no existen resultados
        if (productosVisibles === 0) {
            sinResultados.style.display = "block";
        } else {
            sinResultados.style.display = "none";
        }
    }
    // Detecta cambios en la categoría
    categoria.addEventListener("change", filtrarProductos);
    // Detecta cuando el usuario escribe una búsqueda
    busqueda.addEventListener("input", filtrarProductos);
    // Ejecuta el filtro al cargar la página
    filtrarProductos();
}
//Ejecuta la función cuando se carga la página
document.addEventListener("DOMContentLoaded", configurarProductos);