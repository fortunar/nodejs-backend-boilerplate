'use strict';

const currencies = [{
  symbol: '$',
  createdAt: new Date(),
  updatedAt: new Date()
},
  {
    symbol: '€',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {

  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('currencies', currencies , {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('currencies',
      {symbol : {
        $in: ['$', '€' ]
      }
      }
      , {});
  }
};
