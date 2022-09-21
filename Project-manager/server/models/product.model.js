const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minLength: [2, "title must be at leaest 2 characters"],
    },
    price:{
        type:Number,
        required: [true, "price is required"],
        min: [1, "price needs to be at least 1 dollar"]
    },
    description:{
        type: String,
        required : [true, "description is required"],
        minLength: [5, "description must be at leaest 2 characters"],
    }
});
//register new collection 
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;