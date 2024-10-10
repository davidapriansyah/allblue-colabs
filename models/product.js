'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        foreignKey: 'CategoryId'
      })

      //cara 1: double one to many
      Product.hasMany(models.Order, {
        foreignKey: 'ProductId'
      })

      //cara 2: Many to Many
      // Product.belongsToMany(models.User, {
      //   through: 'Order'
      // })
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: `Product name can't be null`
        },
        notEmpty:{
          msg: `Product name is required`
        }
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg: `Category Id can't be null`
        },
        notEmpty:{
          msg: `Category Id is required`
        }
      }          
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg: `Price can't be null`
        },
        notEmpty:{
          msg: `Price is required`
        },
        min:{args: 10_000, msg: "Please input price between 10.000-1.000.000"},
        max:{args: 1_000_000, msg: "Please input price between 10.000-1.000.000"}, 
      }          
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg: `stock can't be null`
        },
        notEmpty:{
          msg: `stock is required`
        },
        min:{args: 1, msg: "Please input stock between 1-1000"},
        max:{args: 1000, msg: "Please input stock between 1-1000"}, 
      }          
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: `image url can't be null`
        },
        notEmpty:{
          msg: `image url is required`
        }
      }     
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};