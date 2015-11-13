/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('currencies', {
    id_currency: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
