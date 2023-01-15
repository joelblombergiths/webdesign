// const fs = require("fs")

// fs.copyFileSync('file1.txt', 'file2.txt')


// const sh = require('superheroes')
// const sv = require('supervillains')

// console.log(sv.random())

// const { response } = require('express')
// const express = require('express')
// const { request } = require('http')
// const app = express()
// app.use(express.static('public'))


// app.listen(3000, () => {
//     console.log('Listening on 3000')
// })

// app.get('/', (request, response) => {
//     response.send('Hello')
//     console.log('hello')
// })

// app.get('/contact', (request, response) => {

// })

// app.get('/about', (request, response) => {

// })

const express = require('express')
const app = express()
app.use(express.json())

app.listen(3000, () => {
    console.log('Listening on 3000')
})

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", async (req, res) =>  {
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let sum = num1 + num2
    res.send(""+sum)
})


app.get('/bmi', (req, res) => {
    res.sendFile(__dirname + "/bmi.html")
})

app.post("/bmi", (req, res) => {
    console.log(req.body)
    let height = parseFloat(req.body.Height)
    let weight = parseFloat(req.body.Weight)
    let bmi = round(weight / Math.pow(height, 2) * 10000, 1)
    res.json({bmi})
    res.end();
})

const round = (number, precision) => {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(number * multiplier) / multiplier;
}