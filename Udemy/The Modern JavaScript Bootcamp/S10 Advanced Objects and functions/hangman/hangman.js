const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['d', 'o', 'b', 'k', 'g']
    
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle = puzzle + '*'
        }
    })

    return puzzle
}

const game1 = new Hangman('Dog', 2)
console.log(game1.getPuzzle())

const game2 = new Hangman('Book', 6)
console.log(game2.getPuzzle())