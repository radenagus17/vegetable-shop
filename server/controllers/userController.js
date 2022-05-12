const { User } = require("../models");
const { Op } = require("sequelize");
const { sign } = require("../helpers/jwt-helper");

class UserController {
  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      if (!email || !password) throw { name: "login_badRequest" };
      const user = await User.findOne({
        where: {
          [Op.and]: [{ email }, { password }],
        },
      });
      if (!user) throw { name: "unauthorized" };
      const access_token = sign({ id: user.id, email: user.email });
      res.status(200).json({ access_token, username: user.username, email: user.email, role: user.role });
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    const { username, email, password } = req.body;
    try {
      await User.create({
        username,
        email,
        password,
        role: "Pelayan",
      });
      res.status(201).json({
        success: true,
        email,
        messsage: "Register Success",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
