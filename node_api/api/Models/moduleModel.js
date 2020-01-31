const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Le schema : entity
let moduleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    intervenant_id: {
        type: String,
        required: true
    },
    session_id: {
        type: String
    },
    date_debut: {
        type: Date,
        required: true
    },
    date_fin: {
        type: Date,
        required: true
    }
});

// Define the model with name Module and exports
mongoose.model('Module', moduleSchema);
module.exports = mongoose.model('Module');