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

getPuzzle('5').then((puzzle) => {
    console.log(puzzle)
}, (error) => {
    console.log(`Error: ${error}`)
})

getCountry('US').then((country) => {
    console.log(country.name)   // There's an actual problem with the api, no problem in my code
}, (error) => {
    console.log(`Error: ${error}`)
})