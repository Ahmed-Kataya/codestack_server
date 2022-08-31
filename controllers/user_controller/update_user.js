const { model } = require("mongoose")
const User = require("../../models/user")
var async = require('async')

exports.update_user =async function(req,res){
    const username = req.body['username'];
    const password = req.body["password"];
    const email = req.body['email'];
    const first_name = req.body['first_name'];
    const last_name = req.body['last_name'];
    console.log(username)
    User.findOneAndUpdate({username:username},{
        
        email : email,
        first_name : first_name,
        last_name : last_name,
        password : password

    }, {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
}})

   let a = await User.findOne({username:username}) 
   console.log(a.last_name)
    res.json(req.body)
}