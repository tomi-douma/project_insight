const mongoose = require('mongoose');
const Session = require('../Models/sessionModel');

// (POST) /sessions/:session_id/modules/:id
exports.verify_session = (req, res, next) => {
    let session_id = req.params.session_id;
    try {
        Session.findById(session_id, (error, session) => {
            if(error) {
                res.status(400);
                console.log(error);
                res.json({message: "La session est inexistante pour cet id"});
            }
            else if (!session) {
                res.status(400);
                console.log(error);
                res.json({message: "La session est inexistante pour cet id"});
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