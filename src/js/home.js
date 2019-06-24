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
