'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addDesctiptionToCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  addDesctiptionToCategory.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'addDesctiptionToCategory',
  });
  return addDesctiptionToCategory;
};