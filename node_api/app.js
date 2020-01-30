const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


// Connexion à la bdd mongodb
mongoose.connect('mongodb://mongo/'+ process.env.DB_NAME);


app.use(bodyParser.urlencoded( {extended: true} ))
app.use(bodyParser.json())


const sessionRoute = require('./api/Routes/sessionRoute');

sessionRoute(app);

app.listen(3000, '0.0.0.0');