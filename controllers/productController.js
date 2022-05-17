const {decodeToken} = require('../middlewares/middleware');
const ProductService = require('../services/productService');
let productService = new ProductService();
module.exports.addProduct = async(req, res) => {
    const {productName, brandName, categoryName, description, unitPrice, unitsInStock} = req.body;
    try {
        const product = await productService.addProduct(productName, brandName, categoryName, description, unitPrice, unitsInStock);
        res.status(201).json({message:'Product created successfully', product:product});
    } catch (error){
        res.status(400).json({error:error.message});
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

module.exports.addProductComment = async(req, res) => {
    try {
        const token = decodeToken(req.headers.authorization.split(' ')[1]);
        const id = req.params.id;
        const{comment} = req.body;
        const data = productService.addProductComment(id, token.name, comment);
        data.then(product => res.status(201).json({message:'Comment added successfully', product: product}));
    } catch (error){
        res.status(400).json({error});
    }
};

module.exports.updateProduct = async(req, res) => {
    const id = req.params.id;
    const {unitPrice, unitsInStock} = req.body;
    try {
        const product = await productService.updatedProduct(id, unitPrice, unitsInStock);
        res.status(200).json({message:'Product updated successfully', product:product});
    } catch (error){
        res.status(400).json({error:error});
    }
};

module.exports.deleteProduct = async(req, res) => {
    const id = req.params.id;
    try {
        const product = await productService.deleteProduct(id);
        res.status(200).json({product:product});
    } catch (error){
        res.status(400).json({error:error});
    }
};