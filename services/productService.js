const Product = require('../models/product');
class ProductService{
    async addProduct(productId, productName, categoryName, brandName, description, unitPrice, unitsInStock,seller){
        return await Product.create({productId, productName, brandName, categoryName, description, unitPrice, unitsInStock,seller});
    }
    async getProducts(){
        return await Product.find({});
    }
    async getProductById(id){
        return await Product.find({_id:id});
    }
}
module.exports = ProductService;