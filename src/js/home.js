/* eslint-disable require-atomic-updates */
/* eslint-disable no-debugger */
const load = async () => {
  const API_URL = 'https://yts.lt/api/v2/list_movies.json'
  const movies = ['action', 'drama', 'animation']

  const $form = document.getElementById('form')
  const $home = document.getElementById('home')
  const $featuringContainer = document.getElementById('featuring')

  const $overlay = document.getElementById('overlay')
  const $modal = document.getElementById('modal')
  const $hideModal = document.getElementById('hide-modal')

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

  const featuringTemplate = ({ medium_cover_image, title }) => {
    return (
      `<div class="featuring">
        <div class="featuring-image">
          <img src="${medium_cover_image}" width="70" height="100" alt="">
        </div>
        <div class="featuring-content">
          <p class="featuring-title">Pelicula encontrada</p>
          <p class="featuring-album">${title}</p>
        </div>
      </div>`
    )
  }
  
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

  const addAttributes = (element, attributes) => {
    Object.keys(attributes).forEach(attr => element.setAttribute(attr, attributes[attr]))
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
  
  const putComponent = (lstMovies, element) => {
    element.innerHTML = ""
    lstMovies.forEach((movie) => {
      const htmlString = videoItemTemplate(movie)
      const html = document.implementation.createHTMLDocument()
      html.body.innerHTML = htmlString
      const component = html.body.children[0]
      component.addEventListener('click', () => showModal())
      element.appendChild(component)
    })
  }
  
  const renderMovies = async genre => {
    const apidata = await getData(API_URL, {genre})
    const $container = document.getElementById(genre)
    putComponent(apidata.data.movies, $container)
  }

  addSubmitListener()
  addHideModalListener()
  movies.forEach(movie => renderMovies(movie))
}

load()
