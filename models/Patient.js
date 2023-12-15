const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide patient name"],
        unique:true,
    },
    reports:[{
        status:{
            type:String,
            required:true,
            enum:["Negative", "Travelled-Quarintine", "Symptoms-Quarintine", "Postive-admin"],
        },
        date:{
            type:Date,
            required:true,
        },
    },
   ],
   doctor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Doctor",
    required:true,
   },
});

const Patient = new mongoose.model('Patient',patientSchema);

module.exports = Patient;