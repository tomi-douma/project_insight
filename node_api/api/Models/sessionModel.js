const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sessionSchema = new Schema({
	nomPromo: {
		type: String,
		required: true
	},
	annee: {
		type: Date,
		required: true
	}
});


module.exports = mongoose.model('Session', sessionSchema);

