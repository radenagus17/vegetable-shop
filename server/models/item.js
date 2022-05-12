"use strict";
const { Model } = require("sequelize");
const generate = require("../helpers/generateKodeItem");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.User);
      Item.hasMany(models.Transaction, { foreignKey: "ItemId" });
      Item.hasMany(models.Report, { foreignKey: "ItemId" });
    }
  }
  Item.init(
    {
      name: DataTypes.STRING,
      kode: DataTypes.STRING,
      status: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      price: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Item",

      hooks: {
        beforeCreate: (Item) => {
          Item.status = "Ready";
          Item.kode = generate(Item.UserId, Item.name, Item.createdAt);
        },
      },
    }
  );
  return Item;
};
