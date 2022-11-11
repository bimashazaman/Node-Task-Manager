const connectDB = require('./db/connect')
const express = require('express')

require('dotenv').config()

const app = express()

const tasks = require('./routes/tasks')

//middleware
app.use(express.json())

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on ${port}`))
  } catch (error) {
    console.log(err)
  }
}

start()
