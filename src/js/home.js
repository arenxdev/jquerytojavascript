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
