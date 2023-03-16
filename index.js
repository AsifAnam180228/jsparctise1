let firstCard = 10
let secondCard = 10
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.querySelector('#cards-el')
console.log(cardEl)

cardEl.textContent = "Cards: "+ firstCard + " "+ secondCard

let sum = firstCard + secondCard
sumEl.textContent = "Sum: "+ sum

function startGame()
{
    if(sum <= 20){
        message = "Do you want to draw a new card?"
        
    }
    else if(sum === 21){
        message ="You've got Blackjack"
        hasBlackjack = true
    }
    else{
        
        isAlive = false
        message = "You are out of the game!"
    }
    
    messageEl.textContent = message
}

function newCard()
{
    console.log("Drawing a new card")
}

