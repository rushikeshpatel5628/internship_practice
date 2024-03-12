const multer = require("multer");
const path = require("path");
const cloudinaryController = require("./CloudinaryController");
const ServiceSchema = require("../models/ServiceModel");

const getAllServices = async (req, res) => {
  const allServices = await ServiceSchema.find();
  res.status(200).json({
    message: "All services",
    data: allServices,
  });
};

const storage = multer.diskStorage({
  destination: "./upload",
  filename: function (req, file, cb) {
    // cb(null, Date.now() + "-" + file.originalname);
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: { fieldSize: 10000000 },
}).single("myImage");

const fileUpload = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(500).json({
        message: "Error in uploading file",
      });
    } else {
      if (req.file == undefined) {
        res.status(400).json({
          message: "No file selected",
        });
      } else {
        const result = await cloudinaryController.uploadImage(req.file.path);
        console.log(result);
        // console.log(req.body);
        const serviceObj = {
          name: req.body.name,
          description: req.body.description,
          imageUrl: result.secure_url,
        };

        const savedService = await ServiceSchema.create(serviceObj);

        res.status(200).json({
          message: "File uploaded",
          // file: `upload/${req.file.filename}`,
          data: savedService
        });
      }
    }
  });
};

module.exports = {
  fileUpload,
  getAllServices,
};
