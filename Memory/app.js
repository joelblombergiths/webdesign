document.addEventListener('DOMContentLoaded', () =>
{
    const cardArray = 
    [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var chosenCards = []
    var cardsFound = []
    var countTries = 0

    function initBoard() 
    {
        for (var i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() 
    {
        var cards = document.querySelectorAll('img')
        var firstCard = chosenCards[0]
        var secondCard = chosenCards[1]

        if(cardArray[firstCard].name === cardArray[secondCard].name)
        {
            cards[firstCard].setAttribute('src', 'images/empty.png')
            cards[secondCard].setAttribute('src', 'images/empty.png')
            cardsFound.push(firstCard)
            cardsFound.push(secondCard)
        }
        else 
        {
            cards[firstCard].setAttribute('src', 'images/back.png')
            cards[secondCard].setAttribute('src', 'images/back.png')
        }       

        countTries += 1       

        if(cardsFound.length === cardArray.length)
        {
            resultDisplay.textContent = 'Yay, you found them all in ' + countTries + ' tries'
        }
        else
        {
            resultDisplay.textContent = 'Tries: ' + countTries
        }

        chosenCards = []
    }

    function flipCard()
    {
        var cardId = parseInt(this.getAttribute('data-id'))

        if(!cardsFound.includes(cardId) && !chosenCards.includes(cardId))
        {
            chosenCards.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)

            if (chosenCards.length === 2) {
                setTimeout(checkForMatch, 500)
            }
        }
    }

    initBoard()
})