const moduleController = require('../Controllers/moduleController');
const moduleMiddleware = require('../middleware/moduleMiddleware');

module.exports = (app) => {
    app.route('/sessions/:session_id/modules')
    .get(moduleMiddleware.verify_session ,moduleController.list_all_modules)
    .post(moduleMiddleware.verify_session ,moduleController.create_a_module);
 

    app.route('/sessions/:session_id/modules/:id')
    .get(moduleMiddleware.verify_session ,moduleController.get_a_module)
    .delete(moduleMiddleware.verify_session ,moduleController.delete_a_module)
    .put(moduleMiddleware.verify_session ,moduleController.update_a_module);
}