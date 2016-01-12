'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'places',
      'location',
      Sequelize.GEOMETRY('POINT')
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'places',
      'location'
    )
  }
};
