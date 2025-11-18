/*Esto es un comentario*/

/* =======================================
FORMULARIO INTERACTIVO
   ======================================= */

// Obtener elementos del formulario por su ID
const form = document.getElementById('formContacto');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const fecha = document.getElementById('fecha');
const npersonas = document.getElementById('npersonas');
const mensaje = document.getElementById('mensaje');
const mensajeResultado = document.getElementById('mensajeResultado');

// Agregar event listener al formulario para escuchar el evento 'submit'
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Validar que los campos no estén vacíos
    if (nombre.value.trim() === '' || email.value.trim() === '' || mensaje.value.trim() === '' || fecha.value.trim() === '' || npersonas.value.trim() === '' ) {
        // Si hay algún campo vacío, mostrar mensaje de error
        mensajeResultado.textContent = '❌ Por favor, completa todos los campos.';
        mensajeResultado.style.color = 'red';
    } else {
        // Si todos los campos están completos, mostrar mensaje de agradecimiento
        mensajeResultado.textContent = '✅ ¡Gracias por tu mensaje! Te responderé pronto.';
        mensajeResultado.style.color = 'green';

        // Limpiar los campos después del envío exitoso
        nombre.value = '';
        email.value = '';
        fecha.value = '';
        npersonas.value = '';
        mensaje.value = '';


         // Oculta el mensaje después de 3 segundos
        setTimeout(() => {
            mensajeResultado.textContent = '';
        }, 3000)


    }
});




/* =======================================
CARRUSEL AUTOMÁTICO 
   ======================================= */

// Selecciona elementos del carrusel
const track = document.querySelector('.carousel-track');
const groups = document.querySelectorAll('.carousel-group');

// Índice para alternar entre grupo 0 y 1
let indexCarrusel = 0;

// Función que mueve el carrusel
function moverCarrusel() {
    // Mueve el contenedor completo usando translateX
    track.style.transform = `translateX(-${indexCarrusel * 100}%)`;

    // Si estamos en el segundo grupo, volvemos al primero
    indexCarrusel = (indexCarrusel + 1) % groups.length;
}

// Ejecuta la función cada 5 segundos
setInterval(moverCarrusel, 5000);



/* =======================================
SMOOTH SCROLL PARA NAVEGACIÓN
   ======================================= */

// Seleccionamos todos los enlaces del nav que comienzan con #
const enlacesNav = document.querySelectorAll('.nav-link[href^="#"]');

// Recorremos cada enlace y agregamos un evento de click
enlacesNav.forEach(enlace => {
    enlace.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el salto inmediato

        // Obtener la sección destino usando el atributo href
        const seccionDestino = document.querySelector(this.getAttribute('href'));

        // Aplicar desplazamiento suave (smooth)
        seccionDestino.scrollIntoView({
            behavior: "smooth", // Movimiento suave
            block: "start"      // Ir al inicio de la sección
        });
    });
});



