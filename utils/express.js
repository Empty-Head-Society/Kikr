const express = require('express')
const app = express()
const port = 6969

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html')
})

app.listen(port, () => {
  console.log(`Kikr now listening at http://localhost:${port}`)
})
