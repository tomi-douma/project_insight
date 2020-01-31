const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../Models/userModel');


// Enregistre un nouvel utilisateur

exports.user_register = (req, res) => {
  let new_user = new User(req.body);

  try{
    new_user.save((error, user) => {
      if(error){
        res.status(400);
        res.json({message: "Il manque des infos"});
      }
      else{
        res.status(201);
        user = user.toObject();
        delete user.password
        
        res.json({message: "Utilisateur crée"})
      }
    })
  }
  catch(e){
    res.status(500);
    res.json({message: "Erreur serveur."});
  }
}


// Connexion de l'utilisateur 

exports.user_login = (req, res) => {
  let {body} = req;

  User.findOne(body, (mongooseError, user) => {
    jwt.sign({email: user.email}, process.env.JWT_KEY, {expiresIn: "10m"}, (jwtError, token) => {
      if(jwtError){
        console.log(jwtError);
        res.status(500);
        res.json({message: "Erreur serveur"});
      }
      else {
        res.status(200);
        res.json({token});
      }
    })
  })
}

exports.list_all_users = (req, res) => {
    User.find({}, (error, users) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."})
        } else {
            res.status(200);
            res.json(users);
        }
    })
}


exports.get_a_user = (req, res) => {

    try {

        User.findById(req.params.user_id, (error, user) => {

            if (error) {

                res.status(400);

                console.log(error);

                res.json({message: "Id introuvable"});

            } else {

                res.status(200);

                res.json(user)

            }

        })

    } catch (e) {

        res.status(500);

        console.log(e);

        res.json({message: "Erreur serveur"})

    }

}



exports.update_a_user = (req, res) => {

    try {

        User.findByIdAndUpdate(req.params.user_id, req.body, {new: true}, (error, user) => {

            if (error) {

                res.status(400);

                console.log(error);

                res.json({message: "Id introuvable"});

            } else {

                res.status(200);

                res.json(user)

            }

        })

    } catch (e) {

        res.status(500);

        console.log(e);

        res.json({message: "Erreur serveur"})

    }

}



exports.delete_a_user = (req, res) => {

    try {

        User.findByIdAndRemove(req.params.user_id, (error) => {

            if (error) {

                res.status(400);

                console.log(error);

                res.json({message: "Id introuvable"});

            } else {

                res.status(200);

                res.json({message: "Article supprimÃ©"})

            }

        })

    } catch (e) {

        res.status(500);

        console.log(e);

        res.json({message: "Erreur serveur"})

    }

}

