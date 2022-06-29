const express = require('express')
const app = express()
const record = require('./data')
const port = process.env.PORT || 3000;



app.listen(port, () => console.log(`Starting on http://localhost:${port}`))
