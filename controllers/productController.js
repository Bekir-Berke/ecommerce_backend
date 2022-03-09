const ProductService = require('../services/productService');
let productService = new ProductService();
module.exports.addProduct = async(req, res) => {
    const {productId, productName, brandName, categoryName, description, unitPrice, unitsInStock,seller} = req.body;
    try {
        const product = await productService.addProduct(productId, productName, brandName, categoryName, description, unitPrice, unitsInStock, seller);
        res.status(201).json({message:'Product created successfully', product:product});
    } catch (error){
        res.status(400).json({error:error});
    }
};
module.exports.getProducts = async(req, res) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json({products:products});
    } catch (error){
        res.status(400).json({error:error});        
    }
};
module.exports.getProductsById = async(req, res) => {
    const id = req.params.id;
    try {
        const product = await productService.getProductById(id);
        res.status(200).json({product:product});
    } catch (error){
        res.status(400).json({error:error});
    }
};

module.exports.getCategories = async(req, res) => {
    try {
        const categories = await productService.getCategories();
        res.status(200).json({categories:categories});
    } catch (error){
        res.status(400).json({error:error});
    }
};

module.exports.getProductsByCategoryName = async(req, res) => {
    const categoryName = req.params.categoryName;
    try {
        const products = await productService.getProductsByCategoryName(categoryName);
        res.status(200).json({products:products});
    } catch (error){
        res.status(400).json({error:error});
    }
};