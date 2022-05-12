const { Item, User, Company, Report, Transaction } = require("../models");

class customerController {
  static async getItems(req, res, next) {
    try {
      const items = await Item.findAll({
        where: {
          status: "Ready",
        },
        include: [
          {
            model: User,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        order: [["status"], ["id", "DESC"]],
      });
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }

  static async getOneItem(req, res, next) {
    try {
      const item = await Item.findByPk(req.params.id, {
        where: {
          status: "Ready",
        },
        include: [
          {
            model: Transaction,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: User,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }

  static async getCompanies(req, res, next) {
    try {
      const companies = await Company.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        order: [["id", "ASC"]],
      });
      res.status(200).json(companies);
    } catch (error) {
      next(error);
    }
  }

  static async getReports(req, res, next) {
    try {
      const report = await Report.findAll({
        include: [Item, Company, Transaction],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        order: [["id", "ASC"]],
      });
      res.status(200).json(report);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = customerController;
