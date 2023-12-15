const express = require('express');           //importing express;
const bodyParser = require('body-parser');    //importing body parser
const db = require('./config/database');      //importing db
const passport = require('passport');         //importing passport
const passportStrategy = require('./config/passport');   //importing passportStrategy
const router = require('./routes/router');

const app = express();            //creating a instance of expressapp
const PORT = 8000;                //setting port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);                 //creating a instance of router


app.listen(PORT,(err) => {
 if (err) {
    console.error(`server error: ${err}`);
 }
 else{
    console.log(`server is up and down on: ${PORT}`);
 }
});
