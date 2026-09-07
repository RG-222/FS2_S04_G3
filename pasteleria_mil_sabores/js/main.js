//Función para configurar el menú de navegación
function configurarMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const navbarMenu = document.getElementById("navbarMenu");

    //Comprueba que los elementos existan
    if (menuToggle && navbarMenu) {

        //Detecta cuando se presiona el botón
        menuToggle.addEventListener("click", function() {
            navbarMenu.classList.toggle("activo");
        });
    }
}

//Ejecuta la función cuando se carga la página
document.addEventListener("DOMContentLoaded", configurarMenu);
