var express = require('express');
var router = express.Router();
const userController = require('../controllers/users.controllers')

/* GET users listing. */
router.post('/addusers', userController.addUsers)
router.get('/allusers', userController.getUsers)
router.put('/updateuser/:id',userController.updateUser)
router.delete('/deleteuser/:id',userController.deleteUser)
module.exports = router;
