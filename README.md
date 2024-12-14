# Hospital Nueva Vida - Sitio Web

Este proyecto es un sistema web desarrollado en **React** con **Material-UI** para un hospital ficticio llamado "Hospital Nueva Vida". Su objetivo es proporcionar una interfaz profesional para la visualización de información sobre doctores, servicios médicos y la funcionalidad de agendar citas.

## Características

- **Doctores**: Sección que muestra información de los doctores, como su especialidad, años de experiencia y foto.
- **Servicios Médicos**: Lista de los servicios médicos disponibles en el hospital.
- **Agendar Cita**: Formulario interactivo para agendar citas médicas con validación de datos.
- **Citas Agendadas**: Visualización de las citas registradas (en este caso simuladas).

## Tecnologías Utilizadas

- **React**: Biblioteca para construir la interfaz de usuario.
- **Material-UI**: Framework para estilizar y estructurar componentes con un diseño moderno.
- **CSS personalizado**: Para ajustes adicionales de diseño y layout.

## Instrucciones de Uso

1. **Instalación**:

   - Clonar el repositorio o descargar los archivos.
   - Ejecutar el siguiente comando para instalar las dependencias:
     ```bash
     npm install
     ```

2. **Ejecución**:

   - Iniciar el servidor de desarrollo con:
     ```bash
     npm run dev
     ```
   - Acceder a la aplicación en `http://localhost:5173/`.

3. **Estructura del Proyecto**:
   - `src/components`: Contiene los componentes principales como `DoctorCard`, `AppointmentForm`, etc.
   - `src/context`: Maneja el estado global del proyecto usando React Context.
   - `src/theme.js`: Configuración del tema personalizado de Material-UI.

## Descripción del Diseño

- **Responsividad**: La aplicación está diseñada para adaptarse a diferentes tamaños de pantalla.
- **Estilo Profesional**: Uso de Material-UI para garantizar una interfaz limpia y moderna.
- **Organización**: Se implementaron `Grid` y `Paper` de Material-UI para un diseño bien estructurado.

## Consideraciones

Este proyecto es un ejercicio práctico para demostrar habilidades en React y Material-UI. No incluye conexión a una base de datos real ni lógica de backend para el manejo de citas.

---

**Autor:** Desarrollado como parte de una evaluación académica.
