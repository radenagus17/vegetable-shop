const CompanyController = require("../controllers/companyController");
const router = require("express").Router();

router.post("/", CompanyController.addCompany);
router.put("/:id", CompanyController.updateCompany);
router.delete("/:id", CompanyController.deleteCompany);

module.exports = router;
