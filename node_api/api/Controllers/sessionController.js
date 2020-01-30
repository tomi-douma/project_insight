const mongoose = require('mongoose');
const Session = require('../Models/sessionModel');


//Création d'une session
exports.create_a_session = (req, res) => {

  let new_session = new Session(req.body);

  	try {
	    new_session.save((error, session) => {
	      if(error){
	        res.status(400);
	        console.log(error);
	        res.json({message: "Il manque des infos"});
	      }
	      else{
	        res.status(201);
	        res.json(session)
	      }
	    })
	  } catch (e) {
	    res.status(500);
	    console.log(e);
	    res.json({message: "Erreur serveur"})
	  }
}


// Lister toutes les sessions 
exports.list_all_sessions = (req, res) => {
  Session.find({}, (error, sessions) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(sessions);
    }
  })
}

exports.update_a_session = (req, res) => {
  try {
    Session.findByIdAndUpdate(req.params.session_id, req.body, {new:true}, (error, session) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "L'Id " + req.params.session_id + " session introuvable"});
      }
      else if(req.params.session_nomPromo == undefined){
        res.status(200);
        res.json({message: "La session est undefined, impossible à update"})
      }
      else{
        res.status(200);
        res.json(session)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}


// //Suppression d'une session à partir de l'id
exports.delete_a_session = (req, res) => {
  try {
    Session.findByIdAndRemove(req.params.session_id, (error) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "L'Id " + req.params.session_id + " session introuvable"});
      }
      else if(req.params.session_nomPromo == undefined){
        res.status(200);
        res.json({message: "La session est undefined, impossible à supprimer"})
      }
      else{
        res.status(200);
        res.json({message: "Session " + req.params.session_nomPromo + " supprimée"})
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }

}


// Recupère une session
exports.get_a_session = (req, res) => {
  try {
    Session.findById(req.params.session_id, (error, session) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "L'Id " + req.params.session_id + " session introuvable"});
      }
      else if(req.params.session_nomPromo == undefined){
        res.status(200);
        res.json({message: "La session est undefined, impossible à récupérer"})
      }
      else{
        res.status(200);
        res.json(session)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.update_a_session = (req, res) => {
  try {
    Session.findByIdAndUpdate(req.params.session_id, req.body, {new:true}, (error, session) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "L'Id" + req.params.session_id + "session introuvable"});
      }
      else{
        res.status(200);
        res.json(session)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}