let Cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cardsEl = document.getElementById("cards-el")
let player = {
    name: "Player",
    chips: 160
}

 let playerEl = document.getElementById("player-el")
 playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    Cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    document.getElementById("sum-el").textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < Cards.length; i++){
        cardsEl.textContent += Cards[i] + " "
    }
    if(sum < 21){
        message= "Do you want to draw a new card?"
    }    
    else if (sum === 21){
        message= "You've got Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }

    document.getElementById("message-el").textContent = message
}

function newCard(){
    if (isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        Cards.push(card)
        renderGame()
    }
}

function getRandomCard(){
    let rando = Math.floor(Math.random()*13) + 1
    if (rando > 10)
        return 10
    else if(rando === 1)
        return 11
    else
        return Math.floor(Math.random()*13) + 1 
} 