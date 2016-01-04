'use strict';


//id_transport serial NOT NULL,
//  id_user integer NOT NULL,
//  id_departure_place integer NOT NULL,
//  id_arrival_place integer NOT NULL,
//  departure_time timestamp with time zone NOT NULL,
//  price real NOT NULL,
//  id_currency integer NOT NULL,
//  passangers_number integer NOT NULL,
//  vehicle_desc character varying(255),
//  insurence boolean NOT NULL,
//  additional_info text,
//  highway boolean NOT NULL,
//  "createdAt" timestamp with time zone NOT NULL,
//  "updatedAt" timestamp with time zone NOT NULL,

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
  additional_info: 'bodi tocen',
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
    vehicle_desc: 'GOLFIC GTR',
    insurence: false,
    additional_info: 'bodi tocen in cist',
    highway: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('transports', transports , {});
  },

//  down: function (queryInterface, Sequelize) {
//    return queryInterface.bulkDelete('transports',
//      {city : {
//        $in: ['Kranj', 'Ljubljana', 'Celje', 'Maribor' ]
//      }
//      }
//      , {});
//  }
};
