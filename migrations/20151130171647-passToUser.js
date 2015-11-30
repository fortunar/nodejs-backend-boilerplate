'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.addColumn(
      'users',
      'password',
      Sequelize.STRING(50)
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
    'users',
    'password'
  )
  }
};
