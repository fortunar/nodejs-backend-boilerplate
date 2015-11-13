/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transports', {
    id_transport: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id_user'
      }
    },
    id_departure_place: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'places',
        key: 'id_place'
      }
    },
    id_arrival_place: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'places',
        key: 'id_place'
      }
    },
    departure_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    price: {
      type: 'REAL',
      allowNull: false
    },
    id_currency: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'currencies',
        key: 'id_currency'
      }
    },
    passangers_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vehicle_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    insurence: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    additional_info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    highway: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
};
