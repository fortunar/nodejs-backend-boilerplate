'use strict';

const currencies = [{
  id_currency: 1,
  symbol: '$',
  createdAt: new Date(),
  updatedAt: new Date()
},
  {
    id_currency: 2,
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
