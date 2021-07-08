require('dotenv')
const express = require('express')
const server = express()
const PORT = process.env.PORT || 5000
server.get('/api', (req, res) => {
    res.status(200).json({
        message: "What are we doing?"
    })
})

server.listen(PORT, () => {
    console.log(`I am listening at ${PORT}`)
})