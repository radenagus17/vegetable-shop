const { Transaction, Item, sequelize, Report } = require("../models");

class TransactionController {
  static async addTransaction(req, res, next) {
    const { ItemId, CompanyId } = req.body;
    const trans = await sequelize.transaction();

    try {
      const dataTransaction = await Transaction.create(
        {
          ItemId,
          CompanyId,
          UserId: req.user.id,
        },
        {
          transaction: trans,
        }
      );
      const dataItem = await Item.findByPk(dataTransaction.ItemId);
      const data = await Transaction.findAll({
        where: {
          ItemId,
        },
      });

      const countData = data.length;
      const report = await Report.create(
        {
          ItemId,
          CompanyId,
          TransactionId: dataTransaction.id,
          grandTotal: dataItem.price * countData,
        },
        {
          transaction: trans,
        }
      );

      await trans.commit();
      res.status(201).json({ transaction: dataTransaction, report: report });
    } catch (error) {
      console.log(error);
      await trans.rollback();
      next(error);
    }
  }
}

module.exports = TransactionController;
