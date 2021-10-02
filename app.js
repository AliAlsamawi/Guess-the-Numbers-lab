const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess(){
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      while (smallestNum >= 1 && biggestNum <= 100) {
        ;
      }
    },
}
let userInput = prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`); {
  while (userInput > this.biggestNum || userInput < this.smallestNum) {
    userInput = prompt (`That's wrong dude, choose a number between ${this.biggestNum} and ${this.smallestNum}. Please try again.`)
  }
  
} 

game.getGuess()