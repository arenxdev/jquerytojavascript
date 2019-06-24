/* eslint-disable no-debugger */
/* eslint-disable no-undef */
const API_URL = 'https://yts.lt/api/v2/list_movies.json'

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

const getData = async (url, genre) => {
  const action = await fetch(`${url}?genre=${genre}`)
  const data = await action.json()
  return data
}

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

// eslint-disable-next-line no-undef 
// const $home = $('.home .list #item')
// const $dramaContainer = document.getElementById('drama')
// const $animationContainer = document.getElementById('animation')

// const $featuringContainer = document.getElementById('featuring')
// const $form = document.getElementById('form')
// const $home = document.getElementById('home')

// const $modal = document.getElementById('modal')
// const $overlay = document.getElementById('overlay')
// const $hideModal = document.getElementById('hide-modal')

// const $modalTitle = $modal.querySelector('h1')
// const $modalImage = $modal.querySelector('img')
// const $modalDescription = $modal.querySelector('p')

