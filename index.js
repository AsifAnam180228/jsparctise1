
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#cards-el')
let logEl = document.getElementById('log')

let player = {
    Name:  "Shaon",
    Chips: 145
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.Name +": $" +player.Chips

console.log(cards)

function getRandomCard()
{
    let randomNum = 1+ Math.floor(Math.random()*13)
    if(randomNum === 1){
        return 11
    }
    else if(randomNum>10){
        return 10
    }
    else
        return randomNum
}

function startGame()
{
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard

    renderGame()
}

function renderGame()
{
    cardEl.textContent = "Cards: "

    for(let i = 0; i<cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: "+ sum

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
    if(isAlive && !hasBlackjack){
        console.log("Drawing a new card")
        let thirdCard = getRandomCard()
        cards.push(thirdCard)
        sum += thirdCard
        console.log(cards)
        renderGame()
    }
    

}
// let person = {
//     name: "Asif Anam",
//     age: 24,
//     country: "Bangladesh"
// }
// function logData()
// {
//     let str = person.name + " is " + person.age + " years old and lives in "+ person.country

//     return str
// }

// let age = 35

// if(age<6){
//     console.log("Free")
// }
// else if(age>6 && age<17){
//     console.log("Child discount")
// }
// else if(age>17 && age<26){
//     console.log("student discount")
// }
// else if(age>26 && age<66){
//     console.log("full price")
// }
// else
//     console.log("Senior citizen discount")


// let largeCounties = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// largeCounties.shift()
// largeCounties.unshift("China")
// largeCounties.pop()
// largeCounties.push("Pak")

// let hands = ["rock", "paper", "secissor"]
// let randid = Math.random()

// let randIndex = Math.floor(randid*3)

// console.log(hands[randIndex])

