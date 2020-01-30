const mongoose = require('mongoose');
const Module = require('../Models/moduleModel');

// (GET) /sessions/:session_id//modules
exports.list_all_modules = (req, res) => {
    try {
        Module.find({session_id: req.params.session_id}, (error, modules) => {
            if(error) {
                res.status(400);
                console.log(error);
                res.json({message: "L'api ne trouve pas de modules"});
            }
            else {
                res.status(200);
                res.json(modules);
            }
        }); 
    } catch (error) {
        res.status(500); 
        console.log(error);
        res.json({message: "Erreur serveur"});
    }
    
};

// (POST) /sessions/:session_id/modules
exports.create_a_module = (req, res) => {

    let new_module = new Module(req.body);
    new_module.session_id = req.params.session_id;
        try {
            new_module.save((error, module) => {
                if(error) {
                    res.status(400);
                    console.log(error);
                    res.json({message: "creation de module failed!!"});
                }
                else {
                    res.status(201);
                    res.json(module);
                }
            });
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: "No database ACCESS !!!"});
        }
    
    

    
    
};
// (GET) /sessions/modules/:id
exports.get_a_module = (req, res) => {
    try {
        Module.findById(req.params.id, (error, module) => {
            if(error) {
                res.status(400);
                console.log(error);
                res.json({message: "pas de module pour cet id"});
            }
            else if (!module) {
                res.status(400);
                console.log(error);
                res.json({message: "pas de module pour cet id"});
            }
            else {
                res.status(201);
                res.json(module);
            }    
        });
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "erreur serveur"});
    }
};

// (POST) /sessions/modules/:id
exports.update_a_module = (req, res) => {

    try {
        Module.findByIdAndUpdate(req.body._id, req.body, {new: true} ,(error, module) => {
            if(error) {
                res.status(401);
                console.log(error);
                res.json({message: "update failed"});
            }
            else {
                res.status(201);
                res.json(module);
            }
        });

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "erreur serveur"});
    }
};

// (DELETE) /sessions/modules/:id
exports.delete_a_module = (req, res) => {
    try {
        Module.findByIdAndRemove(req.params.id, (error, module) => {
            if(error) {
                res.status(400);
                console.log(error);
                res.json({message: "not deleted error"})
            }
            else {
                res.status(200);
                res.json({message: "delete successful"});
            }
        });
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "erreur serveur"});
    }
    
};