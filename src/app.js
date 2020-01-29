const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const hostname = '0.0.0.0';
const port = 3000;

// Connexion BDD
// protocole://service/nom_bdd
mongoose.connect('mongodb://mongo/apinodeipssi');

app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

// Importe la fonction anonyme dans la constante
const postRoute = require('./api/routes/postRoute');
const commentRoute = require('./api/routes/commentRoute');
// Utilise la fonction anonyme contenu dans la constante
postRoute(app);
commentRoute(app);


app.listen(port, hostname);
