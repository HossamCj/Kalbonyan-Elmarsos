// DOM ==   Document Object Model

// Query and remove()
const p = document.querySelector('p')
p.remove()

// Query all and remove()
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = 'Replacing a new value from js'
    // p.remove()
})

// Create new element 
const newH2 = document.createElement('h2')
newH2.textContent = 'New Heading from js'
document.querySelector('body').appendChild(newH2)