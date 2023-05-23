// Parte del Menu

// Seleccionamos y guardamos el menu y el boton del menu
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
// Cuando hacemos click en el menu, a traves del evento click, agregamos la clase "mostrar" creada en nuestro css
btnMenu.addEventListener("click", function () {
  menu.classList.toggle("mostrar");
});

// Parte del SubMenu

// Seleccionamos y guardamos el subMenuBtn, si tenemos varios los seleccionamos todos
const subMenuBtn = document.querySelectorAll(".submenu-btn");
// Va a realizar un recorrido por cada submenu, si tenemos varios
for (let i = 0; i < subMenuBtn.length; i++) {
  // Detectamos en cual submenu hicimos click y agregamos la funcion
  subMenuBtn[i].addEventListener("click", function () {
    // Para no tener errores con el responsive, solo funciona para dispositivos menores a 1024
    if (window.innerWidth < 1024) {
      // Detectamos al submenu que sigue despues del boton que le hemos dado click, al hermano del que le hacemos click
      const subMenu = this.nextElementSibling;
      // Obtenemos el alto del subMenu para que aumente y empueje a los demas
      const height = subMenu.scrollHeight;
      // Agregamos la clase desplegar (que no existe), para poner y quitar el alto del subMenu(el estilo) y mostrar sus elementos
      if (subMenu.classList.contains("desplegar")) {
        subMenu.classList.remove("desplegar");
        subMenu.removeAttribute("style");
      } else {
        // Identificamos cuando el elemento tenga ese estilo, y agregamos la altura en pixeles
        subMenu.classList.add("desplegar");
        subMenu.style.height = height + "px";
      }
    }
  });
}
