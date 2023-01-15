const sendButton = document.getElementById('send')
sendButton.addEventListener('click', sendData)
const test = document.getElementById('test')

const test1 = 'test1'
const test2 = 'test2'

const data = {test1, test2}

async function sendData()
{
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const response = await fetch('/api', request)
    const json = await response.json();
    console.log(json)
}

async function getData()
{
    const response = await fetch('/api')
    const json = await response.json();
    //console.log(json)
    test.innerText = json.test1
}

getData()