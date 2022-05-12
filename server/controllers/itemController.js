const { Item } = require("../models");

class ItemController {
  static async addItem(req, res, next) {
    const { name, imageUrl, price } = req.body;
    try {
      const item = await Item.create({
        name,
        imageUrl,
        price,
        UserId: req.user.id,
      });
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }

  static async updateItem(req, res, next) {
    const { name, imageUrl, price } = req.body;
    try {
      const itemId = await Item.findByPk(req.params.id);
      if (!itemId) throw { name: "notFound" };
      if (itemId.UserId !== req.user.id && req.user.role !== "Kasir") throw { name: "forbidden" };
      const item = await Item.update(
        {
          name,
          imageUrl,
          price,
        },
        {
          where: {
            id: req.params.id,
          },
          returning: true,
        }
      );
      res.status(200).json(item[1][0]);
    } catch (error) {
      next(error);
    }
  }

  static async deleteItem(req, res, next) {
    try {
      const dataItem = await Item.findByPk(req.params.id);
      if (!dataItem) throw { name: "notFound" };
      if (dataItem.UserId !== req.user.id && req.user.role !== "Kasir") throw { name: "forbidden" };
      await Item.destroy({ where: { id: req.params.id } });
      res.status(200).json({ status: "success", message: `data ${dataItem.name} has been delete` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ItemController;
