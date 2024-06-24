require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        Name : "Niraj",
        age : 21,
    })
})

app.get('/Home', (req, res) => {
    res.send(`Listening on port ${process.env.PORT}`)
    res.send("<h1>HI</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Listeingin on port ${process.env.PORT}`);
})