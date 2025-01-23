// Cargar el carrito desde localStorage
let CARRITO = JSON.parse(localStorage.getItem('CARRITO')) || [];
const listaCARRITO = document.getElementById('lista-CARRITO');
const totalElement = document.getElementById('total');

// Mostrar productos en el carrito
function mostrarCARRITO() {
    // Limpiar la lista antes de mostrar los productos
    listaCARRITO.innerHTML = '';

    // Si el carrito está vacío
    if (CARRITO.length === 0) {
        listaCARRITO.innerHTML = '<p>Tu carrito está vacío.</p>';
        totalElement.textContent = 'Total: $0.00';
        return;
    }

    // Mostrar los productos en el carrito
    CARRITO.forEach(producto => {
        const li = document.createElement('li');
        li.classList.add('producto-carrito'); // Clase para estilos
        li.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto"> 
            <span class="nombre-producto">${producto.nombre}</span> - 
            <span class="precio-producto">$${producto.precio}</span>
        `;
        listaCARRITO.appendChild(li);
    });

    // Mostrar el total
    const total = CARRITO.reduce((total, producto) => {
        const precio = parseFloat(producto.precio.replace('$', '').replace(',', ''));
        return total + precio;
    }, 0).toFixed(2);

    totalElement.textContent = `Total: $${total}`;
}

// Vaciar el carrito (eliminando productos y datos del formulario)
function vaciarCARRITO() {
    // Eliminar los datos del carrito y del formulario (pedido)
    localStorage.removeItem('CARRITO');
    localStorage.removeItem('pedido'); // También eliminamos los datos del formulario
    
    // Limpiar los elementos del carrito en la página
    listaCARRITO.innerHTML = '<p>Tu carrito está vacío.</p>';
    totalElement.textContent = 'Total: $0.00';

    // También podemos eliminar los detalles del pedido en la página
    const carritoDiv = document.getElementById('CARRITO');
    carritoDiv.innerHTML = '<p>No se encontró ningún pedido.</p>';
}

// Mostrar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar los productos en el carrito
    mostrarCARRITO();

    // Asignar evento al botón "Vaciar Carrito"
    const botonVaciar = document.getElementById('vaciar-CARRITO');
    if (botonVaciar) {
        botonVaciar.addEventListener('click', vaciarCARRITO);
    }

    // Mostrar los detalles del pedido si existen
    const pedido = JSON.parse(localStorage.getItem('pedido'));
    const carritoDiv = document.getElementById('CARRITO');

    if (pedido) {
        carritoDiv.innerHTML = `
            <p><strong>Nombre:</strong> ${pedido.nombre}</p>
            <p><strong>Apellido:</strong> ${pedido.apellido}</p>
            <p><strong>Teléfono:</strong> ${pedido.telefono}</p>
            <p><strong>Ubicación:</strong> ${pedido.ubicacion}</p>
        `;
    } else {
        carritoDiv.innerHTML = '<p>No se encontraron datos del cliente.</p>';
    }
});

// CODIGO DE METODOS DE PAGO

// Obtener el botón y el div con las formas de pago
const botonPagar = document.getElementById('pagar');
const formasPagoDiv = document.getElementById('formas-pago');

// Asignar el evento al botón "Pagar"
botonPagar.addEventListener('click', function() {
    // Alternar la visibilidad del div
    formasPagoDiv.style.display = formasPagoDiv.style.display === 'none' ? 'block' : 'none';
    
    // Alternar la clase 'show' para animación
    formasPagoDiv.classList.toggle('show');
});

// CODIGO DE PAGO SIN UBICACIÓN
document.querySelector('.confirmar').addEventListener('click', function() {
    // Recuperar los datos del formulario desde localStorage
    const pedido = JSON.parse(localStorage.getItem('pedido'));

    // Verificar que existen los datos del pedido
    if (!pedido) {
        alert('No se encontraron datos del pedido.');
        return;
    }

    // Verificar que el carrito no esté vacío
    if (CARRITO.length === 0) {
        alert('No hay productos en el carrito.');
        return;
    }

    // Si los datos del pedido y los productos existen
    if (pedido && CARRITO.length > 0) {
        // Construir el mensaje con los datos del formulario
        let mensaje = `
            Nombre: ${pedido.nombre}
            Apellido: ${pedido.apellido}
            Teléfono: ${pedido.telefono}
            Ubicación: ${pedido.ubicacion}
            \n\nProductos en el carrito:\n
        `;

        // Añadir los productos del carrito al mensaje
        CARRITO.forEach(producto => {
            mensaje += `- ${producto.nombre} (Precio: $${producto.precio})\n`;
        });

        // Calcular el total del carrito
        const total = CARRITO.reduce((total, producto) => {
            const precio = parseFloat(producto.precio.replace('$', '').replace(',', ''));
            return total + precio;
        }, 0).toFixed(2);

        mensaje += `\nTotal: $${total}`;

        // Codificar el mensaje para usarlo en una URL
        const mensajeCodificado = encodeURIComponent(mensaje.trim());

        // Número de WhatsApp al que enviar el mensaje
        const numeroWhatsApp = '+584128110309';

        // Construir la URL para WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

        // Redirigir al usuario a la página de WhatsApp con el mensaje
        window.open(urlWhatsApp, '_blank'); // Se abre en una nueva pestaña
    } else {
        // Si no hay datos en localStorage o carrito vacío, mostrar un mensaje de error
        alert('No se encontraron datos de pedido o productos en el carrito.');
    }
});
