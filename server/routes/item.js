const ItemController = require("../controllers/itemController");
const router = require("express").Router();

router.post("/", ItemController.addItem);
router.put("/:id", ItemController.updateItem);
router.delete("/:id", ItemController.deleteItem);

module.exports = router;
