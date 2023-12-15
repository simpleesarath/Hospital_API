const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://chandu83319:HospitalAPI@cluster0.r0fwhie.mongodb.net/");

const db = mongoose.connection;

 db.error(
    'error',
    console.error.bind(console,"error in connecting with mongodb")
 );
 db.once('open',()=>{
    console.log('Successfully connected with mongodb');
 });

 module.exports = db;