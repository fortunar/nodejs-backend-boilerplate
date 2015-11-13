/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('places', {
    id_place: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
