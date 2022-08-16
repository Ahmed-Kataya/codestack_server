const express = require('express');
const router = express.Router();
const create_user = require('../controllers/user_controller/create_user'); 

router.get('/create_user', create_user.create_user);
  
router.get('/',(req,res)=>{
    res.send('hello')
})
module.exports = router;