"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association
      Company.hasMany(models.Transaction, { foreignKey: "CompanyId" });
      Company.hasMany(models.Report, { foreignKey: "CompanyId" });
    }
  }
  Company.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      logo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
