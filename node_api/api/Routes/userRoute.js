// src/api/routes/postRoute.js
const userController = require('../Controllers/userController');
const jwtLiddleware = require('../middleware/jwtMiddleware');
// Exporte la fonction anonyme
module.exports = (app) => {
	app.route('/users')
	.get(userController.list_all_users)

  app.post('/users/register', userController.user_register)
  app.post('/users/login', userController.user_login)
  // .get(postController.list_all_posts)


  app.route('/users/:user_id')
  .get(userController.get_a_user)
  .put(userController.update_a_user)
  .delete(userController.delete_a_user);
}