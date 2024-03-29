'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Posts, {as: 'postsUser'})
      Users.hasMany(models.Replies, {as: 'repliesUser'})
    }
  };
  Users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
  });
  // const User = sequelize.define('User', {
  //   id: {
  //         allowNull: false,
  //         autoIncrement: true,
  //         primaryKey: true,
  //         type: DataTypes.UUID,
  //         defaultValue: DataTypes.UUIDV4,
  //       },
  //       name: DataTypes.STRING,
  //       phone: DataTypes.STRING,
  //       email: DataTypes.STRING,
  //       password: DataTypes.STRING,
  // });
  return Users;
};