'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Replies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Replies.belongsTo(models.Users, {foreignKey: 'UserId', as: 'repplyUser'})
      Replies.belongsTo(models.Posts, {foreignKey: 'PostId', as: 'repplyPost'})
    }
  };
  Replies.init({
    like: DataTypes.INTEGER,
    share: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    PostId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Replies',
    tableName: 'replies',
  });
  return Replies;
};