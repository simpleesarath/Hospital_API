const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter your name"],
    },
    password:{
        type:String,
        required:[true, "Please Enter your password"],
        minLenght:[6,"Password should be at least 6 characters"],
    },
});

const Doctor = new mongoose.model("Doctor",doctorSchema);

module.exports = Doctor;