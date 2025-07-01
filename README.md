# 🧪 Rick and Morty App

Explora personajes del universo de Rick and Morty. 

Esta aplicación te permite:

- Visualizción de los personajes principales.
- Consultar detalles de cada personaje.
- Buscar por ID.
- Generar un resumen de algún personaje con inteligencia artificial.

---

## 🏗 Decisiones arquitectónicas

### 🔹 Framework / Librerías utilizadas

- **React**: Elegí React porque permite construir interfaces de usuario dinámicas mediante una arquitectura de componentes que son reutilizables. Esto facilita el mantenimiento del código y la escalabilidad del proyecto. Además, su integración sencilla con APIs externas con la librería de Axios, permitió consumir sin problemas los datos de la API de Rick y Morty.
- **React Router Dom**: permitió gestionar rutas y vistas de forma declarativa, en este caso la página principal y la vista de detalles de personajes.
- **Axios**: Elegido para simplificar las peticiones HTTP gracias a su sintaxis clara y manejo eficiente de respuestas y errores.
- **@google/generative-ai**: para conectar con la API de Gemini de Google y generar descripciones creativas.
- **CodeSandbox**: como entorno de desarrollo online, por su facilidad para compartir y editar código rápidamente.

---

## ⚡ Estrategias de rendimiento

### - 🔄 Lazy Loading

Si la app fuera a escalar con miles de usuarios, dividiría el bundle para cargar vistas de forma diferida:

- **Vista de detalle (`CharacterDetail`)**: Actualmente, esta vista forma parte del bundle inicial, aunque solo se accede cuando el usuario navega a una URL como /character/:id. Usar React.lazy() y Suspense para cargar este componente solo cuando se necesita evitaría que React cargue código innecesario al inicio, mejorando el tiempo de carga inicial y reduciendo el uso de memoria.
- **Resumen generado por IA**: El código que se comunica con la API de Gemini y su librería @google/generative-ai podría importarse dinámicamente, desde otro componente solamente cuando el usuario presione el botón  de "Generar resumen". Esto es ideal porque se trata de una funcionalidad que muchos usuarios podrían no usar, y que además incluye una librería pesada.

Esto reduciría el tiempo de carga inicial y optimizaría el rendimiento en dispositivos lentos.



### - 🌐 Server-Side Rendering (SSR)

Usaría **SSR con Next.js** para reducir el tiempo de First Paint, es decir el tiempo que transcurre desde que el usuario solicita la página hasta que ve algo visible en la pantalla, como texto o imágenes. Next.js es un framework basado en React, que no solo permitiría renderizar del lado del servidor, sino también optimizar SEO, ya que los motores de búsqueda pueden indexar el contenido completo de cada página sin depender de JavaScript en el cliente.

En esta aplicación se podría:

- Renderizar la lista de personajes del home desde el servidor.
- Devolver HTML ya renderizado con los datos del personaje al acceder a `/character/:id`.

Esto haría que la app cargue más rápido en conexiones lentas y facilite la indexación en buscadores.



### - 🌐  Static Site Generation (SSG)

Usaría SSG con Next.js para generar páginas estáticas en tiempo de compilación, lo que permite entregar contenido pre-renderizado al instante, sin necesidad de esperar a que el servidor genere la vista en cada solicitud. Esto reduce drásticamente el tiempo de carga inicial y mejora la experiencia en dispositivos con conexiones lentas.

A diferencia del SSR, el contenido se genera una sola vez durante el despliegue, lo cual también reduce la carga en el servidor y mejora la escalabilidad de la aplicación.

Además, esta estrategia mejora el SEO, ya que los motores de búsqueda reciben HTML completamente renderizado, facilitando la indexación del contenido.

Con esto se podría:

- Generar estáticamente la página principal (/) con la primera página de personajes, ya que sus datos no cambian frecuentemente.

- Pre-generar páginas para los personajes más populares (/character/1, /character/2, etc.)

Esto haría que la app ofrezca una experiencia extremadamente rápida y eficiente para la mayoría de los usuarios, manteniendo al mismo tiempo la capacidad de escalar sin esfuerzo.

---

## 🔧 Guía de implementación

### 🖥 Ejecutar localmente

1. Clona este repositorio:
   ```bash
   git clone https://github.com/JuanAlvarezP/prueba-tecnica-kushki.git
   cd rickandmorty-explorer
2. Instala las dependencias:
   ```bash
   npm i o npm install
3. Crea un archivo .env en la raíz del proyecto (puedes guiarte del archivo .env.example):
   ```bash
   REACT_APP_GEMINI_API_KEY=tu_clave_api

   Para generar una clave de api puedes hacerlo totalmente gratis en el siguiente enlace: https://aistudio.google.com/apikey.
   
4. Ejecuta la app:
   ```bash
   npm start

Con estas instrucciones la aplicación se ejecutará en localmente el puerto 3000, por defecto. En caso de que ya esté utilizado, abrirá otro puerto.

## ¿Qué API se utilizó para la funcionalidad de la Inteligencia Artificial?
Se utilizó Gemini de Google. 


