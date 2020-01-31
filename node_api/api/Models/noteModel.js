const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let noteSchema = new Schema({
	module_id:{
		type: String
	},
	etudiant_id:{
		type: String,
		required: true
	},
	note: {
		type: Number,
		required: true
	},
	message: {
		type: String,
		required: true
	}
});


module.exports = mongoose.model('Note', noteSchema);

