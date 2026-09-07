const productosGuardados = localStorage.getItem("productos");
if (!productosGuardados) {
    const productosIniciales = [
        {
            id: "TC001",
            categoria: "Tortas Cuadradas",
            nombre: "Torta Cuadrada de Chocolate",
            precio: 45000,
            descripcion: "Torta cuadrada de chocolate.",
            imagen: "assets/img/TortaCuadradaChocolate.jpg"
        },
        {
            id: "TC002",
            categoria: "Tortas Cuadradas",
            nombre: "Torta Cuadrada de Frutas",
            precio: 50000,
            descripcion: "Torta cuadrada de frutas.",
            imagen: "assets/img/TortaCuadradaVainilla.jpg"
        },
        {
            id: "TT001",
            categoria: "Tortas Circulares",
            nombre: "Torta Circular de Vainilla",
            precio: 40000,
            descripcion: "Torta circular de vainilla.",
            imagen: "assets/img/TortaCircularFrutilla.jpg"
        },
        {
            id: "TT002",
            categoria: "Tortas Circulares",
            nombre: "Torta Circular de Manjar",
            precio: 42000,
            descripcion: "Torta circular de manjar.",
            imagen: "assets/img/TortaCircularManjar.jpg"
        },
        {
            id: "PI001",
            categoria: "Postres Individuales",
            nombre: "Mousse de Chocolate",
            precio: 5000,
            descripcion: "Mousse individual de chocolate.",
            imagen: "assets/img/MousseIndividualchocolate.jpg"
        },
        {
            id: "PI002",
            categoria: "Postres Individuales",
            nombre: "Tiramisú Clásico",
            precio: 5500,
            descripcion: "Tiramisú clásico individual.",
            imagen: "assets/img/TiramisúIndividual.jpg"
        },
        {
            id: "PSA001",
            categoria: "Productos Sin Azúcar",
            nombre: "Torta Sin Azúcar de Naranja",
            precio: 48000,
            descripcion: "Torta de naranja sin azúcar.",
            imagen: "assets/img/TortaSinAzúcarNaranja.jpg"
        },
        {
            id: "PSA002",
            categoria: "Productos Sin Azúcar",
            nombre: "Cheesecake Sin Azúcar",
            precio: 47000,
            descripcion: "Cheesecake sin azúcar.",
            imagen: "assets/img/Cheesecake.jpg"
        },
        {
            id: "PT001",
            categoria: "Pastelería Tradicional",
            nombre: "Empanada de Manzana",
            precio: 3000,
            descripcion: "Empanada dulce de manzana.",
            imagen: "assets/img/EmpanadManzana.jpg"
        },
        {
            id: "PT002",
            categoria: "Pastelería Tradicional",
            nombre: "Tarta de Santiago",
            precio: 6000,
            descripcion: "Tarta tradicional de Santiago.",
            imagen: "assets/img/TartadeSantiago.jpg"
        },
        {
            id: "PG001",
            categoria: "Productos Sin Gluten",
            nombre: "Brownie Sin Gluten",
            precio: 4000,
            descripcion: "Brownie elaborado sin gluten.",
            imagen: "assets/img/Brownie.jpg"
        },
        {
            id: "PG002",
            categoria: "Productos Sin Gluten",
            nombre: "Pan Sin Gluten",
            precio: 3500,
            descripcion: "Pan elaborado sin gluten.",
            imagen: "assets/img/PanSinGluten.jpg"
        },
        {
            id: "PV001",
            categoria: "Productos Vegana",
            nombre: "Torta Vegana de Chocolate",
            precio: 50000,
            descripcion: "Torta vegana de chocolate.",
            imagen: "assets/img/TortaVeganaChocolate.jpg"
        },
        {
            id: "PV002",
            categoria: "Productos Vegana",
            nombre: "Galletas Veganas de Avena",
            precio: 4500,
            descripcion: "Galletas veganas de avena.",
            imagen: "assets/img/GalletasVeganasAvena.jpg"
        },
        {
            id: "TE001",
            categoria: "Tortas Especiales",
            nombre: "Torta Especial de Cumpleaños",
            precio: 55000,
            descripcion: "Torta especial para celebraciones de cumpleaños.",
            imagen: "assets/img/TortaCumpleaños.jpg"
        },
        {
            id: "TE002",
            categoria: "Tortas Especiales",
            nombre: "Torta Especial de Boda",
            precio: 60000,
            descripcion: "Torta especial para celebraciones de boda.",
            imagen: "assets/img/TortaEspecialBoda.jpg"
        }
    ];

    //Guardar
    localStorage.setItem("productos", JSON.stringify(productosIniciales));
}