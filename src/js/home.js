const noChange = 'Aaron'
let change = '@afisaacs'

const changeName = newName => change = newName

console.log(`No chancge: ${noChange}`)
console.log(`Change: ${change}`)

changeName('Aaron Felipe')

console.log(`Change: ${change}`)