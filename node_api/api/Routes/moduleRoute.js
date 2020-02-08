const moduleController = require('../Controllers/moduleController');
const moduleMiddleware = require('../middleware/moduleMiddleware');
const jwtLiddleware = require('../middleware/jwtMiddleware');

module.exports = (app) => {
    app.route('/sessions/:session_id/modules')
    .all(jwtLiddleware.verify_token ,moduleMiddleware.verify_session)
    .get(moduleController.list_all_modules)
    .post(moduleController.create_a_module);
 

    app.route('/sessions/:session_id/modules/:id')
    .all(jwtLiddleware.verify_token ,moduleMiddleware.verify_session)
    .get(moduleController.get_a_module)
    .delete(moduleController.delete_a_module)
    .put(moduleController.update_a_module);
}