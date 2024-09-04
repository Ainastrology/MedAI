import { catchAsyncError } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import Product from "../models/pharmaProductsSchema.js";

export const product = catchAsyncError(async (req, res, next) => {
    const {
        title, 
        indication, 
        dosage, 
        sideEffects, 
        price, 
        category, 
        countInStock
    } = req.body;
    if(
        !title ||
        !indication ||
        !dosage ||
        !sideEffects ||
        !price ||
        !category ||
        !countInStock
    ){
        return next(new ErrorHandler("Please Complete All The Details!", 400));
    }

    let product = await Product.findOne({title});
    if(product){
        return next(new ErrorHandler("Product Already Exist!", 400));
    }
    product = await Product.create({
        title, 
        indication, 
        dosage, 
        sideEffects, 
        price, 
        category, 
        countInStock
    });
    res.status(200).json({
        success: true,
        message: "Product Added Successfully!"
    });
});






















// const Product = require("../models/Product");

// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     res.json(product);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// module.exports = {
//   getProducts,
//   getProductById,
// };