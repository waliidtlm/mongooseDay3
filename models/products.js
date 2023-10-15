const mongoose = require('mongoose');


//products schema
const productsSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: number, required: true,  },
});



//products model 
 const product = mongoose.model('product', productsSchema);
 module.exports = product ;