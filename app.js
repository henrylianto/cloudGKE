'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Hello world!\nNama    : Henry Lianto\nNim     : 51018012\nJurusan : Sistem Informasi\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
