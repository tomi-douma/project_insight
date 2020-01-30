const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://mongo/apinodeippsi');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const userRoute = require('./api/Routes/userRoute');

userRoute(app);

app.listen(3000, '0.0.0.0');
