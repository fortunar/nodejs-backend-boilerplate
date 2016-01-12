'use strict';

module.exports = {

  up: function (queryInterface, Sequelize) {

    const places = [{
        id_place: 1,
        country: 'Slovenija',
        city: 'Kranj',
        createdAt: new Date(),
        updatedAt: new Date(),
        location: Sequelize.literal('ST_MakePoint(46.2411111,14.3616667)::geometry')
      },
      {
        id_place: 2,
        country: 'Slovenija',
        city: 'Ljubljana',
        createdAt: new Date(),
        updatedAt: new Date(),
        location: Sequelize.literal('ST_MakePoint(46.0552778, 14.5144444)::geometry')
      },
      {
        id_place: 3,
        country: 'Slovenija',
        city: 'Celje',
        createdAt: new Date(),
        updatedAt: new Date(),
        location: Sequelize.literal('ST_MakePoint(46.2361111,15.2675)::geometry')
      },
      {
        id_place: 4,
        country: 'Slovenija',
        city: 'Maribor',
        createdAt: new Date(),
        updatedAt: new Date(),
        location: Sequelize.literal('ST_MakePoint(46.5547222,15.6466667)::geometry')
      }
    ];

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
