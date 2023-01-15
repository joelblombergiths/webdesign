const singleInput = document.querySelector('.single')
const twoPartInputs = document.querySelectorAll('.twoPart')
const typeSwitcher = document.getElementById('type')
const statusText = document.getElementById('status')

typeSwitcher.addEventListener('change', () => {    
    if(typeSwitcher.value === 'Single')
    {
        singleInput.style.display = ''
        twoPartInputs.forEach(i => i.style.display = 'none')
    }
    else
    {
        singleInput.style.display = 'none'
        twoPartInputs.forEach(i => i.style.display = '')
    }
})

document.getElementById('jokeButton').addEventListener('click', async () => {
    
    const data = {
        category: document.getElementById('category').value,
        type: typeSwitcher.value                        
    }

    if(typeSwitcher.value === 'Single')
    {
        data.jokeText = document.getElementById('jokeText').value
    }
    else
    {
        data.setup = document.getElementById('setup').value,
        data.delivery = document.getElementById('delivery').value
    }
    console.log(data)

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    console.log(req)
    
    const res = await fetch('https://localhost:7025/joke', req)    
    console.log(res)
    
    if(res.status == 204)
    {
        statusText.innerText = 'Joke successfully uploaded'
        statusText.classList.add('success')
    }
    else
    {
        const json = await res.json()
        statusText.innerText = 'Something went wrong: ' + json
        statusText.classList.add('error')
    }    
})