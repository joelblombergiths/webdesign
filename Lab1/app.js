document.addEventListener('DOMContentLoaded', () =>
{   
    async function loadBoardGames()
    {
        const response = await fetch('https://raw.githubusercontent.com/joelblombergiths/boardgames/main/README.md');
        const data = await response.text();                                
        
        var boardGames = data.split(/\n/)
        boardGames.splice(0, 2);
        boardGames.splice(boardGames.length -1, 1);

        const boardGamesList = document.querySelector('#boardGamesList');

        boardGames.forEach(game => {
            boardGamesList.innerHTML += `<li>${game.substring(2)}</li>`
        });
    }
    loadBoardGames();    
});

function toggleBoardGames(link)
{
    const boardGamesDiv = document.querySelector('#boardGamesToggle');
    if(boardGamesDiv.style.display == 'block')
    {
        boardGamesDiv.style.display = 'none';
        link.innerHTML = '(Show all games)'
    }
    else
    {
        boardGamesDiv.style.display = 'block';
        link.innerHTML = '(Hide all games)'
    }
}        