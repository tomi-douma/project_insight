const mongoose = require('mongoose');
const Module = require('../Models/moduleModel');

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