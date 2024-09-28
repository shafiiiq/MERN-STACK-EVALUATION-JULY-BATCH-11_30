const mongoose=require('mongoose');
module.exports=mongoose.connect('mongodb://localhost:27017/TaskManagement')
.then((result)=>{
    console.log('Mongo db connected successfully');
    
})
.catch((err)=>{
    console.log('Mongo db not connected');
    
})