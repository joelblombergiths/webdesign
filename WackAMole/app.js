const grid = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeftDisplay = document.querySelector('#timeLeft')
const scoreDisplay = document.querySelector('#score')

let result = 0;
let currentTime = 5
timeLeftDisplay.textContent = currentTime

let moleSquare
let moleTimerId
let countDownTimerId

grid.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == moleSquare)
        {
            result++
            scoreDisplay.textContent = 'Score: ' + result
            moleSquare = null
        }
    })
})

function moveMole()
{
    grid.forEach(square => {
        square.classList.remove('mole')        
    })

    let randomSquare = grid[Math.floor(Math.random() * grid.length)]
    randomSquare.classList.add('mole')
    moleSquare = randomSquare.id
}

function countDown()
{
    currentTime--
    timeLeftDisplay.textContent = currentTime
    
    if(currentTime == 0)
    {
        clearInterval(countDownTimerId)        
        clearInterval(moleTimerId)
        moleSquare = null
        scoreDisplay.textContent = "Game Over! Final score is " + result
    }
}

function startGame()
{    
    moleTimerId = setInterval(moveMole, 500)
    countDownTimerId = setInterval(countDown, 1000)
}

startGame()