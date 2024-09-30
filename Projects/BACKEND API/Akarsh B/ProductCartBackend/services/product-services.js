
const { response } = require('express');
const ProductModel=require('../models/product.model.js');
const UsersModel = require('../models/users.model.js');

module.exports={
    insertProduct:(data)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const products=await ProductModel.create(data)
                resolve({
                    status: 200,
                    ok: true,
                    message: "Product added successfully",
                    data: user,
                });
            } catch (error) {
                reject({
                    status: 500,
                    ok: false,
                    message: "Product not added",
                    error: error.message,
                });
            }
        })
    },
    fetchProduct:async()=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const product=await ProductModel.find({})
                resolve({
                    status: 200,
                    ok: true,
                    message: "Product details fetched successfully",
                    data: product,
                });
            } catch (error) {
                reject({
                    status: 500,
                    ok: false,
                    message: "Products fetched succesfully",
                    error: error.message,
                });
            }
        })
        
    },
    insertToCart:(data)=>{
        return new Promise(async(resolve,reject)=>{
            const validUser=await UsersModel.findById({_id:data.userId});
            if(validUser){
                response.status=200;
                response.ok=true
                response.message='Product Added to Cart Successfully'
                response.data=await UsersModel.updateOne({_id:data.userId},{$push:{cart:data.productId}})
                resolve(response)
            }else{
                err.status=400
                err.ok=false
                err.message='User not found'
                reject(err)
            }
        })
    },
    fetchCart:(userId)=>{
        return new Promise(async(resolve,reject)=>{
            const user=await UsersModel.findOne({_id:userId})

            if(user){
                const userProducts=await UsersModel.aggregate([
                    {
                        $match:{_id:user._id}
                    },
                    {
                        $lookup:{
                            from:'productmodels',
                            let:{cart:user.cart},
                            pipeline:[
                                {
                                    $match:{
                                        $expr:{
                                            $in:['$_id',{   //itmatches the id of the product with cart id
                                                $map:{
                                                    input:'$$cart',
                                                    as:'cartId',
                                                    in:{$toObjectId:"$$cartId"}
                                                }
                                            }]
                                        }
                                    }
                                }
                            ],
                            as:'cartItems'
                        }
                    },
                ])
                resolve(userProducts[0].cartItems)
            }
        })
    }
};

    
