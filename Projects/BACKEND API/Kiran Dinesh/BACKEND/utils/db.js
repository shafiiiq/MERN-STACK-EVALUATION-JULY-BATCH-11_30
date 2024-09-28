const mongoose = require('mongoose');
module.exports=mongoose.connect('mongodb://localhost:27017/ProductCartMangaement')
.then((result) => {
  console.log("mongoDB connected");
}).catch((err) => {
  console.log("DB connection failed");
});