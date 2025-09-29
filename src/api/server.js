const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // demande le  niveau des joueurs
  res.send('Salut Thomas!')
})

app.get('/game', (req, res) => {
  res.send('Salut Benjo!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports = app;


