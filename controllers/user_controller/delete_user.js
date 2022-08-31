const User = require('../../models/user')

exports.delete_user = function(req,res){
    const username = req.body['username']
    User.findOneAndDelete({username : username},function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
      });
    res.json(req.body)
}