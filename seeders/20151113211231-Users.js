'use strict';

const users = [{
  id_user: 1,
  name: 'Joze',
  surname: 'Potrebujes',
  email: 'joze.potrebuje@gmail.com',
  mobile_verified: false,
  password: 'joze',
  mobile: '041370705',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id_user: 2,
  name: 'Igor',
  surname: 'Kristofic',
  email: 'igor.kristofic@gmail.com',
  password: 'igor',
  mobile_verified: false,
  mobile: '040404878',
  createdAt: new Date(),
  updatedAt: new Date()
}
];
module.exports = {

  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('users', users , {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('users',
        {email : {
            $in: ['joze.potrebuje@gmail.com', 'igor.kristofic@gmail.com' ]
          }
        }
      , {});
  }
};
