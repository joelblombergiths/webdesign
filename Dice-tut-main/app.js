const player1 = document.querySelector('.img1')
const player2 = document.querySelector('.img2')
const result = document.querySelector('h1')
const newGameButton = document.querySelector('#newGame')

newGameButton.addEventListener('click', () => {
    let p1Result = throwDice(player1)
    let p2Result = throwDice(player2)

    if(p1Result == p2Result)
    {
        result.innerText = 'It\'s a Tie!'
    }
    else if(p1Result > p2Result)
    {
        result.innerText = 'Player 1 wins!'
    }
    else
    {
        result.innerText = 'Player 2 wins!'
    }
})

function throwDice(player)
{
    const r = Math.ceil(Math.random() * 6)
    player.src = `images/dice${r}.png`

    return r
}