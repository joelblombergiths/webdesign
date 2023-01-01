const boxes = Array.from(document.querySelectorAll('.box'));
const playText = document.getElementById('playText');
const restartButton = document.getElementById('restartButton');

const player1 = "X";
const player2 = "O";

var currentPlayer;
var board = [];

const drawBoard = () =>
{
    boxes.forEach((box, index) =>{
        let styleString = '';
        if(index < 3)
        {
            styleString += 'border-bottom: 3px solid var(--purple);';
        }

        if(index % 3 === 0)
        {
            styleString += 'border-right: 3px solid var(--purple);';
        }

        if(index % 3 === 2)
        {
            styleString += 'border-left: 3px solid var(--purple);';
        }

        if(index > 5)
        {
            styleString += 'border-top: 3px solid var(--purple);';
        }

        box.style = styleString;
        box.addEventListener('click', boxClicked);
    })
}

const boxClicked = (e) =>
{
    const id = e.target.id;
    
    if(!board[id])
    {
        board[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(gameIsWon())
        {
            playText.innerText = `${currentPlayer} has won!`
            boxes.forEach(box => box.removeEventListener('click', boxClicked));
            return;
        }

        if(board.every(box => box !== null))
        {
            playText.innerText = 'I\'s a Tie!';
            return;
        }

        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
}

const gameIsWon = () => 
{
    if(board[0] === currentPlayer &&
        board[1] === currentPlayer &&
        board[2] === currentPlayer)
    {
        return true;
    }

    if(board[0] === currentPlayer &&
        board[3] === currentPlayer &&
        board[6] === currentPlayer)
    {
        return true;
    }

    if(board[0] === currentPlayer &&
        board[4] === currentPlayer &&
        board[8] === currentPlayer)
    {
        return true;
    }

    if(board[8] === currentPlayer &&
        board[7] === currentPlayer &&
        board[6] === currentPlayer)
    {
        return true;
    }

    if(board[8] === currentPlayer &&
        board[5] === currentPlayer &&
        board[2] === currentPlayer)
    {
        return true;
    }

    if(board[3] === currentPlayer &&
        board[4] === currentPlayer &&
        board[5] === currentPlayer)
    {
        return true;
    }

    if(board[1] === currentPlayer &&
        board[4] === currentPlayer &&
        board[7] === currentPlayer)
    {
        return true;
    }

    if(board[2] === currentPlayer &&
        board[4] === currentPlayer &&
        board[6] === currentPlayer)
    {
        return true;
    }

    return false;
} 


const restartGame = () => {
    board = [];
    boxes.forEach((box) => 
    {
        box.innerText = '';        
        board.push(null);
    });
    
    playText.innerText = 'Let\'s Play!';
    currentPlayer = player1;
    drawBoard();
}

restartButton.addEventListener('click', restartGame);
restartGame();