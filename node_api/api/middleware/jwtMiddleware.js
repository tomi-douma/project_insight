const jwt = require('jsonwebtoken');
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