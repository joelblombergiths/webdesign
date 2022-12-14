const grid = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeftDisplay = document.querySelector('#timeLeft')
const scoreDisplay = document.querySelector('#score')

let result = 0;
scoreDisplay.textContent = 'Score: ' + result

let currentTime = 5
timeLeftDisplay.textContent = currentTime

let moleSquare
let prevMoleSquare = -1

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
    
    moleSquare = Math.floor(Math.random() * grid.length)
    if(moleSquare == prevMoleSquare)
    {
        moleSquare = Math.floor(Math.random() * grid.length)
    }
    
    grid[moleSquare].classList.add('mole')
    prevMoleSquare = moleSquare
}

function countDown()
{
    currentTime--
    timeLeftDisplay.textContent = currentTime
    
    if(currentTime == -1)
    {
        clearInterval(countDownTimerId)        
        clearInterval(moleTimerId)
        moleSquare = null
        timeLeftDisplay.textContent = 'Time Out!'
        scoreDisplay.textContent = "Game Over! Final score is " + result
    }
}

function startGame()
{    
    moleTimerId = setInterval(moveMole, 500)
    countDownTimerId = setInterval(countDown, 1000)
}

startGame()