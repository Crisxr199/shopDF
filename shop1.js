document.addEventListener('DOMContentLoaded', function() {
    // Cargar el carrito desde localStorage o inicializarlo vacío
    let CARRITO = JSON.parse(localStorage.getItem('CARRITO')) || [];
    const botonCarrito = document.getElementById('CARRITO');
    const totalElement = document.getElementById('total');

    // Actualizar el número de productos en el botón "CARRITO"
    function actualizarCarritoVisual() {
        if (botonCarrito) {
            // Mantener el icono y solo actualizar el número de productos entre paréntesis
            botonCarrito.innerHTML = `<i class="fas fa-shopping-cart" style="font-size: 20px;"></i> CARRITO (${CARRITO.length})`;
        }
        actualizarTotal();
    }

    // Calcular el total del carrito
    function calcularTotal() {
        return CARRITO.reduce((total, producto) => {
            const precio = parseFloat(producto.precio.replace('$', ''));
            return total + precio;
        }, 0).toFixed(2); // Devuelve el total con dos decimales
    }

    // Mostrar el total en el carrito
    function actualizarTotal() {
        if (totalElement) {
            const total = calcularTotal();
            totalElement.textContent = `Total: $${total}`;
        }
    }

    // Agregar producto al carrito
    function agregarAlCarrito(event) {
        const boton = event.target;
        const producto = {
            id: boton.dataset.id,
            nombre: boton.dataset.nombre,
            precio: boton.dataset.precio,
            imagen: boton.dataset.imagen,
        };

        CARRITO.push(producto);

        // Guardar el carrito en localStorage
        localStorage.setItem('CARRITO', JSON.stringify(CARRITO));

        // Actualizar la visualización del carrito
        actualizarCarritoVisual();
    }

    // Asignar el evento "click" a todos los botones "Agregar"
    document.querySelectorAll('.addbutton').forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });

    // Actualizar el carrito visual al cargar la página
    actualizarCarritoVisual();
});

//MENU HAMBURGUESA 

// Obtener los elementos
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Agregar evento de clic para alternar la visibilidad del menú
hamburger.addEventListener('click', () => {
    // Alternar la clase 'open' en el menú y en el ícono
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
});

//BOTONES Y SCROLL 

// Seleccionamos el botón "BEBIDAS" y la sección de "BEBIDAS"
const tortasBtn = document.getElementById('tortasBtn');
const tortasSection = document.getElementById('tortasSection');

// Agregamos un evento al botón "BEBIDAS"
tortasBtn.addEventListener('click', function() {
  // Hacemos scroll hacia la sección de "BEBIDAS"
  tortasSection.scrollIntoView({
    behavior: 'smooth',  // Desplazamiento suave
    block: 'start'       // Alineación al inicio de la sección
  });
});


// Seleccionamos el botón "BEBIDAS" y la sección de "BEBIDAS"
const deliveryBtn = document.getElementById('deliveryBtn');
const deliverySection = document.getElementById('deliverySection');

// Agregamos un evento al botón "BEBIDAS"
deliveryBtn.addEventListener('click', function() {
  // Hacemos scroll hacia la sección de "BEBIDAS"
  deliverySection.scrollIntoView({
    behavior: 'smooth',  // Desplazamiento suave
    block: 'start'       // Alineación al inicio de la sección
  });
});


// Seleccionamos el botón "BEBIDAS" y la sección de "BEBIDAS"
const bebidasBtn = document.getElementById('bebidasBtn');
const bebidasSection = document.getElementById('bebidasSection');

// Agregamos un evento al botón "BEBIDAS"
bebidasBtn.addEventListener('click', function() {
  // Hacemos scroll hacia la sección de "BEBIDAS"
  bebidasSection.scrollIntoView({
    behavior: 'smooth',  // Desplazamiento suave
    block: 'start'       // Alineación al inicio de la sección
  });
});


// ESTE CODIGO PERMITIRA QUE LA WEB SE CARGUE HASTA QUE EL DOM ESTE AL 100% LOAD

window.addEventListener('load', function() {
    // La página está completamente cargada.
    // Aquí puedes agregar el código para mostrar la página.
    document.body.style.display = 'block'; // O cualquier otro método para mostrar la página.
  });
  
  // Oculta la página inicialmente
  document.body.style.display = 'none';

