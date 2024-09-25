import express from "express";
import { createProducts, deleteProducts, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/",getProducts);
router.post("/", createProducts);
router.put("/:id", updateProduct)
router.delete("/:id", deleteProducts)

export default router