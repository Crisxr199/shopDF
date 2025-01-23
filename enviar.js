document.getElementById('inputenviar').addEventListener('click', function() {
    // Recoger los valores de los campos
    const nombre = document.getElementById('inputn').value.trim();
    const apellido = document.getElementById('inputa').value.trim();
    const telefono = document.getElementById('inputnu').value.trim();
    const ubicacion = document.getElementById('select1').value;

    // Validar que todos los campos estén llenos
    if (!nombre || !apellido || !telefono || !ubicacion) {
        // Si falta algún campo, mostrar la alerta
        document.getElementById('alert').style.display = 'block';
        return;
    }

    // Crear un objeto con los datos del formulario
    const formularioData = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        ubicacion: ubicacion
    };

    // Guardar los datos en localStorage
    localStorage.setItem('pedido', JSON.stringify(formularioData));

    // Verificar que los datos estén guardados correctamente en la consola
    console.log('Datos guardados en localStorage:', formularioData);

    // Redirigir a index.html
    window.location.href = 'shopp.html';
});

// Cerrar la alerta cuando se haga clic en el botón de cerrar
document.getElementById('closeAlert').addEventListener('click', function() {
    document.getElementById('alert').style.display = 'none';
});
