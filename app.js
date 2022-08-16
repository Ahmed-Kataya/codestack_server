const mongoose = require('mongoose')
const connectionString = require('./env/env')
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