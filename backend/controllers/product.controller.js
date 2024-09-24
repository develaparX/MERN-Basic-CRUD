import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products})
    } catch (error) {
        console.log("error in fetching products:", error.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const createProducts = async (req,res)=>{
    const product = req.body; // user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product)

    try {
            await newProduct.save();
            res.status(201).json({success: true, data: newProduct})
    } catch (error) {
        console.error("Error in Create Product:", error.message);
        res.status(500).json({success:false, message: "Server Error"})
    }

}

export const updateProducts =async(req,res)=>{
    const {id} = req.params;
    const productUpdate = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({status: false, message: "Invalid Product Id"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, productUpdate,{new:true});
        res.status(200).json({status: true, message: updatedProduct});
    } catch (error) {
        console.error("Error in Update Product:", error.message)
        res.status(500).json({status: false, message: "Server Error"})
    }
}

export const deleteProducts = async(req,res)=>{
    const {id}=req.params;


    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({status: false, message: "Invalid Product Id"});
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message:"Product Deleted Successfully"})
    } catch (error) {
        console.error("Error in Deleting Product:", error.message);
        res.status(500).json({status:false, message:"Server Error"})
    }
}