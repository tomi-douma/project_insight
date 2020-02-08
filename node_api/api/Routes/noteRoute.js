const noteController = require('../Controllers/noteController');
const noteMiddleware = require('../middleware/noteMiddleware');
const jwtLiddleware = require('../middleware/jwtMiddleware');

module.exports = (app) => {
	app.route('/sessions/:session_id/modules/:module_id/notes/')
		.all(jwtLiddleware.verify_token, noteMiddleware.verify_module, noteMiddleware.verify_etudiant)
		.get(noteController.list_all_notes)
		.post(noteController.create_a_note)

	app.route('/sessions/:session_id/modules/:module_id/notes/:note_id')
		.all(jwtLiddleware.verify_token, noteMiddleware.verify_module)
  		.delete(noteController.delete_a_note)
  		.get(noteController.get_a_note)
		.put(noteController.update_a_note)
}



