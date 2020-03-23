const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split(""),
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every(letter => this.guessedLetters.includes(letter))

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
        return `Nice try! The word was '${this.word.join('')}'`
    } else {
        return `Great work! You guesses the work.`
    }    
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

    if (this.status !== 'playing') {
        return 
    } 

    if (!this.guessedLetters.includes(guess)) {
        this.guessedLetters.push(guess)

        if (!this.word.includes(guess)) {
            this.remainingGuesses--
        }
    }

    this.calculateStatus()
}






