'use strict';

const transports = [{
    id_user: 1,
    id_departure_place: 1,
    id_arrival_place: 2,
    departure_time: new Date(),
    price: 4.5,
    id_currency: 1,
    passangers_number: 4,
    vehicle_desc: 'Polo GTR',
    insurence: false,
    additional_info: 'Be punctual.',
    highway: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id_user: 1,
    id_departure_place: 2,
    id_arrival_place: 3,
    departure_time: new Date(),
    price: 10,
    id_currency: 2,
    passangers_number: 4,
    vehicle_desc: 'GOLF GTR',
    insurence: false,
    additional_info: 'Be fair and punctual.',
    highway: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('transports', transports , {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('transports',
      {id_user : {
        $in: [1,2]
      }
      });
  }
};
