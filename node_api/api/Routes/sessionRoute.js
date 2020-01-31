const sessionController = require('../Controllers/sessionController');

module.exports = (app) => {
	app.route('/sessions')
		.get(sessionController.list_all_sessions)
		.post(sessionController.create_a_session);

	app.route('/sessions/:session_id')
  		.delete(sessionController.delete_a_session)
  		.get(sessionController.get_a_session)
		.put(sessionController.update_a_session)
}


