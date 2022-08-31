const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: { type: String, required: true, maxLength: 100 , unique: true},
    email: {
        type: String,
        unique: true // `email` must be unique
      },
    first_name : String,
    last_name : String,
    password : String,
  
})
module.exports = mongoose.model('User',userSchema)