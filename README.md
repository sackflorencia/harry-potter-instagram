# Harry Potter Instagram

Harry Potter Instagram es una aplicación web inspirada en Instagram ambientada en el universo de Harry Potter.

La aplicación utiliza la Harry Potter API para obtener información de los personajes y simula una red social donde las cuatro casas de Hogwarts funcionan como perfiles de usuario. Cada casa posee publicaciones, seguidores, seguidos y una página de perfil propia. Además, los usuarios pueden visualizar publicaciones individuales, dar "like", guardar publicaciones y seguir perfiles.

### API usada
[HP-API](https://hp-api.onrender.com/)

### Diseño de referencia
**Figma:** [Instagram Web UI (Community)](https://www.figma.com/design/LDqBsYMjYQibrB1dKqISH7/Instagram---Web-UI--Recreated---Community-?node-id=1-2&p=f&t=r5fc82hMGaFWdlLl-0&)

### Funcionalidades
- Feed con publicaciones de todas las casas
- Perfiles individuales para cada casa de Hogwarts
- Perfil simulado del usuario logueado
- Visualización individual de publicaciones
- Sistema de seguimiento (Follow / Following)
- Sistema de Likes
- Sistema de guardado de publicaciones
- Comentarios simulados
- Navegación entre perfiles y publicaciones
- Persistencia local mediante Local Storage

## Stack

- React
- TypeScript
- React Router
- Vite
- Local Storage
- HP API

## Organización del proyecto
```bash
src
│
├── components
│
├── pages
│
├── interfaces
│
├── services
│
├── mappers
│
├── constants
│
├── router
│
└── assets
```

**Components:** Contiene todos los componentes reutilizables de la aplicación

**Pages:** Contiene las páginas principales que representan cada vista completa de la aplicación

**Interfaces:** Contiene las definiciones de tipos utilizadas en TypeScript

**Services:** Contiene la comunicación con APIs externas

**Mappers:** Contiene funciones encargadas de transformar datos provenientes de la API en modelos internos de la aplicación

**Constants:** Contiene datos estáticos utilizados por la aplicación

**Router:** Contiene la configuración de rutas de React Router

**Assets:** Contiene imágenes, avatares e íconos utilizados por la aplicación

## Componentización

La aplicación fue dividida en componentes pequeños y reutilizables para facilitar el mantenimiento, la reutilización de código y la separación de responsabilidades.

### Sidebar

Responsable de mostrar el menú lateral de navegación presente en toda la aplicación.

#### AppLogo

Muestra el logo principal de la aplicación.

#### NavigationItem

Representa cada opción del menú y permite navegar entre las distintas páginas mediante React Router. Se decidió separar cada elemento de navegación para evitar duplicación de código y facilitar la incorporación de nuevas rutas.

---

### ProfileHeader

Muestra toda la información principal de un perfil.

#### FollowButton

Permite seguir o dejar de seguir perfiles. Su estado se almacena utilizando Local Storage para mantener la información entre recargas.

#### ProfileStats

Agrupa las estadísticas del perfil.

#### StatItem

Representa una estadística individual:

* Publicaciones
* Seguidores
* Seguidos

Se decidió separar cada estadística para reutilizar la misma estructura visual y evitar código repetido.

---

### PostsGrid

Muestra las publicaciones de un perfil en formato grilla, similar a Instagram.

#### PostThumbnail

Representa una miniatura individual de una publicación. Cada miniatura funciona como enlace hacia la visualización individual del post. Se separó en un componente independiente para encapsular la lógica de navegación y mantener la responsabilidad del componente enfocada únicamente en la representación de una miniatura. Envía el post por state en el router.

---

### PostsList

Responsable de renderizar la lista de publicaciones presentes en el feed principal. Su única responsabilidad es recorrer los datos y renderizar múltiples componentes PostCard.

---

### PostCard

Representa una publicación completa. Se decidió dividirlo en varios componentes porque una publicación contiene diferentes responsabilidades visuales y funcionales. Además, el componente posee dos variantes:

* `feed`: utilizada dentro del feed principal.
* `detail`: utilizada en la visualización individual de una publicación.

Esto permitió reutilizar la mayor parte de la interfaz sin duplicar código.

#### PostHeader
Muestra la información básica del perfil propietario de la publicación. Incluye enlaces hacia el perfil correspondiente.

#### PostImage
Muestra la imagen principal de la publicación.

#### PostActions
Contiene las acciones disponibles sobre una publicación:

* Like
* Comentarios
* Compartir
* Guardar

Los estados de Likes y Guardados se almacenan utilizando Local Storage.

#### PostDescription

Muestra el nombre del perfil y la descripción de la publicación. Además, en la variante del detail permite acceder a la visualización completa de comentarios.

#### CommentList

Muestra los comentarios asociados a una publicación.

##### CommentItem

Representa un comentario individual.

La separación permite reutilizar la lista de comentarios en cualquier publicación y mantener desacoplada la lógica de visualización de comentarios respecto al componente principal del post.

---

### SuggestionsList

Muestra perfiles sugeridos para seguir.

#### ProfilePreview

Representa una vista reducida de un perfil mostrando:

* Avatar
* Nombre
* Botón de seguimiento

Se creó para reutilizar la misma estructura visual dentro de la lista de sugerencias.

---

### Loading

Muestra indicadores de carga mientras se esperan respuestas de la API.


## Comunicación entre componentes

La comunicación entre componentes se realiza mediante props. Algunos ejemplos son:

* FeedPage envía la lista de publicaciones a PostsList.
* PostsList envía cada publicación individual a PostCard.
* PostCard distribuye la información entre PostHeader, PostImage, PostActions y PostDescription.
* ProfilePage envía la información del perfil a ProfileHeader.
* ProfileHeader distribuye las estadísticas hacia ProfileStats y StatItem.
* SuggestionsList envía los datos de cada perfil a ProfilePreview.

Esta estrategia permite mantener los componentes desacoplados y reutilizables.

## Hooks utilizados

### useState

Se utilizó para:

* Almacenar publicaciones.
* Almacenar perfiles.
* Gestionar el estado de Follow / Following.
* Gestionar Likes.
* Gestionar publicaciones guardadas.
* Manejar estados de carga y visualización.

### useEffect

Se utilizó para:

* Realizar llamadas a la API.
* Cargar perfiles.
* Cargar publicaciones.
* Actualizar estados derivados de información obtenida externamente.

### useParams
Se utilizó para obtener parámetros dinámicos de la URL. Ejemplos:

```text
/profile/:house
/post/:postId
```

### useLocation
Se utilizó para transferir información de una publicación entre páginas durante la navegación sin necesidad de volver a consultar la API.

## Visualización individual de publicaciones
La aplicación posee una ruta específica para cada publicación:

```text
/post/:postId
```

Las miniaturas mostradas en el perfil utilizan React Router para navegar hacia la publicación correspondiente. Para reutilizar la interfaz se creó un único componente PostCard que posee dos variantes:

* feed
* detail

La variante feed se utiliza en el feed principal.

La variante detail se utiliza en la página individual de la publicación y permite visualizar información adicional como los comentarios asociados.

## Simulación del usuario logueado
La API utilizada no posee autenticación ni usuarios reales.

Para resolverlo se simuló un usuario logueado mediante una constante denominada:

```text
MY_HOUSE
```

Esta constante representa la casa asociada al usuario actual. Cuando el usuario navega hacia:

```text
/profile/me
```

la aplicación redirige internamente al perfil configurado en MY_HOUSE. Además:

* Se reemplaza el botón Follow por Edit Profile.
* Se mantiene una experiencia similar a Instagram para diferenciar entre el perfil propio y los perfiles externos.

## Datos mostrados en el perfil
Cada perfil muestra:

* Avatar de la casa.
* Nombre.
* Username.
* Biografía.
* Cantidad de publicaciones.
* Cantidad de seguidores.
* Cantidad de seguidos.

Los datos fueron construidos mediante mappers para transformar la información obtenida desde la API en modelos compatibles con la interfaz de usuario. Los datos que no estaban incluidos en la API como, por ejemplo, la biografía, fueron creados en constantes.

## Estados utilizados

### Likes

Permiten indicar si una publicación fue marcada como favorita. Se almacenan en Local Storage para persistir entre recargas.

### Guardados

Permiten marcar publicaciones como guardadas. También utilizan Local Storage.

### Follow

Permite seguir o dejar de seguir perfiles. El estado se persiste utilizando Local Storage.

### Publicación seleccionada

Se utiliza React Router para navegar entre el feed, perfiles y publicaciones individuales. La información de la publicación seleccionada se transfiere mediante el estado de navegación para reutilizar los datos ya cargados.

## Tecnologías y librerías complementarias

### Íconos

* [React Icons (Font Awesome)](https://react-icons.github.io/react-icons/icons/fa/)
* [React Icons (Feather Icons)](https://react-icons.github.io/react-icons/icons/fi/)

### Enrutamiento

* React Router DOM

### Persistencia local

* Local Storage

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/sackflorencia/harry-potter-instagram.git
```

Ingresar a la carpeta del proyecto:

```bash
cd harry-potter-instagram
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:5173
```
