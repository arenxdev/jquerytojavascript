# JQUERY A JAVASCRIPT

## INTRODUCCIÓN

### Bienvenidos al curso

Bienvenidos a este curso en el que aprenderás como pasar de trabajar con jQuery a JavaScript. Leonidas Esteban te estará acompañando en esta aventura y ayudándote a resolver todas tus dudas.

Puedes encontrar el repositorio del curso en la sección de archivos de la plataforma, también puede verlo en este enlace:
<https://github.com/LeonidasEsteban/jquery-to-js-curso>

### La historia de JQuery

jQuery es una librería de JavaScript que hizo su lanzamiento en el año 2006 con el fin de resolver diferentes problemáticas:

- Una misma forma de acceder al DOM
- Poder interacturar con datos en un servidor
- Crear animaciones

El problema con jQuery surgió cuando se empezó a exagerar su uso y darle menor importancia a aprender JavaScript. Esto genero malos hábitos de aprendizaje y hasta en algunos casos no diferenciar jQuery de JavaScript.

A la par de que algunos se quedaban en jQuery, estaba ocurriendo la revolución de JavaScript trayendo consigo librerías que resolvían problemas específicos.

Aun con estas nuevas librerías, seguía sin resolverse el problema de hacer que uno aprenda mas JavaScript que librerías o frameworks pues uno igual puede abusar de Vue, React o Angular.

Por eso en este curso aprenderás a NO depender de ninguna librería, las ventajas de esto son:

- Reutilizar conocimientos.
- Poder implementar soluciones sin dependencias.
- Estar más capacitado para las grandes empresas.

### Presentación del proyecto

Vamos a ver el proyecto en el que estaremos trabajando durante este curso. Te voy a entregar la maquetación previamente hecha y estaremos trabajando con JS para dar dinamismo a la página.

Para este curso primero vamos a hacer todo esto en Vanilla JS, y te esteremos dando consejos de cómo hacer estos ejercicios con Jquery.

## De JQuery a JavaScript

### Variables y funciones

En la primera parte de este curso vamos a buscar traer datos de un servicio externo, para ello vamos a utilizar la mezcla de varias combinaciones: Promesas, ajax/fecth y funciones asíncronas. Antes de implementar una Promesa debes saber dos cosas necesarias: Variables y Funciones.

Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let.

- var era la forma en que se declaraban las variables hasta ECMAScript 5.
- const y let es la forma en que se declaran las variables a partir de ECMAScript 6, const sirve - para declarar variables que nunca van a ser modificadas y en cambio let son variables que pueden ser modificadas.

Las funciones son piezas de código que puedes reutilizar y se declaran con la palabra function.

```javascript
  const noChange = 'Aaron'
  let change = '@afisaacs'

  const changeName = newName => change = newName

  console.log(`No chancge: ${noChange}`)
  console.log(`Change: ${change}`)

  changeName('Aaron Felipe')

  console.log(`Change: ${change}`)
```

### Promesas

Las **promesas** sirven para manejar nuestro código asíncrono.

> Una **promesa** es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona, o dicho de forma más cotidiana, se va a mandar una función para ver si falla o se ejecuta con éxito.

Al crear una promesa debemos pasarle por argumento la función que vamos a ejecutar de forma asíncrona, dicha función va a recibir dos parámetros para evaluar si se ejecuto bien la función o si fallo.

Nuestra promesa va a tener dos métodos para saber si todo salió bien o fallo. El método then se encarga cuando la promesa se cumplió exitosamente, mientras que el método catch se encarga cuando la promesa falla.

Dentro de JavaScript tenemos dos funciones para ejecutar una función después de algún tiempo, estas funciones son:

• setInterval: ejecutara una función cada x tiempo.
• setTimeout: ejecutara una función después de x tiempo.

Si queremos resolver varias promesas a la misma vez, Promise cuenta con un método llamado **all** que recibe un array de promesas como parámetro. Este método se termina cuando todas las promesas del array se terminan de ejecutar. Si una de las promesas falla entonces el método all saltara un error mandándote al método catch.

Promise también cuenta con el método **race** que te regresa los resultados de la promesa que termine primero.

### Tutorial de Ajax en JQuery y JavaScript

Una característica muy solicitada en cualquier sitio dinámico es solicitar datos a un servidor, denominado API. Para esto normalmente se utiliza **Ajax**.

Ajax recibe dos parámetros los cuales son la **url** de la API y un **objeto** donde pondrás la configuración que se usara para realizar la petición. En la configuración se añaden dos funciones para manejar cuando la petición se realizó correctamente y cuando falla.

JavaScript internamente cuenta con una función llamada **fetch** que también realiza peticiones a una API. Al igual que Ajax necesita dos parámetros, una **url** y una **configuración**, pero si solo le mandas la url **fetch** usará una configuración por defecto donde el método HTTP será GET.

>Fetch te regresa una promesa, esa promesa al resolverse te da los datos de respuesta y tiene un método llamado json que te regresa otra promesa con los datos en formato JSON.

Las promesas resuelven el _problema del Callback Hell_ haciendo que una promesa pueda devolver otra promesa y en lugar de ser anidadas como los callback, estas promesas son encadenadas.

```javascript
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data)
    },
    error: function(error) {
      console.log(error)
    }
  })

  fetch('https://randomuser.me/apiaa/')
  .then(res => res.json())
  .then(data => console.log(data.results[0].name.first))
  .catch(error => console.log(error))
```

### Funciones asíncronas

Una función asíncrona va a ser como una función normal, pero poniendo código asíncrono de forma que sea más fácil de leer de forma síncrona.

Para declarar una función asíncrona se usa la palabra reservada async, luego de eso declaras tu función de forma normal. Dentro de una función asíncrona cuentas con otra palabra reservada llamada await, lo que hará esta palabra es indicar que se debe esperar a que termine de ejecutarse ese fragmento de código antes de continuar.

Vamos a realizar peticiones con fetch a la API de yts para pedirle películas según su categoría y mostrarlas dentro de PlatziVideo. Sin el uso de funciones asíncronas para cada fetch tendríamos que usar los métodos then y catch, en cambio gracias a async/await solo debemos escribir la palabra await antes de cada promesa.

```javascript
  const load = async () => {

    const API_URL = 'https://yts.lt/api/v2/list_movies.json'
    const getData = async (url, genre) => {
      const action = await fetch(`${url}?genre=${genre}`)
      const data = await action.json()
      return data
    }

    const dataAction = await getData(API_URL, 'action')
    const dataHorror = await getData(API_URL, 'horror')
    const dataDrama = await getData(API_URL, 'drama')
    const dataAnimation = await getData(API_URL, 'animation')
    console.log(dataAction)  
    console.log(dataHorror)
    console.log(dataDrama)
    console.log(dataAnimation)
  }

  load()
```

### Selectores

Un selector nos sirve para poder manipular un objeto del DOM, puedes buscar dicho objeto ya sea por su id, clase, atributo, etc.

Para PlatziVideo necesitamos un selector de un contenedor para ponerle dentro la lista de películas.

En jQuery hacemos un selector de la siguiente forma:

```javascript
  const $home = $(‘ .home ’)
```

Por convención una variable que este represente un objeto del DOM lleva el signo $, esto es para tener claro que estamos manipulando un objeto del DOM y no algún tipo de información o dato.

Dentro de JavaScript existen distintas funciones para hacer selectores, entre ellas se encuentra:

- **getElementById**: recibe como parámetro el id del objeto del DOM que estás buscando. Te regresa un solo objeto.
- **getElementsByTagName**: recibe como parámetro el tag que estas buscando y te regresa una colección html de los elementos que tengan ese tag.
- **getElementsByClassName**: recibe como parámetro la clase y te regresa una colección html de los elementos que tengan esa clase.
- **querySelector**: va a buscar el primer elemento que coincida con el selector que le pases como parámetro.
- **querySelectorAll**: va a buscar todos los elementos que coincidan con el selector que le pases como parámetro.

```javascript
  const $actionContainer = document.getElementById('action')
  const $dramaContainer = document.getElementById('drama')
  const $animationContainer = document.getElementById('animation')

  const $featuringContainer = document.getElementById('featuring')
  const $form = document.getElementById('form')
  const $home = document.getElementById('home')

  const $modal = document.getElementById('modal')
  const $overlay = document.getElementById('overlay')
  const $hideModal = document.getElementById('hide-modal')

  const $modalTitle = $modal.querySelector('h1')
  const $modalImage = $modal.querySelector('img')
  const $modalDescription = $modal.querySelector('p')
```

### Creación de templates

Vamos a crear una plantilla con nuestro elemento base, dicha plantilla será recibirá valores dinámicos.

Dentro de jQuery, la creación de un template seria con un texto base y si nuestro texto cuenta con distintas líneas más aparte tuviera valores dinámicos se vería de la siguiente forma:

```javascript
  '<div class=”container”>' +
    '<p id='+ id +'>Hola Mundo<p>' +
  '<div>'
```

Desde ECMAScript 6 contamos con una nueva característica llamada template literals que se representan con las comillas invertidas ``, el ejemplo anterior pasaría a verse de esta forma:

```javascript
  `<div class="container">
    <p id=${id}>Hola Mundo<p>
  <div>`
```

Templeate creado en la clase

```javascript
  const videoItemTemplate = ({ medium_cover_image, title }) => {
    return (
    `<div class="primaryPlaylistItem">
      <div class="primaryPlaylistItem-image">
        <img src="${medium_cover_image}">
      </div>
      <h4 class="primaryPlaylistItem-title">
        ${title}
      </h4>
    </div>`
    )
  }
```

### Creación de DOM

La plantilla que creamos la clase anterior de momento es puro texto, no es un elemento HTML que podamos poner dentro del navegador pues si los imprimimos en el navegador lo único que veremos es texto.

Vamos a insertar la plantilla dentro de nuestro container, para ello recuerda que JavaScript se lee de arriba hacia abajo entonces debemos declarar la variable del container antes de llamar a algún método de éste.

Para convertir nuestra plantilla de texto a un Document Object Model necesitamos crear dentro de memoria un documento HTML, esto es posible gracias al método document.implementation.createHTMLDocument.

A este documento HTML le vamos a añadir al body, mediante innerHTML, nuestra plantilla de texto. Una vez añadida le pedimos al body el primer elemento hijo que tenga y este lo añadimos a nuestro container.

Este flujo es la magia que hay detrás de varias librerías y frameworks que nos ayudan a crear interfaces.

```javascript
  const load = async () => {
    const dataAction = await getData(API_URL, 'action')
    // const dataHorror = await getData(API_URL, 'horror')
    // const dataDrama = await getData(API_URL, 'drama')
    // const dataAnimation = await getData(API_URL, 'animation')

    const $actionContainer = document.getElementById('action')

    dataAction.data.movies.forEach(movie => {
      const htmlString = videoItemTemplate(movie)
      const html = document.implementation.createHTMLDocument()
      html.body.innerHTML = htmlString
      $actionContainer.append(html.body.children[0])
    })
  }

  load()
```

### Realizando funciones

En esta clase vamos a modificar nuestro código que se encarga de renderizar la plantilla de video para volverlo una función que pueda ser reutilizable. Dicha función recibirá dos parámetros, uno para saber sobre qué lista de películas va a iterar y otro para saber en que contenedor va a renderizar las películas.

```javascript
  const API_URL = 'https://yts.lt/api/v2/list_movies.json'

  const getData = async (url, genre) => {
    const action = await fetch(`${url}?genre=${genre}`)
    const data = await action.json()
    return data
  }

  const videoItemTemplate = ({ medium_cover_image, title }) => {
    return (
    `<div class="primaryPlaylistItem">
      <div class="primaryPlaylistItem-image">
        <img src="${medium_cover_image}">
      </div>
      <h4 class="primaryPlaylistItem-title">
        ${title}
      </h4>
    </div>`
    )
  }

  const putComponent = (lstMovies, element, ) => {
    let htmlComponent = ""
    lstMovies.forEach(movie => {
      const htmlString = videoItemTemplate(movie)
      htmlComponent += htmlString
    })
    element.innerHTML = htmlComponent
  }

  const renderMovies = async genre => {
    const apidata = await getData(API_URL, genre)
    const $container = document.getElementById(genre)
    putComponent(apidata.data.movies, $container)
  }

  const load = async () => {
    const movies = ['action', 'drama', 'animation']
    movies.forEach(movie => renderMovies(movie))
  }

  load()
```

### Eventos

Toda aplicación web necesita lidiar con interacciones del usuario, desde un click hasta arrastrar algún elemento, estas interacciones son escuchadas por el navegador mediante algo llamado eventos. Existen muchos tipos de eventos, el más común es el evento de click.

En esta clase vamos a trabajar con el evento click y submit.

Para que un elemento HTML pueda escuchar algún evento debemos usar el método addEventListener. Este método recibe dos parámetros, el nombre del evento que va a escuchar y la función que se va a ejecutar al momento de que se accione el evento.

> La página se recarga al momento de ejecutarse el evento submit, para evitar esto debemos quitarle la acción por defecto que viene en submit usando el método `event.preventDefault()`.

```javascript
  const addClickEvent = event => {
    console.log(event)
    alert('click')
  }

  const addSubmitListener = id => {
    const $form = document.getElementById('form')
    $form.addEventListener('submit', event => {
      event.preventDefault()
      console.log(event)
    })
  }

  const putComponent = (lstMovies, element) => {
    element.innerHTML = ""
    lstMovies.forEach((movie) => {
      const htmlString = videoItemTemplate(movie)
      const html = document.implementation.createHTMLDocument()
      html.body.innerHTML = htmlString
      const component = html.body.children[0]
      component.addEventListener('click', event => addClickEvent(event))
      element.appendChild(component)
    })
  }
```

### Clases y estilos CSS

En esta clase vamos a aprender a manipular las clases de CSS y estilos de nuestros elementos mediante JavaScript.

Dentro de cada elemento tenemos un método llamado classList, con este podemos ver las clases que tiene nuestro elemento y además llamar a otros métodos para añadir, borrar o hacer toggle a alguna clase.

De igual forma podemos acceder a todas las propiedades de CSS algún elemento mediante element.style.

```javascript
  const showModal = () => {
    $overlay.classList.add('active')
    $modal.style.animation = 'modalIn .8s forwards'
  }

  const addHideModalListener = () => {
    $hideModal.addEventListener('click', () => {
      setTimeout(() => $overlay.classList.remove('active'), 800)
      $modal.style.animation = 'modalOut .8s forwards'
    })
  }

  const addSubmitListener = () => {
    $form.addEventListener('submit', event => {
      event.preventDefault()
      $home.classList.add('search-active')
    })
  }
```

### Creación de elementos y asignación de atributos

Vamos a crear un elemento HTML sin usar un template string. Para crear el elemento desde cero vamos a usar el método document.createElement, este recibe como parámetro la etiqueta html del elemento que se quiere crear, no funciona mandándole el template string.

Para añadirle un atributo al elemento que acabamos de crear haremos uso del método setAttribute. Este recibe dos parámetros, uno indicando el nombre del atributo que vamos a añadir y el segundo parámetro indicando el valor de dicho atributo.

Vamos a crear una función para poder añadir múltiples atributos a un solo elemento.

```javascript
  const addAttributes = (element, attributes) => {
    Object.keys(attributes).forEach(attr => element.setAttribute(attr, attributes[attr]))
  }
  
  const addSubmitListener = () => {
    $form.addEventListener('submit', event => {
      event.preventDefault()
      $home.classList.add('search-active')
      const $loader = document.createElement('img')
      addAttributes($loader, {
        src: './src/images/loader.gif',
        height: '50px',
        width: '50px'
      })
      $featuringContainer.appendChild($loader)
    })
  }
```

### Formularios

La clase **FormData** permite parsear un formulario y obtener los datos que se tienen dentro de éste.

El formulario utiliza los atributos **name** para localizar los elementos del formulario

```html
  <form action="" class="search" id="form">
    <input type="text" name="name" placeholder="Buscar un artista o tema favorito"/>
  </form>
```

Para el ejercicio se realiza una mejora el el método getData en el cuál recibe un objeto con los filtros a aplicar

```javascript
  const getData = async (url, filters) => {
    let paramGet = ''
    if (filters) {
      paramGet += '?'
      Object.keys(filters).forEach(filter => {
        if (paramGet.length > 1) {
          paramGet += '&'
        }
        paramGet += `${filter}=${filters[filter]}`
      })
    }
    const action = await fetch(`${url}${paramGet}`)
    const data = await action.json()
    return data
  }

  const addSubmitListener = () => {
    $form.addEventListener('submit', async event => {
      $featuringContainer.innerHTML = ""
      event.preventDefault()
      $home.classList.add('search-active')
      const $loader = document.createElement('img')
      addAttributes($loader, {
        src: './src/images/loader.gif',
        height: '50px',
        width: '50px'
      })
      $featuringContainer.appendChild($loader)

      const data = new FormData($form)
      const searchInput = data.get('name')
      const movie = await getData(API_URL, {query_term: searchInput})
      const htmlString = featuringTemplate(movie.data.movies[0])
      $featuringContainer.innerHTML = htmlString
    })
  }
```

### Desestructuración de dobjetos

Destructuring assignment o asignación por desestructuración nos permite introducirnos en un objeto para así extraer un dato para asignarlo a otra variable y así limpiar nuestro código.
Esto se hace usando llaves; ‘{}’ y ‘:’.

Ej. dónde podríamos aplicar esto:

```javascript
  const { data: { movies } } = await getData(API_URL, {query_term: searchInput})
  const htmlString = featuringTemplate(movies[0])
```

### DataSet

La propieda **dataset** en HTMLElement proporciona una interfaz lectura/escritura para obtener todos los custom data attributes (data-*) de cada uno de los elementos. Esta disponible el acceso en HTML y en el DOM.  Dentro del map of DOMString, una entrada por cada custom data attribute.  Tomar en cuenta que la propiedad dataset puede leerse a si mismo, pero no modificarse directamente.

```javascript
  const videoItemTemplate = ({ medium_cover_image, title, id }, category) => {
    return (
    `<div class="primaryPlaylistItem" data-id="${id}" data-category="${category}">
      <div class="primaryPlaylistItem-image">
        <img src="${medium_cover_image}">
      </div>
      <h4 class="primaryPlaylistItem-title">
        ${title}
      </h4>
    </div>`
    )
  }
```

En la siguiente imagen se muestar el mapa del **DataSet**

![Dataset](./imgdocs/dataset.png)

