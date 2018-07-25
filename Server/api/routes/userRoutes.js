'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // Users Routes
  app.route('/users')
    .post(user.create_a_user);

  app.route('/users/:username')
    .get(user.read_a_user)
    .put(user.update_a_user)
    .delete(user.delete_a_user);
};
