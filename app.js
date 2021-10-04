const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      do{
        this.prevGuesses.push(this.getGuess())
        this.render()
      } while (this.prevGuesses[this.prevGuesses.length-1] != this.secretNum
        );

    },
    
    getGuess(){
      let userInput = parseInt(prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))

        while (userInput > this.biggestNum || userInput < this.
          smallestNum || isNaN(userInput)) {
          
            userInput = parseInt(prompt (`This is wrong buddy, 
            
            the guess must be between ${this.biggestNum} and $
            
            {this.smallestNum}. Trying again dude!`))
          // console.log(getGuess)
        } 
        return userInput
  
  
      },


      render() {
        if (this.prevGuesses[this.prevGuesses.length -1] > this.secretNum) {
          alert(`Your guess was too high, try again! Previous guesses were ${this.prevGuesses.join()}`)
        } else if (this.prevGuesses[this.prevGuesses.length -1] < this.secretNum) {
          alert(`Your guess was too low, try again! Previous guesses were ${this.prevGuesses.join()}`)
        } else if ( this.prevGuesses[this.prevGuesses.length -1] === this.secretNum) {
          alert(`Right on the money! Your guess was the secret number ${this.secretNum}! Previous guesses were ${this.prevGuesses.join()}.`)
        }
      }
    }
game.play()
