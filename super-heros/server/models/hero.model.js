//import mongoose

const mongoose = require("mongoose");

//creates a document in db
const HeroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: [2, "name must be at leaest 2 characters"],
    },
    rating:{
        type:Number,
        required: [true, "rating is required"],
        min: [1, "pick between 1 and 10"],
        max: [10, "pick between 1 and 10"]
    },
    img:{
        type: String,
        required : [true, "image is required"]
    }
});
//register new collection 
const Hero = mongoose.model("Hero", HeroSchema);

module.exports = Hero;