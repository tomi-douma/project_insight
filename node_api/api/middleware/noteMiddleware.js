const mongoose = require('mongoose');
const User = require('../Models/userModel');
const Module = require('../Models/moduleModel');

// (GET-POST) /sessions/:session_id/modules/:module_id
exports.verify_module = (req, res, next) => {
    try {
        Module.findById(req.params.module_id, (error, module) => {
            if(error) {
                res.status(400);
                console.log(error);
                res.json({message: "Le module est inexistant pour cet id"});
            }
            else if (!module) {
                res.status(400);
                console.log(error);
                res.json({message: "Le module est inexistant pour cet id"});
            }
            else {
                next();
            }
        });
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({message: "NO DATABASE ACCESS!!"});
    }
	
}

exports.verify_etudiant = (req, res, next) => {
    let etudiant_id = req.body.etudiant_id;
    try {
        User.findById(etudiant_id, (error, user) => {
            if(error) {
                res.status(400);
                console.log(error);
                res.json({message: "Seuls les etudiants peuvent noter un module"});
            }
            else if (!user) {
                res.status(400);
                console.log(error);
                res.json({message: "Seuls les etudiants peuvent noter un module"});
            }
            else {
                if(user.role == "ETUDIANT"){
                    next();
                }
                else {
                    res.status(400);
                    console.log(error);
                    res.json({message: "Seul un etudiant peut accéder"});
                }
            }
        });
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({message: "NO DATABASE ACCESS etu!!"});
    }
	
}