console.log('Guess game party!')


const game = {

title: 'Guess the Number!',

biggestNum: 100,

smallestNum: 1,

secretNum: null,

prevGuesses :[],

getGuess(){

  let currentGuess = prompt (`Enter a guss between ${this.

    smallestNum} and ${this.biggestNum}`)

    console.log(currentGuess)

  },

  play: function() {

    this.secretNum = Math.floor(Math.random() * 

    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    while (this.smallestNum>= 1 && this.biggestNum <= 100){
      i++;
    
    
    }
  }
}
game.getGuess()