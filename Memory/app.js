const alreadyFound = function(list, obj)
{
    if(list.length > 0)
    {        
        for(let i = 0; i < list.length; i++)
        {
            var whiteCards = list[i]
            for (let j = 0; j < whiteCards.length; j++) 
            {
                if (parseInt(whiteCards[j]) == obj) {
                    console.log('contains:' + obj)
                    return true;
                }
            }
        }        
    }
    return false;
}

document.addEventListener('DOMContentLoaded', () =>
{
    const cardArray = [
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
    var cardsChosen = []
    var cardChosenId =[]
    var cardsWon = []
    var countTries = 0

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]
        if(cardsChosen[0] === cardsChosen[1])
        {
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardChosenId)
        }
        else 
        {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
        }

        cardChosenId = []
        cardsChosen = []

        countTries += 1
        resultDisplay.textContent = countTries

        if(cardsWon.length === cardArray.length/2)
        {
            resultDisplay.textContent = 'Yay, you found them all in ' + countTries + ' tries'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        console.log(cardsWon)
        console.log(cardId)
        if(alreadyFound(cardsWon, cardId))
        {
            alert('card already found')
        }
        else 
        {
            cardsChosen.push(cardArray[cardId].name)
            cardChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)
            if (cardChosenId.length === 2) {
                setTimeout(checkForMatch, 500)
            }
        }
    }

    createBoard()
})

