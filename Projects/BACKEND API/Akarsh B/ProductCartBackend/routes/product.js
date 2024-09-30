var express = require('express');
var router = express.Router();
const productController=require('../controllers/product.controller')


router.post('/addproduct',productController.addProduct)
router.get('/getproduct',productController.getProduct)
router.post('/addtocart',productController.addToCart)
router.get('/getcart',productController.getCart)


module.exports = router;
