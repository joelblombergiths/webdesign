const computerChoiceDisplay = document.getElementById('computerChoice')
const playerChoiceDisplay = document.getElementById('playerChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    playerChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()    
}))

function generateComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log(randomNumber)

    if(randomNumber === 0)
    {
        computerChoice = 'rock'
    }
    if(randomNumber === 1)
    {
        computerChoice = 'paper'
    }
    if(randomNumber === 2)
    {
        computerChoice = 'scissors'
    }
    if(randomNumber === 3)
    {
        computerChoice = 'lizard'
    }
    if(randomNumber === 4)
    {
        computerChoice = 'spock'
    }

    computerChoiceDisplay.innerHTML = computerChoice

    GetResult()
}

function GetResult()
{
    if(userChoice === computerChoice)
    {
        resultDisplay = 'Its a tie!'
        return
    }

    let winningChoice
    let choices = []
    choices.push(userChoice)
    choices.push(computerChoice)

    if(choices.includes('scissors') && choices.includes('paper'))
    {
        result = 'Scissors cuts Paper'
        winningChoice = 'scissors'
    }
    else if(choices.includes('paper') && choices.includes('rock'))
    {
        result = 'Paper covers Rock'
        winningChoice = 'paper'
    }
    else if(choices.includes('rock') && choices.includes('lizard'))
    {
        result = 'Rock crushes Lizard'
        winningChoice = 'rock'
    }
    else if(choices.includes('lizard') && choices.includes('spock'))
    {
        result = 'Lizard poisons Spock'
        winningChoice = 'lizard'
    }
    else if(choices.includes('spock') && choices.includes('scissors'))
    {
        result = 'Spock smashes Scissors'
        winningChoice = 'spock'
    }
    else if(choices.includes('scissors') && choices.includes('lizard'))
    {
        result = 'Scissors decapitates Lizard'
        winningChoice = 'scissors'
    }
    else if(choices.includes('lizard') && choices.includes('paper'))
    {
        result = 'Lizard eats Paper'
        winningChoice = 'lizard'
    }
    else if(choices.includes('paper') && choices.includes('spock'))
    {
        result = 'Paper disproves Spock'
        winningChoice = 'paper'
    }
    else if(choices.includes('spock') && choices.includes('rock'))
    {
        result = 'Spock vaporizes Rock'
        winningChoice = 'spock'
    }
    else if(choices.includes('rock') && choices.includes('scissors'))
    {
        result = 'Rock crushes Scissors'
        winningChoice = 'rock'
    }

    if(userChoice === winningChoice)
    {
        resultDisplay.innerHTML = 'Player wins! ' + result
    }
    else
    {
        resultDisplay.innerHTML = 'Player loses! ' + result
    }
}
