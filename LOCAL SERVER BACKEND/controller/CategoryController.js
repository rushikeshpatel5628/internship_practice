const CategorySchema = require("../models/CategoryModel");

const createCategory = async (req, res) => {
  try {
    const savedCat = await CategorySchema.create(req.body);
    res.status(201).json({
      message: "Category created",
      flag: 1,
      data: savedCat,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await CategorySchema.find();
    res.status(200).json({
      message: "Categories Fetched",
      flag: 1,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

module.exports = {
  createCategory,
  getCategories,
};
