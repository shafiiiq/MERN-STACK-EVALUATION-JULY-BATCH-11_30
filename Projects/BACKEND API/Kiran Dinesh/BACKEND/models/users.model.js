const mongoose = require('mongoose');
module.exports = mongoose.model('UserModel', {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // passwordHash:{
  //   type:String,
  //   required:true
  // },
  cart: {
    type: Array,
    required: true
  }
})