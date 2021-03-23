'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Threads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Threads.init({
    like: DataTypes.INTEGER,
    share: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Threads',
    tableName: 'threads',
  });
  return Threads;
};