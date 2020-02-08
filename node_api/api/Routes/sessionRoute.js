const sessionController = require('../Controllers/sessionController');
const jwtLiddleware = require('../middleware/jwtMiddleware');

module.exports = (app) => {
	app.route('/sessions')
		.all(jwtLiddleware.verify_token)
		.get(sessionController.list_all_sessions)
		.post(sessionController.create_a_session);

	app.route('/sessions/:session_id')
		.all(jwtLiddleware.verify_token)
  		.delete(sessionController.delete_a_session)
  		.get(sessionController.get_a_session)
		.put(sessionController.update_a_session)
}


