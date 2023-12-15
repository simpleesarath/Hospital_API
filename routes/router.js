const express = require('express');         //importing express
const passport = require('passport');       //importing passport
const { registerDoctor, registerPatient, createReport, all_reports, ALLReports, login } = require('../controllers/userControllers');



const router = express.Router();

router.post('/doctors/register',registerDoctor);

router.post('/login', login);

router.post('/patients/register', registerPatient);

router.post('/patients/:id/create_report', createReport);

router.get('/patients/:id/all_report',all_reports);

router.get('/reports/:status', ALLReports);



module.exports = router;       //exporting the router