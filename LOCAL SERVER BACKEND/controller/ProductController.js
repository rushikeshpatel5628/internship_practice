const ProductModel = require("../models/ProductModel");

const createProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json({
      message: "Product created",
      flag: 1,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find().populate("category");
    res.status(200).json({
      message: "Products Fetched",
      flag: 1,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getProductByStatus = async (req, res) => {
  try {
    const product = await ProductModel.find({
      status: req.params.status,
    }).populate("category");
    res.status(200).json({
      message: "Product fetched by status",
      flag: 1,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getProductByQtyFilter = async (req, res) => {
  try {
    const product = await ProductModel.find({
      qty: { $lte: req.params.qty },
    }).populate("category");
    res.status(200).json({
      message: "Product Fetched",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: 1,
      data: error,
    });
  }
};

const deleteProduct = async (req, res)=> {
    const id = req.params.id;
    try {
      const product = await ProductModel.findByIdAndDelete(id);
      if (!product) throw new Error("No product found with this ID.");
      res.status(200).json({
        message:"Deleted Successfully.",
        data:null
      })
    } catch (error) {
      console.log(error)
    }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductByStatus,
  getProductByQtyFilter,
  deleteProduct
};
