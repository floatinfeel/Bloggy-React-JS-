'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Location.init({
    label: DataTypes.STRING,
    kota: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    lat: {
      type: DataTypes.DOUBLE,
      validate:{
        isNumeric: {
          args: true,
          msg: 'please insert with number only!'
        }
      }
    },
    lng: {
      type: DataTypes.DOUBLE,
      validate:{
        isNumeric: {
          args: true,
          msg: 'please insert with number only!'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};