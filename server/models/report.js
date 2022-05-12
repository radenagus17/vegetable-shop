"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Report.belongsTo(models.Item);
      Report.belongsTo(models.Company);
      Report.belongsTo(models.Transaction);
    }
  }
  Report.init(
    {
      ItemId: DataTypes.INTEGER,
      CompanyId: DataTypes.INTEGER,
      TransactionId: DataTypes.INTEGER,
      grandTotal: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Report",
    }
  );
  return Report;
};
