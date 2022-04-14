const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')
const game1 = new Hangman('o b t Islam', 3)

puzzleElement.textContent = game1.puzzle
guessesElement.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleElement.textContent = game1.puzzle
    guessesElement.textContent = game1.statusMessage
})  

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

// Making an HTTP request
// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     } else if (e.target.readyState === 4) {
//         console.log('An error has taken place')
//     }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
// request.send()

// const countryCode = "MX"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyStatet === 4) {
//         console.log('Unable to fetch data')
//     }
// })

// countryRequest.open('GET', 'https://restcountries.com/v3.1/all')
// countryRequest.send()