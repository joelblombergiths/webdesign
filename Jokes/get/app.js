const categories = document.getElementById('category')
const type = document.getElementById('type')
const jokeContainer = document.getElementById('jokeContainer')

const getCategories = async () => {
    const res = await fetch('https://localhost:7025/categories')
    const data = await res.json();
    data.forEach(category => {
        const option = document.createElement("option")
        option.text = category
        categories.add(option)
    });
}

getCategories()

document.getElementById('jokeButton').addEventListener('click', async () => {
    jokeContainer.innerHTML = ''

    const uri = `https://localhost:7025/joke/${categories.value}?type=${type.value}`
    const res = await fetch(uri)
    const data = await res.json()
    
    if(res.status >= 400)
    {
        jokeContainer.innerHTML = `<h1 class="error">${data}</h1>`
    }
    else
    {
        if(data[0].type.toLowerCase() === 'single')
        {
            jokeContainer.innerHTML = `<h1 class="jokeText">${data[0].jokeText}</h1>`
        }
        else if(data[0].type.toLowerCase() === 'twopart')
        {
            jokeContainer.innerHTML = `<h1 class="setup">${data[0].setup}</h1>`
            
            const loader = document.createElement('h1');
            loader.classList.add('loader')
            jokeContainer.appendChild(loader)
            for (let i = 1; i < 4; i++) {
                setTimeout(() => {
                    loader.innerText += ' . '
                }, i * 1000)
            }
            
            setTimeout(() => {
                jokeContainer.removeChild(loader)
                jokeContainer.innerHTML += `<h1 class="delivery">${data[0].delivery}</h1>`
            }, 4000);
        }
        else
        {
            jokeContainer.innerHTML = `<h1 class="error">Something went wrong...</h1>`
            console.log(res)
        }
    }
})