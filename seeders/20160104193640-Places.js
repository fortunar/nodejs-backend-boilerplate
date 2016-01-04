'use strict';

const places = [{
  country: 'Slovenija',
  city: 'Kranj',
  createdAt: new Date(),
  updatedAt: new Date()
},
  {
    country: 'Slovenija',
    city: 'Ljubljana',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    country: 'Slovenija',
    city: 'Celje',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    country: 'Slovenija',
    city: 'Maribor',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {

  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('places', places , {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('places',
      {city : {
        $in: ['Kranj', 'Ljubljana', 'Celje', 'Maribor' ]
      }
      }
      , {});
  }
};
