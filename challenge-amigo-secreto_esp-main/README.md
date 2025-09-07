Amigo Secreto
Aplicación web para organizar el intercambio de regalos de amigo secreto. Permite agregar amigos a una lista y sortear aleatoriamente quién será el amigo secreto.
Funcionalidades

Agregar amigos: Captura nombres y los almacena en una lista
Validación: Verifica que no se ingresen nombres vacíos o duplicados
Lista dinámica: Muestra todos los amigos agregados en tiempo real
Sorteo aleatorio: Selecciona un amigo secreto al azar
Interfaz limpia: Campo de entrada se limpia automáticamente

Tecnologías Utilizadas

HTML5: Estructura de la página
CSS3: Estilos y diseño
JavaScript: Lógica de programación y funcionalidades

Cómo Usar

Agregar amigos:

Escribe el nombre de un amigo en el campo de entrada
Haz clic en el botón "Añadir"
El nombre aparecerá en la lista


Sortear amigo secreto:

Asegúrate de tener al menos un amigo en la lista
Haz clic en "Sortear amigo"
Se mostrará el resultado del sorteo



Estructura del Proyecto
amigo-secreto/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── app.js             # Lógica JavaScript
└── README.md          # Documentación
Funciones Principales
agregarAmigo()

Captura el valor del input
Valida que no esté vacío
Verifica que no sea un nombre duplicado
Actualiza el array y la lista visual

ActualizarListaDeAmigos()

Limpia la lista HTML
Recorre el array de amigos
Crea elementos <li> dinámicamente

sortearAmigo()

Genera un número aleatorio
Selecciona un amigo del array
Muestra el resultado en pantalla

limpiarCampoDeEntrada()

Limpia el campo de entrada después de cada acción

Características Técnicas

Validación en tiempo real: Previene nombres vacíos y duplicados
Manipulación del DOM: Creación dinámica de elementos HTML
Generación aleatoria: Usa Math.random() para el sorteo
Arrays dinámicos: Gestión eficiente de la lista de amigos

Objetivo del Proyecto
Este proyecto forma parte de un desafío de programación para fortalecer habilidades en:

Lógica de programación
Manipulación del DOM
Validación de datos
Trabajo con arrays
Eventos en JavaScript

Autor
Edson Moreno

