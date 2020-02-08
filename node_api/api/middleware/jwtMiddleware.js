const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');

exports.verify_token = (req, res, next) => {
	let token = req.headers['authorization'];

	if(token){
		jwt.verify(token, process.env.JWT_KEY, (error, result) => {
			if(error){
				res.status(403);
				res.json({message: "accès refusé"})
			}
			else{
				next();
			}
		})

	}
	else{
		res.status(403);
		res.json({message: "accès refusé"})
	}
}

exports.verify_admin = (req, res, next) => {
	let token = req.headers['authorization'];

	if(token){
		jwt.verify(token, process.env.JWT_KEY, (error, result) => {
			if(error){
				res.status(403);
				res.json({message: "accès refusé"})
			}
			else{
				let email = result.email;
				try {
					User.findOne({email}, (errorr, user) => {
						if(errorr) {
							console.log(errorr);
							res.status(400);
							res.json({message: "erreur user not found"});
						}
						else {
							if(user.role == "ADMIN"){
								next();
							}
							else {
								res.status(403);
								res.json({message: "seuls les admins peuvent acceder"});
							}
						}
					});
				} catch (e) {
					console.log(e);
					res.status(500);
					res.json({message: "erreur serveur"});
				}
			}
		})

	}
	else{
		res.status(403);
		res.json({message: "accès refusé"})
	}
}
