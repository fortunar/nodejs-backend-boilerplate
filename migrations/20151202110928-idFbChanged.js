'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'users',
      'id_fb',
      {
        type: Sequelize.BIGINT
      }
    );
    queryInterface.changeColumn(
      'users',
      'id_gmail',
      {
        type: Sequelize.STRING
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'users',
      'id_fb',
      {
        type: Sequelize.INTEGER
      }
    );
    queryInterface.changeColumn(
      'users',
      'id_gmail',
      {
        type: Sequelize.INTEGER
      }
    );
  }
};
