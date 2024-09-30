const mongoose=require('mongoose')
module.exports=mongoose.model('ProductModel',
    {
        title:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }

    }
)