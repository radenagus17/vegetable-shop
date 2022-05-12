const { Company } = require("../models");

class CompanyController {
  static async addCompany(req, res, next) {
    const { name, address, logo } = req.body;
    try {
      if (req.user.role !== "Kasir") throw { name: "forbidden" };
      const company = await Company.create({
        name,
        address,
        logo,
      });
      res.status(201).json(company);
    } catch (error) {
      next(error);
    }
  }

  static async updateCompany(req, res, next) {
    const { name, address, logo } = req.body;
    try {
      const compId = await Company.findByPk(req.params.id);
      if (!compId) throw { name: "notFound" };
      if (req.user.role !== "Kasir") throw { name: "forbidden" };
      const company = await Company.update(
        {
          name,
          address,
          logo,
        },
        {
          where: {
            id: req.params.id,
          },
          returning: true,
        }
      );
      res.status(200).json(company[1][0]);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCompany(req, res, next) {
    try {
      const dataComp = await Company.findByPk(req.params.id);
      if (!dataComp) throw { name: "notFound" };
      if (req.user.role !== "Kasir") throw { name: "forbidden" };
      await Company.destroy({ where: { id: req.params.id } });
      res.status(200).json({ status: "success", message: `data ${dataItem.name} has been delete` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CompanyController;
