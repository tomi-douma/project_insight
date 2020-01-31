const mongoose = require('mongoose');
const User = require('../Models/userModel');

// (POST) /sessions/:session_id/modules/:id
exports.verify_module = (req, res, next) => {
    let module_id = req.params.module_id;
    try {
        Module.findById(module_id, (error, module) => {
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
        res.json({message: "NO DATABASE ACCESS !!"});
    }
	
}

exports.verify_etudiant = (req, res, next) => {
    let etudiant_id = req.body.etudiant_id;
    try {
        User.findById(etudiant_id, (error, user) => {
            if(error) {
                res.status(400);
                console.log(error);
                res.json({message: "Le module est inexistant pour cet id"});
            }
            else if (!user) {
                res.status(400);
                console.log(error);
                res.json({message: "Le module est inexistant pour cet id"});
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
        res.json({message: "NO DATABASE ACCESS !!"});
    }
	
}