/* eslint-disable require-atomic-updates */
/* eslint-disable no-debugger */
const load = async () => {
  const API_MOVIE = 'https://yts.lt/api/v2/list_movies.json'
  const API_USER = 'https://randomuser.me/api/'
  const movies = ['action', 'drama', 'animation']
  const listMovies = {}

  const $form = document.getElementById('form')
  const $home = document.getElementById('home')
  const $featuringContainer = document.getElementById('featuring')

  const $overlay = document.getElementById('overlay')
  const $modal = document.getElementById('modal')
  const $hideModal = document.getElementById('hide-modal')

  const $modalTitle = document.getElementById('modal-title')
  const $modalImage = document.querySelector('.modal-content img')
  const $modalDescription = document.querySelector('.modal-content p')

  const getDataMovies = async (url, filters) => getData(url, filters, 'movie')

  const getData = async (url, filters, type) => {
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
    if (type === 'movie') {
      if (data.data.movie_count > 0) {
        return data
      } else {
        throw ('The movie was not found')
      }
    }
    return data
  }

  const videoItemTemplate = ({ medium_cover_image, title, id }, category) => {
    return (
    `<div class="primaryPlaylistItem" data-id="${id}" data-category="${category}">
      <div class="primaryPlaylistItem-image">
        <img style="opacity: 0;" src="${medium_cover_image}">
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

  const userTemplate = () => {
    return (
      `<li class="playlistFriends-item">
        <a href="#">
          <img src="src/images/covers/echame-la-culpa.jpg" alt="echame la culpa" />
          <span>
            Luis Fonsi
          </span>
        </a>
      </li>`
    )
  }

  const findMovie = (id, category) => listMovies[category].find(item => item.id === parseInt(id, 10))
  
  const showModal = ({ currentTarget: $element }) => {
    $overlay.classList.add('active')
    $modal.style.animation = 'modalIn .8s forwards'
    const { id, category } = $element.dataset
    const data = findMovie(id, category)

    $modalTitle.textContent = data.title
    $modalImage.setAttribute('src', data.medium_cover_image)
    $modalDescription.textContent = data.description_full
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
      try {
        const { data: { movies } } = await getDataMovies(API_MOVIE, {query_term: searchInput})
        const htmlString = featuringTemplate(movies[0])
        $featuringContainer.innerHTML = htmlString
      } catch (error) {
        alert(error)
        $featuringContainer.removeChild($loader)
        $home.classList.remove('search-active')
      }
    })
  }

  const putMovieComponent = (lstMovies, element, genre) => {
    element.innerHTML = ""
    lstMovies.forEach(movie => {
      const htmlString = videoItemTemplate(movie, genre)
      const html = document.implementation.createHTMLDocument()
      html.body.innerHTML = htmlString
      const component = html.body.children[0]
      component.addEventListener('click', event => showModal(event))
      const image = component.querySelector('img')
      image.addEventListener('load', event => event.srcElement.classList.add('fadeIn'))
      element.appendChild(component)
    })
  }

  const putUserComponent = (lstUser, element) => {
    element.innerHTML = ""
    lstUser.forEach(user => {
      const htmlString = userTemplate(user)
      const html = document.implementation.createHTMLDocument()
      html.body.innerHTML = htmlString
      const component = html.body.children[0]
      element.appendChild(component)
    })
  }

  const renderMovies = async genre => {
    const apidata = await getDataMovies(API_MOVIE, {genre})
    const $container = document.getElementById(genre)
    putMovieComponent(apidata.data.movies, $container, genre)
    listMovies[genre] = apidata.data.movies
  }
  
  const renderUsers = async () => {
    const apidata = await getData(API_USER, {results: 10})
    const $container = document.getElementById('lst-friends')
    putUserComponent(apidata.results, $container)
  }

  addSubmitListener()
  addHideModalListener()
  movies.forEach(movie => renderMovies(movie))
  renderUsers()
}

load()
