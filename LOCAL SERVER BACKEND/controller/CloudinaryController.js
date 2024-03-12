const cloudinary = require("cloudinary").v2;

const uploadImage = async (file) => {
  cloudinary.config({
    cloud_name: "dpksc7fxl",
    api_key: "226178971563946",
    api_secret: "e8VFved_dXs41qtBIhID74n9Oz8",
  });

  const result = await cloudinary.uploader.upload(file);
  return result;
};

module.exports = {
    uploadImage
};