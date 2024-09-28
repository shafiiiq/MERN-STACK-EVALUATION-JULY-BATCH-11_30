var express = require('express');
const userController = require('../controllers/user.controllers');
var router = express.Router();




router.post('/addusers',userController.AddUsers)
router.get('/getusers',userController.getUser)
router.put('/updateuser/:id',userController.updateUser)
router.delete('/deleteuser/:id',userController.deletingUser)

module.exports = router;
