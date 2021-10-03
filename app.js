const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      console.log(play)
    },
    

    getGuess() {
      let userInput = parseInt(prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
        while (userInput > this.biggestNum || userInput < this.smallestNum || isNaN(userInput)) {
          userInput = parseInt(prompt (`This is wrong buddy, the guess must be between ${this.biggestNum} and ${this.smallestNum}. Trying again dude!`))
        
        } console.log(userInput)
  }

}

game.getGuess()