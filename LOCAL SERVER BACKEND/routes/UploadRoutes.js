const router = require('express').Router();
const uploadController = require('../controller/UploadController');
router.post("/upload", uploadController.fileUpload);
router.get("/allservices", uploadController.getAllServices);

module.exports = router;