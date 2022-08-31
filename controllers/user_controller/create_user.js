const User = require('../../models/user')

exports.create_user =  function(req,res) {
     
    const username = req.body["username"]
    const password = req.body["password"]
    const email = req.body['email']
    const first_name = req.body['first_name']
    const last_name = req.body['last_name']

    User.create({ 
        username: username,
        email : email,
        first_name : first_name,
        last_name : last_name,
        password : password
     });
    res.json(req.body)
}


/*
username: { type: String, required: true, maxLength: 100 },
    email: {
        type: String,
        unique: true // `email` must be unique
      },
    first_name : String,
    last_name : String,
    password : String,
    */