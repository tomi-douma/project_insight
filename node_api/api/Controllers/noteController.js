const mongoose = require('mongoose');
const Note = require('../Models/noteModel');

// (GET) /sessions/:session_id/modules/:module_id/notes
exports.list_all_notes = (req, res) => {
    try {
        Note.find({module_id: req.params.module_id}, (error, notes) => {
            if(error) {
                res.status(400);
                console.log(error);
                res.json({message: "L'api ne trouve pas de note"});
            }
            else {
                res.status(200);
                res.json(notes);
            }
        }); 
    } catch (error) {
        res.status(500); 
        console.log(error);
        res.json({message: "Erreur serveur"});
    }
    
};

// (POST) /sessions/:session_id/modules/:module_id/notes
exports.create_a_note = (req, res) => {

    let new_note = new Note(req.body);
    new_note.module_id = req.params.module_id;
        try {
            new_note.save((error, note) => {
                if(error) {
                    res.status(400);
                    console.log(error);
                    res.json({message: "creation de module failed!!"});
                }
                else {
                    res.status(201);
                    res.json(note);
                }
            });
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: "No database ACCESS !!!"});
        }
    
    

    
    
};
// (GET) sessions/:session_id/modules/:module_id/notes/:note_id
exports.get_a_note = (req, res) => {
    try {
        Note.findOne({_id:req.params.note_id, module_id: req.params.module_id}, (error, note) => {
            if(error) {
                res.status(400);
                console.log(error);
                res.json({message: "pas de note pour cet id dans cette module"});
            }
            else if (!note) {
                res.status(400);
                console.log(error);
                res.json({message: "pas de note pour cet id dans cette module"});
            }
            else {
                res.status(201);
                res.json(note);
            }    
        });
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "erreur serveur"});
    }
};

// (PUT) /sessions/:session_id/modules/:module_id/notes/:note_id
exports.update_a_note = (req, res) => {

    try {
        Note.findOneAndUpdate({_id: req.params.id, module_id: req.params.module_id}, req.body, {new: true} ,(error, note) => {
            if(error) {
                res.status(401);
                console.log(error);
                res.json({message: "update failed"});
            }
            else {
                res.status(201);
                res.json(note);
            }
        });

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "erreur serveur"});
    }
};

// (DELETE) /sessions/:session_id/modules/:module_id/notes/:note_id
exports.delete_a_note = (req, res) => {
    try {
        Note.findOneAndRemove({_id: req.params.id, module_id: req.params.module_id}, (error, note) => {
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