const Product = require("../models/product.model")

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then((newProduct) => {res.json({results: newProduct})})
    .catch(err => res.json({err:err}))
}

module.exports.findAllProducts = (req,res) => {
    Product.find()
    .then((allProducts)=>{res.json({results: allProducts})})
    .catch(err=>res.json({err:err}))
}

module.exports.displayProduct =(req,res) => {
    Product.findOne({_id: req.params.id})
    .then((product)=>{res.json({results: product})})
    .catch(err => res.json({err:err}))
}

module.exports.updateProduct =(req, res)=>{
    Product.findOneAndUpdate({_id: req.params.id}, 
        req.body,{new: true, runValidators: true})
    .then((updatedProduct) => {res.json({results: updatedProduct})})
    .catch(err=>{res.json({err:err})})
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id:req.params.id})
    .then((deletedProduct)=>{res.json({results: deletedProduct})})
    .catch((err)=>{res.json({err:err})})
}
