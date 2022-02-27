//import 3rd party libraries
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')

//import routes
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

dotenv.config()
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connection to MongoDB successful...')
  }
)

//middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)

//listen
app.listen(8800, () => {
  console.log('backend server is running...')
})
