import express from "express";
import { product } from "../controller/pharmaProductsController.js";

const router = express.Router();

router.post("/product/item", product);

export default router;