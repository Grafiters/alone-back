'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Posts.belongsTo(models.Users, {foreignKey: 'UserId'})
      Posts.hasMany(models.Threads, {as: 'threadsPosts'})
      Posts.hasMany(models.Replies, {as: 'repplyPosts'})
    }
  };
  Posts.init({
    title: DataTypes.STRING,
    descrip: DataTypes.STRING,
    url: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Posts',
    tableName: 'posts',
  });
  return Posts;
};