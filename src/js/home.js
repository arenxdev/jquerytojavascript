const noChange = 'Aaron'
let change = '@afisaacs'

const changeName = newName => change = newName

console.log(`No chancge: ${noChange}`)
console.log(`Change: ${change}`)

changeName('Aaron Felipe')

console.log(`Change: ${change}`)

const getUser = new Promise((resolve) => {
    setTimeout(() => resolve('All right in the life, first'), 3000)
})

const getUserAll = new Promise((resolve) => {
  setTimeout(() => resolve('All right in the life, last'), 5000)
})

// getUser
// .then(() => console.log('All right in the life'))
// .catch(error => console.log(error))

Promise.race([getUser, getUserAll])
.then(message => console.log(message))
.catch(error => error)

// eslint-disable-next-line no-undef
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

// eslint-disable-next-line no-undef 
// const $home = $('.home .list #item')
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
