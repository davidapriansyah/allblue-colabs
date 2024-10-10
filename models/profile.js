'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User, {
        foreignKey: 'UserId'
      })
    }

    get formatPhoneNumber() {
      const str = this.phoneNumber
      const part1 = str.slice(0, 4);  // First 4 digits
      const part2 = str.slice(4, 8);  // Next 4 digits
      const part3 = str.slice(8);     // Last 3 digits

      return `${part1}-${part2}-${part3}`;
    }
  
}
Profile.init({
  phoneNumber: DataTypes.STRING,
  shippingAddress: DataTypes.STRING,
  UserId: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Profile',
});
return Profile;
};