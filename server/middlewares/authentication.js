const { User } = require("../models");
const { decode } = require("../helpers/jwt-helper");

async function authenticationMiddlewares(req, res, next) {
  try {
    if (!req.headers.access_token) throw { name: "missingAccessToken" };
    const { email } = decode(req.headers.access_token);
    const user = await User.findOne({ where: { email } });
    if (!user) throw { name: "unauthorized" };

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authenticationMiddlewares;
