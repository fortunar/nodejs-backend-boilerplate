/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('votes', {
    id_user_driver: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id_user'
      }
    },
    id_user_liker: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id_user'
      }
    },
    val: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
