# Sistema de Gestión de Notas

Este proyecto es un sistema de gestión de notas diseñado para permitir a los profesores registrar y administrar las calificaciones de los estudiantes a lo largo de diferentes semestres o periodos de progreso.

## Características

- Registro y gestión de estudiantes.
- Registro de notas para diferentes semestres o periodos de progreso.
- Cálculo automático de promedios por semestre y notas mínimas necesarias para el próximo periodo.
- Visualización de resultados agrupados por estudiante y semestre.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Marco de trabajo para aplicaciones web en Node.js.
- **MongoDB**: Base de datos NoSQL para almacenar los registros de estudiantes y notas.
- **Mongoose**: Biblioteca de modelado de objetos para MongoDB y Node.js, facilita la interacción con la base de datos.
- **Handlebars**: Motor de plantillas para crear la interfaz de usuario y visualizar los datos.
### Node.js

[Node.js](https://nodejs.org/) es un entorno de ejecución para JavaScript construido sobre el motor V8 de Chrome, que permite desarrollar aplicaciones del lado del servidor utilizando JavaScript. En este proyecto, Node.js proporciona la base para ejecutar nuestra aplicación, facilitando la gestión de dependencias, la ejecución de scripts y la interacción con la base de datos.

### Express

[Express](https://expressjs.com/) es un marco de trabajo minimalista y flexible para Node.js que ofrece un conjunto robusto de características para aplicaciones web y móviles. Con Express, hemos estructurado nuestra aplicación siguiendo el patrón MVC, lo que facilita la organización del código y mejora su mantenibilidad.

### Estructura MVC

El patrón Modelo-Vista-Controlador (MVC) es un patrón de arquitectura de software que separa la aplicación en tres componentes principales:

- **Modelo**: Representa la lógica de negocio y los datos. En nuestro proyecto, los modelos interactúan con la base de datos para consultar y persistir información.
- **Vista**: Se encarga de la presentación de la interfaz de usuario. Utilizamos [Handlebars](https://handlebarsjs.com/) como motor de plantillas para generar el HTML que se muestra al usuario, basándonos en los datos proporcionados por el controlador.
- **Controlador**: Actúa como un intermediario entre el modelo y la vista, gestionando la lógica de control y las solicitudes del usuario. El controlador procesa la entrada, interactúa con el modelo y selecciona la vista para presentar la salida al usuario.

## Configuración y Ejecución

1. **Instalación de Dependencias**:

   Ejecute `npm install` para instalar las dependencias necesarias para el proyecto.

2. **Conexión a MongoDB**:

   Asegúrese de tener MongoDB instalado y ejecutándose en su sistema. Configure la cadena de conexión en el archivo `models/db.js`.

3. **Ejecución**:

   Inicie la aplicación con `npm start`. Esto iniciará el servidor en `http://localhost:3000` (ajuste el puerto según sea necesario).

## Desarrollo Futuro

- Implementación de autenticación para profesores y estudiantes.
- Extensión del sistema para soportar múltiples cursos y asignaturas.
- Mejora de la interfaz de usuario para una experiencia más interactiva y dinámica.
  
## Información de contacto
Galo Estrella
Telefono: 0981279648
Correo: galo.estrella@udlae.edu.ec
## Licencia

[MIT](LICENSE)

---


