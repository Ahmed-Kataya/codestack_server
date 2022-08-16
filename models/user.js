const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username : String,
    password : String,
    first_name : String,
    last_name : String,
    
  
})
module.exports = mongoose.model('user',userSchema)