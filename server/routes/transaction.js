const TransactionController = require("../controllers/transactionController");
const router = require("express").Router();

router.post("/", TransactionController.addTransaction);
// router.put("/:id", CompanyController.updateCompany);
// router.delete("/:id", CompanyController.deleteCompany);

module.exports = router;
