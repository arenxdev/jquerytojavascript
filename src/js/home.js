/* eslint-disable no-debugger */
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

const renderMovies = async genre => {
  const apidata = await getData(API_URL, genre)
  const $container = document.getElementById(genre)
  putComponent(apidata.data.movies, $container)
}

const load = async () => {
  addSubmitListener('form')
  const movies = ['action', 'drama', 'animation']
  movies.forEach(movie => renderMovies(movie))
}

load()
