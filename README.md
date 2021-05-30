# 🦸 Superheroes App

Es una aplicación que permite crear un equipo de superhéroes consumiendo una API que permite buscar superhéroes.

## 💻 Funcionalidades

- La aplicación cuenta con un formulario para loguearse a través de una petición POST a una API con un correo electrónico y una contraseña, luego de chequear que ninguno de esos campos estén vacíos.
- El formulario de login muestra un mensaje de error si:
  - algunos de los inputs están vacíos
  - los datos enviados no son correctos
  - ocurrió un error que no permitió realizar la petición
- La home de la aplicación muestra:
  - un aviso si no hay ningún superhéroe en el equipo
  - la suma de los powerstats de los integrantes del equipo ordenados de mayor a menor
  - el peso y la altura promedios del equipo
  - un buscador de superhéroes que:
    - permite buscar héroes en una API
    - muestra un mensaje de error si no se encontró ningún superhéroe o se produjo un error al realziar la petición
    - desde cuyos resultados es posible agregar miembros al equipo
  - el listado de los miembros del equipo con nombre, imagen y powerstats, y botones para ver más detalles del personaje o eliminarlo del equipo
- Cada vez que el usuario intente agregar un superhéroe al equipo se valida que:
  - el personaje no forme parte del equipo
  - no se haya alcanzado el límite de seis miembros
  - no se haya alcanzado el límite de tres miembros con orientación buena ni de tres con orientación mala
- En caso de no pasar alguna validación al intentar agregar un superhéroe se informa cuál es el error

## 🔧 Tecnologías, librerías y herramientas utilizadas

- React
- React Router
- TailwindCSS
- ViteJS
- Heroicons
- Eslint
- Prettier

## 🏃 Cómo ejecutarlo

1. Clonar el repositorio

`git clone https://github.com/livchits/superheroes-app.git`

2. Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido

`VITE_API_ACCESS_TOKEN=API_TOKEN`

donde `API_TOKEN` es un token que se puede obtener en la web de la [SuperHero API](https://www.superheroapi.com/).

3. Instalar las dependencias con

`npm install`

4. Correr el proyecto en modo desarrollo con

`npm run dev`

## 📝 Puntos pendientes o para mejorar

- Implementar Portals de React para mostrar los modales.
- Los errores que puedan surgir de la validación al agregar nuevos personajes se muestran en alerts del navegador: podrían usarse modales o algún otro componente.
- Hacer más claro el código de la función que realiza las búsquedas: como hay respuestas de la API exitosas que son mensajes de error, el manejo de errores quedó algo "sucio" y quizá se lo pueda encapsular en otra función.
- Explorar posibilidades para mejorar cómo se crea la lista de detalles del componente Details.
- Sumar un header con un botón que permita cerrar sesión.
- Crear mejores componentes para algunas partes de la UI.
