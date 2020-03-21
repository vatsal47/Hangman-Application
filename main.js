const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split(""),
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function() {
    return this.word.map(letter => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            return letter
        } else {
            return '*'
        }
    }).join("")
}

Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()
    if (!this.guessedLetters.includes(guess)) {
        this.guessedLetters.push(guess)

        if (!this.word.includes(guess)) {
            this.remainingGuesses--
        }
    }
}






