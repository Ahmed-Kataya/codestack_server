const express = require('express');
const router = express.Router();
const create_user = require('../controllers/user_controller/create_user');
const delete_user = require('../controllers/user_controller/delete_user');
const update_user = require('../controllers/user_controller/update_user')
router.post('/create_user', create_user.create_user);
router.post('/delete_user',delete_user.delete_user);
router.put('/update_user',update_user.update_user);
router.get('/',(req,res)=>{
    res.send('hello')
})
module.exports = router;