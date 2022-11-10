const express = require('express')

const app = express()

app.get('/Hi', (req, res) => {
  res.send('task manager running')
})

const port = 3000

app.listen(port, console.log(`Server is listening on ${port}`))
