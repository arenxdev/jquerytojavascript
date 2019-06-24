/* eslint-disable no-debugger */
/* eslint-disable no-undef */
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

const load = async () => {
  
  const API_URL = 'https://yts.lt/api/v2/list_movies.json'
  const getData = async (url, genre) => {
    const action = await fetch(`${url}?genre=${genre}`)
    const data = await action.json()
    return data
  }

  const dataAction = await getData(API_URL, 'action')
  // const dataHorror = await getData(API_URL, 'horror')
  // const dataDrama = await getData(API_URL, 'drama')
  // const dataAnimation = await getData(API_URL, 'animation')
  console.log(dataAction)  
  
  dataAction.data.movies.forEach(movie => {
    const htmlString = videoItemTemplate(movie)
    console.log(htmlString)
  })
}

load()

// eslint-disable-next-line no-undef 
// const $home = $('.home .list #item')
// const $actionContainer = document.getElementById('action')
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

