const noteController = require('../Controllers/noteController');
const noteMiddleware = require('../middleware/noteMiddleware');

module.exports = (app) => {
	app.route('/sessions/:session_id/modules/:module_id/notes/')
		.all(noteMiddleware.verify_module)
		.get(noteController.list_all_notes)
		.post(noteController.create_a_note)

	app.route('/sessions/:session_id/modules/:module_id/notes/:note_id')
		.all(noteMiddleware.verify_module)
  		.delete(noteController.delete_a_note)
  		.get(noteController.get_a_note)
		.put(noteController.update_a_note)
}


