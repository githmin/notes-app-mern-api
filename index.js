require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require('mongoose')


mongoose.connect(process.env.mongodb).then(() => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log(err)
})




app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(process.env.PORT, () => {
    console.log(`Serving on port ${process.env.PORT}`)
})