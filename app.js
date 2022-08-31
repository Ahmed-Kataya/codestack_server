const mongoose = require('mongoose')
const connectionString = require('./env/env')
const usersRouter = require('./routes/users');
const bodyParser = require('body-parser')
mongoose.connect(connectionString, { useNewUrlParser: true })
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:')
})

db.on('error', err => {
  console.error('connection error:', err)
})

const express = require('express');

const app = express();
//use json
app.use(bodyParser.json())

app.use('/users',usersRouter)

app.listen(3000, function() {
    console.log('listening on 3000')
  })