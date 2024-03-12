const router = require('express').Router();
const categoryController = require('../controller/CategoryController');
router.post("/category", categoryController.createCategory);
router.get("/category", categoryController.getCategories);
module.exports = router;