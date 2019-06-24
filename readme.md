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
