
const express = require('express')
const app = express()
app.listen(3000, () => console.log('Listening on port 3000'))
app.use(express.static('public'))
app.use(express.json())

app.post('/api', (request, response) => {
    console.log(request.body)
    response.json({"status": "recieved"})
    response.end()
})

app.get('/api', (request, response) =>
{
    const test1 = 'test1'
    const test2 = 'test2'
    const data = {test1, test2}
    response.json(data)
    response.end()
})