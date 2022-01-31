const game = {
  title: 'Guess the Number!',
  biggestNum: 5,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    //console.log(this.smallestNum)
    if (!this.secretNum) {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    }

    let guess = NaN
    do
    {
    guess = NaN
    while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
    guess = this.getGuess()
    }
  
      
      this.render(guess,this.secretNum,this.prevGuesses)
      this.prevGuesses.push(guess)
    } while (guess !== this.secretNum)
    return

    },
  prevGuesses:[],
  getGuess: function ()
  {
    
    let guess=parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)) 
    console.log('guess',guess)
    return guess
  },

  render: function (guess,secretNum,prevGuesses){
      if (guess === secretNum) {
        let response = `Congrats You guessed the number in ${1+prevGuesses.length} guesses!`
        alert(response)
        return
      }
      let high = 'high'
      let low = 'low'
      let response = `Your guess is too ${guess>secretNum? high:low}.  Previous guesses: ${prevGuesses.join(', ')}`
      //console.log(response)
      alert(response)
  },
  
}

//console.log(game.smallestNum)
game.play()
//game.getGuess()





