// Imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Express setup
const app = express();

// hostname & port
const hostname = '0.0.0.0';
const port = 3000;

// realise une connextion à la base mongo sous le container mongo (.yml)
mongoose.connect('mongodb://mongo/apinodeipssi');

// Body parser pour interpreter les objets json
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

// Routes call
// Sample: const postRoute = require('./api/routes/postRoute');
const moduleRoute = require('./api/Routes/moduleRoute');

// on passe notre app a notre route
// Sample: postRoute(app); 
moduleRoute(app);

// Listen sur le serveur (port, hostname)
app.listen(port, hostname);