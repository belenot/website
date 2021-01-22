const express = require('express')
const path = require('path')

const staticContentPath = path.join(__dirname, 'public')
const port = 8080

const app = express()

app.use(express.static(staticContentPath))

app.get("/health", (req, res) => {
    res.status(200).end()
})

app.listen(port, () => {
    console.log(`Started server on port ${port}`)
})