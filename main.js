const express = require('express');
const app = express();
const mongoose = require('mongoose');
const product = require('../products');



mongoose.connect('mongodb://127.0.0.1:27017/mydb')

//insert new product
create()
async function create(){
  const newProduct = await product.create(
    {name: "samsung A21s",
     price: 300})
  console.log(newProduct)
}

//update product
const productIdToUpdate = '65250f72bc6826c9ecd3014f'; // Replace with the actual _id of the product
const updateProduct = { price: 250 };

Products.updateOne({ _id: productIdToUpdate }, updateProduct)
  .then(result => {
    if (result.nModified === 1) {
      console.log('Product updated successfully.');
    } else {
      console.log('Product not found');
    }
  })
  .catch(err => {
    console.error('Error:', err);
  });


  //delete product
  const productIdToDelete = '65250f72bc6826c9ecd3014f'; // Replace with the actual _id of the product

Products.deleteOne({ _id: productIdToDelete })
  .then(result => {
    if (result.deletedCount === 1) {
      console.log('Product deleted successfully.');
    } else {
      console.log('Product not found or no deletion performed.');
    }
  })
  .catch(err => {
    console.error('Error:', err);
  });



app.listen(3000, 
  console.log(`server is listening on 3000`));