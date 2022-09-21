const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: [3, "name must be at least 3 characters"],
    },
    type:{
        type:String,
        required: [true, "type is required"],
        min: [3, "must be at least 3 character"]
    },
    description:{
        type: String,
        required : [true, "description is required"],
        minLength: [3, "description must be at leaest 3 characters"],
    },
    skills1:{
        type: String,
        required : [false]
    },
    skills2:{
        type: String,
        required : [false]
    },
    skills3:{
        type: String,
        required : [false]
    }

});
//register new collection 
const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;