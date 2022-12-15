const grid = document.querySelector('.grid')
const boardWidth = 560
const boardHeight = 300

const blocks = []
const blockRows = 3
const blockCols = 5
const blockWidth = 100
const blockHeight = 20

const playerStart = [230, 10]
let playerPosition = playerStart
let player

const ballDiameter = 20
const ballStart = [270, 40]
let ballPosition = ballStart
let xDirection = 2
let yDirection = 2
let ballTimerId
let ball

const scoreDisplay = document.querySelector('#score')
let score = 0
scoreDisplay.textContent = 'Score: ' + score

class Block
{
    constructor(xAxis, yAxis)
    {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

function initBlocks()
{
    let left
    let bottom = boardHeight - (blockHeight + 10)

    for(let i = 0; i < blockRows; i++)
    {        
        for(let j = 0; j < blockCols; j++)
        {
            left = (j * (blockWidth + 10)) + 10

            const block = document.createElement('div')
            block.classList.add('block')
            block.style.left = left + 'px'
            block.style.bottom = bottom + 'px'    
            grid.appendChild(block)
            blocks.push(new Block(left, bottom))
        }
        bottom -= blockHeight + 10
    }
}

function initPlayer()
{
    player = document.createElement('div')
    player.classList.add('player')
    grid.appendChild(player)
    document.addEventListener('keydown', movePlayer)
    drawPlayer()
}

function initBall()
{
    ball = document.createElement('div')
    ball.classList.add('ball')
    grid.appendChild(ball)
    drawBall()
}

function drawPlayer()
{
    player.style.left = playerPosition[0] + 'px'
    player.style.bottom = playerPosition[1] + 'px'
}

function movePlayer(e)
{
    switch(e.key)
    {
        case 'ArrowLeft':
            if(playerPosition[0] > 0)
            {
                playerPosition[0] -= 10
                drawPlayer()
            }
            break;
        case 'ArrowRight':
            if(playerPosition[0] < boardWidth - blockWidth)
            {
                playerPosition[0] += 10
                drawPlayer()
            }
            break;
    }
}

function drawBall()
{
    ball.style.left = ballPosition[0] + 'px'
    ball.style.bottom = ballPosition[1] + 'px'
}

function moveBall()
{
    checkCollisions()

    ballPosition[0] += xDirection
    ballPosition[1] += yDirection
    drawBall()
}

function checkCollisions()
{
    //blocks
    for (let i = 0; i < blocks.length; i++) {
        if(
            (ballPosition[0] > blocks[i].bottomLeft[0] && ballPosition[0] < blocks[i].bottomRight[0]) &&
            (ballPosition[1] + ballDiameter > blocks[i].bottomLeft[1] && ballPosition[1] < blocks[i].topLeft[1])
        )
        {
            const allBLocks = Array.from(document.querySelectorAll('.block'))
            allBLocks[i].classList.remove('block')
            blocks.splice(i, 1)
            yDirection = -yDirection    

            score++
            scoreDisplay.textContent = 'Score: ' + score

            if(blocks.length == 0)
            {
                gameOver('You Won!')
            }
            return
        }
    }

    //player
    if(
        (ballPosition[0] > playerPosition[0] && ballPosition[0] < playerPosition[0] + blockWidth) && 
        (ballPosition[1] > playerPosition[1] && ballPosition[1] < playerPosition[1] + blockHeight )
    )
    {
        yDirection = Math.abs(yDirection)
        return
    }

    //top
    if(ballPosition[1] >= boardHeight - ballDiameter)
    {
        yDirection = -yDirection
    }

    //right
    if(ballPosition[0] >= boardWidth - ballDiameter)
    {
        xDirection = -xDirection        
    }

    //left
    if(ballPosition[0] <= 0)
    {
        xDirection = Math.abs(xDirection)
    }

    //bottom
    if(ballPosition[1] <= 0)
    {
        gameOver('You Lose!')        
    }
}

function gameOver(result)
{
    clearInterval(ballTimerId)
    grid.removeChild(ball)
    scoreDisplay.textContent = result
}

function newGame()
{
    initBlocks()
    initPlayer()
    initBall()
    ballTimerId = setInterval(moveBall, 30)
}

newGame()