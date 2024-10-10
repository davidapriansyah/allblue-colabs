'use strict'; 
const {
  Model
} = require('sequelize');

const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile,{
        foreignKey: 'UserId'
      })

      //cara 1: double one to many
      User.hasMany(models.Order, {
        foreignKey: 'UserId'
      })

      // //cara 2: Many to Many
      // User.belongsToMany(models.Product,{
      //   through: 'Order'
      // })

    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(instance, options) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(instance.password, salt);
        
        instance.password = hash
      }
    },
    sequelize,
    modelName: 'User',
  });
  //hooks
  User.beforeCreate(function(instance,option){
    instance.role = 'Customer'
  })
  return User;
};