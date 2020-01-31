// Imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Express setup
const app = express();

// hostname & port
const hostname = '0.0.0.0';
const port = 3000;

// Connexion à la bdd mongodb
mongoose.connect('mongodb://mongo/'+ process.env.DB_NAME);

// Body parser pour interpreter les objets json
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

// Routes call
// Sample: const postRoute = require('./api/routes/postRoute');
const moduleRoute = require('./api/Routes/moduleRoute');
const sessionRoute = require('./api/Routes/sessionRoute');
const userRoute = require('./api/Routes/userRoute');
const noteRoute = require('./api/Routes/noteRoute');

// on passe notre app a notre route
// Sample: postRoute(app); 
moduleRoute(app);
userRoute(app);
sessionRoute(app);
noteRoute(app);

// Listen sur le serveur (port, hostname)
app.listen(port, hostname);
