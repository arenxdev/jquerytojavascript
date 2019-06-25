/* eslint-disable no-debugger */
const load = async () => {
  const API_URL = 'https://yts.lt/api/v2/list_movies.json'
  const movies = ['action', 'drama', 'animation']

  const $form = document.getElementById('form')
  const $home = document.getElementById('home')
  const $overlay = document.getElementById('overlay')
  const $modal = document.getElementById('modal')
  const $hideModal = document.getElementById('hide-modal')

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
    const apidata = await getData(API_URL, genre)
    const $container = document.getElementById(genre)
    putComponent(apidata.data.movies, $container)
  }

  addSubmitListener()
  addHideModalListener()
  movies.forEach(movie => renderMovies(movie))
}

load()
