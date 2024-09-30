
const ProductServices=require('../services/product-services.js')

const addProduct=async(req,res)=>{
    try {
        products=await ProductServices.insertProduct(req.body)
    } catch (error) {
        res.json({message:error.message})
    }
}

const getProduct=async(req,res)=>{
    try {
        const getproduct=await ProductServices.fetchProduct();
        res.status(getproduct.status).json(getproduct);
    } catch (err) {
        res.status(err.status || 500).json({
            ok: false,
            message: err.message,
        });
    }
}


const addToCart=async(req,res)=>{
    try {
        const usercart=await ProductServices.insertToCart(req.body)
        res.json(usercart)
    } catch (error) {
        res.status(err.status || 500).json({
        ok: false,
        message: err.message,
        });
    }
}
const getCart=async(req,res)=>{
    try {
        const usercart=await ProductServices.fetchCart(req.body.userId)
        res.json(usercart)
    } catch (error) {
        res.status(err.status).json({
        ok: false,
        });
    }
}

module.exports = {
    addProduct,
    getProduct,
    addToCart,
    getCart,
};




