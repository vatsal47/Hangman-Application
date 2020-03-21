const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split(""),
    this.guessedLetters = ['c', 'a']
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function() {
    return this.word.map(letter => {
        return(this.guessedLetters.includes(letter)) ? letter : '*'
    }).join("")
}

const firstGame = new Hangman('cat', 3,)
const secondGame = new Hangman('dog', 3)


