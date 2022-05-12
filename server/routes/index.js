const authenticationMiddlewares = require("../middlewares/authentication");
const customerRoutes = require("./customer");
const userRoutes = require("./user");
const itemsRoutes = require("./item");
const companyRoutes = require("./company");
const transRoutes = require("./transaction");
const routes = require("express").Router();

// *Available API*
routes.use("/pub", customerRoutes);
routes.use("/users", userRoutes);

routes.use(authenticationMiddlewares);
routes.use("/items", itemsRoutes);
routes.use("/companies", companyRoutes);
routes.use("/transaction", transRoutes);

module.exports = routes;
