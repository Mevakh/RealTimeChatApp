const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{type:String,required:true, minlenght: 3, maxlength:30},
    email:{type:String, require: true, minlenght: 3, maxlength:200, unique:true},
    password:{type: String, require: true, minlenght: 3, maxlength:200},
},
{
    timestamps: true,
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel