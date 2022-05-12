const customerController = require("../controllers/customerController");
const router = require("express").Router();

router.get("/items", customerController.getItems);
router.get("/companies", customerController.getCompanies);
router.get("/reports", customerController.getReports);
router.get("/items/:id", customerController.getOneItem);

module.exports = router;
