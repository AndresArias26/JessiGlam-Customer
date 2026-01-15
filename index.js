// Setting the Year of the CopyRight
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

// Hamburger Menu
// 1. Selección de elementos del DOM
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const navbar = document.getElementById("navbar");

//Seleccionamos TODOS los enlaces que están dentro del menú
const navLinks = document.querySelectorAll("#nav-menu a");

// 2. Evento Click para abrir/cerrar menú móvil
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active"); // Agrega o quita la clase 'active'
});

// 3. Cerrar menú al hacer clic en un enlace
// Como 'navLinks' es una lista de varios elementos, usamos un bucle (forEach)

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Cuando se hace clic en un link, quitamos la clase 'active'
    navMenu.classList.remove("active");
  });
});
