const Doctor = require('../models/doctor');         //imported dataschema from models
const Patient = require('../models/Patient');       
const jwt = require('jsonwebtoken');                //imported jwt

module.exports.registerDoctor = async(req,res,next)=>{
    try {
        const doctor = await Doctor.create(req.body);

        res.status(200).json({
            success: true,
            message: 'Doctor created successfully',
        });
        
    } catch (error) {
       res.status(500).json({
        success: false,
        message:"couldn't not createDoctor,internal error"
       })
    }
}

module.exports.login = async (req,res,next) => {
    try {
        const user = Doctor.find(req.body);
        if (user) {
            const token = jwt.sign(user.id,"secret");
            res.status(200).json({
                success: true,
                token,
            });
        }else{
            res.status(404).json({
                success: false,
                message: "name r password is invalid",
            });
        }        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
        });
        
    }
};

module.exports.registerPatient = async (req,res,next) => {
    try {
        req.body.doctor = "657cadb8dea75df0766316be";
        const patient = await Patient.create(req.body);

        res.status(200).json({
            success: true,
            message:"successfully created patient",
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't create patient,internal server error",
        });
    }
};

module.exports.createReport = async(req, res, next)=>{
    try {
        const patient = await Patient.findById(req.params.id);

        req.body.date = Date.now();

        patient.reports.push(req.body);

        patient.save();

        res.status(200).json({
            success: true,
            message:"reports submitted successfully",
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't create report,internal server error",
        }); 
    }
}


module.exports.all_reports = async(req, res, next)=>{
    try {
        const patient = await Patient.findById(req.params.id);

        res.status(200).json({
            success: true,
            reports:patient.reports,
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "couldn't able to fetch patient reports.",
        });
    }
};

module.exports.ALLReports =async (req, res,next) =>{
    try {
        const patient = await Patient.find({
            reports: {$elemMatch: {status:req.params.status }}, 
        });

        res.status(200).json({
            success: true,
            data: patient,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "couldn't able to fetch all reports.",
        });
    }
}