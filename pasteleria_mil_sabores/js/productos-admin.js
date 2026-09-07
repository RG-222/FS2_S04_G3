//Lista de productos que se encuentran guardados
let productos = JSON.parse(localStorage.getItem("productos")) || [];
let indiceEditando = -1;

//Guarda los productos en el navegador
function guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

//Muestra los productos registrados
function mostrarProductos() {
    const listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML = "";
    if (productos.length === 0) {
        listaProductos.innerHTML = "<p>No hay productos registrados.</p>";
        return;
    }
    productos.forEach(function(producto, indice) {
        const articulo = document.createElement("article");
        articulo.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p><strong>Código:</strong> ${producto.id}</p>
            <p><strong>Categoría:</strong> ${producto.categoria}</p>
            <p>${producto.descripcion}</p>
            <p><strong>Precio:</strong> $${producto.precio.toLocaleString("es-CL")}</p>
            <button type="button" onclick="editarProducto(${indice})">
                Editar
            </button>

            <button type="button" onclick="eliminarProducto(${indice})">
                Eliminar
            </button>
        `;
        listaProductos.appendChild(articulo);
    });
}

//Agrega un nuevo producto o guarda los cambios
document.getElementById("formProducto").addEventListener("submit", function(event) {
    event.preventDefault();
    const codigo = document.getElementById("codigoProducto").value.trim();
    const categoria = document.getElementById("categoriaProducto").value;
    const nombre = document.getElementById("nombreProducto").value.trim();
    const descripcion = document.getElementById("descripcionProducto").value.trim();
    const precio = document.getElementById("precioProducto").value;
    const imagen = document.getElementById("imagenProducto").value.trim();
    let mensajeError = "";

    //Comprueba que el código no esté vacío
    if (codigo === "") {
        mensajeError += "*El código del producto es obligatorio.<br>";
    }

    //Comprueba que la categoría haya sido seleccionada
    if (categoria === "") {
        mensajeError += "*Debes seleccionar una categoría.<br>";
    }

    //Comprueba que el nombre no esté vacío
    if (nombre === "") {
        mensajeError += "*El nombre del producto es obligatorio.<br>";
    }

    //Comprueba que la descripción no esté vacía
    if (descripcion === "") {
        mensajeError += "*La descripción del producto es obligatoria.<br>";
    }

    //Comprueba que exista un precio válido
    if (precio === "" || Number(precio) <= 0) {

        mensajeError += "*El precio debe ser mayor que cero.<br>";
    }

    //Comprueba si el código ya existe
    const codigoExiste = productos.some(function(producto, indice) {
        return producto.id === codigo && indice !== indiceEditando;
    });

    if (codigoExiste) {
        mensajeError += "*El código ingresado ya existe.<br>";
    }

    //Muestra los errores encontrados
    document.getElementById("errores").innerHTML = mensajeError;
    if (mensajeError !== "") {
        return;
    }

    //Crea el producto con los datos ingresados
    const producto = {
        id: codigo,
        categoria: categoria,
        nombre: nombre,
        descripcion: descripcion,
        precio: Number(precio),
        imagen: imagen
    };

    //Comprueba si se está agregando o editando un producto
    if (indiceEditando === -1) {
        productos.push(producto);
        alert("Producto agregado correctamente!");
    } else {
        productos[indiceEditando] = producto;
        alert("Producto modificado correctamente!");
    }
    //Guarda los cambios
    guardarProductos();

    //Reinicia el formulario
    document.getElementById("formProducto").reset();
    document.getElementById("errores").innerHTML = "";
    document.getElementById("botonGuardar").textContent = "Agregar producto";
    indiceEditando = -1;
    //Actualiza la lista
    mostrarProductos();
});

//Permite editar un producto
function editarProducto(indice) {
    const producto = productos[indice];
    document.getElementById("codigoProducto").value = producto.id;
    document.getElementById("categoriaProducto").value = producto.categoria;
    document.getElementById("nombreProducto").value = producto.nombre;
    document.getElementById("descripcionProducto").value = producto.descripcion;
    document.getElementById("precioProducto").value = producto.precio;
    document.getElementById("imagenProducto").value = producto.imagen;
    indiceEditando = indice;
    document.getElementById("botonGuardar").textContent = "Guardar cambios";
    document.getElementById("errores").innerHTML = "";
    document.getElementById("formProducto").scrollIntoView();
}

//Elimina un producto
function eliminarProducto(indice) {
    const confirmar = confirm("¿Seguro que deseas eliminar este producto?");
    if (confirmar) {
        productos.splice(indice, 1);
        guardarProductos();
        mostrarProductos();
        alert("Producto eliminado correctamente!");
    }
}

//Muestra los productos al cargar la página
mostrarProductos();