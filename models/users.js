/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mobile_verified: {
      type: DataTypes.BOOLEAN
    },
    id_fb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_gmail: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
};
