# RestaurantRioTinto
Alternativa B: Landing Page para un Restaurante Río Tinto ☕
Descripción: Diseña una página de aterrizaje moderna y apetitosa para un restaurante o cafetería ficticia. El objetivo es atraer a los clientes mostrando el ambiente, los platillos destacados y facilitando el contacto o la reserva.

Secciones Requeridas:
•	Encabezado y Navbar: Una barra de navegación con el logo del restaurante y enlaces a secciones como "Menú", "Nosotros" y "Contacto".
•	Sección Principal (Hero): Una imagen de alta calidad de un platillo popular o del interior del local, con el nombre del restaurante y un eslogan atractivo.
•	Sobre Nosotros: Una sección que cuente una breve historia del restaurante, su filosofía o lo que lo hace especial.
•	Menú Destacado: Una sección que muestre 3 o 4 platillos principales. Usa Cards de Bootstrap para cada uno, incluyendo una imagen, nombre del platillo, una breve descripción y el precio.
•	Galería: Un Carrusel de Bootstrap para mostrar una colección de fotos atractivas de la comida, las bebidas y el ambiente del lugar.
•	Formulario de Contacto o Reservas: Un formulario simple para que los clientes puedan hacer preguntas o solicitar una reserva (Nombre, Email, Fecha, Número de personas).
•	Pie de Página (Footer): Información clave como el horario de atención, la dirección y el número de teléfono.

Componentes de Bootstrap Sugeridos: Navbar, Botones, Cards (para el menú), Carrusel, Formularios, Modal (para la confirmación de la reserva).


Requisitos Fundamentales:
1.	Estructura HTML: Tu archivo index.html debe usar etiquetas semánticas de HTML5 para una estructura clara y profesional (por ejemplo, <header>, <nav>, <main>, <section>, <footer>).

2.	Framework Bootstrap: Este es un proyecto centrado en Bootstrap. Debes usar:
o	El Sistema de Grillas de Bootstrap (<div class="container">, <div class="row">, <div class="col-md-4">, etc.) para crear tu diseño.
o	Al menos cinco Componentes de Bootstrap diferentes (ej. Navbar, Botones, Cards, Formularios, Modal, Carrusel, Acordeón).
o	Clases de Utilidad de Bootstrap para espaciado (m-3, py-4), colores (bg-primary, text-white), alineación de texto (text-center) y flexbox (d-flex).
3.	Interactividad con JavaScript: ¡Tu página no debe ser estática!
o	Incluye un formulario de contacto o registro.
o	Usando JavaScript, escucha el evento submit del formulario.
o	Dentro del manejador del evento, previene el envío por defecto (event.preventDefault()) y realiza una validación simple (ej. verificar que los campos no estén vacíos).
o	Si el formulario es válido, muestra un mensaje de éxito al usuario usando un Modal o Alert de Bootstrap.

4.	Diseño Adaptable (Responsive): El sitio web final debe ser completamente adaptable y verse limpio y profesional en teléfonos móviles, tabletas y computadoras de escritorio.
5.	Control de Versiones:
o	Inicializa un repositorio local de Git para tu proyecto.
o	Realiza commits frecuentes y significativos mientras construyes (ej. "feat: Agrega componente Navbar", "fix: Corrige layout responsive para móvil").
o	Crea un repositorio público en GitHub y sube tu código final.
