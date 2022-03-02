const ProductService = require('../services/productService');
let productService = new ProductService();
module.exports.addProduct = async(req, res) => {
    const {productId, productName, categoryName, description, unitPrice, unitsInStock} = req.body;
    try {
        const product = await productService.addProduct(productId, productName, categoryName, description, unitPrice, unitsInStock);
        res.status(201).json({message:'Product created successfully', product:product});
    } catch (error){
        console.error(error);
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