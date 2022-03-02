const Product = require('../models/product');
class ProductService{
    async addProduct(productId, productName, categoryName, description, unitPrice, unitsInStock){
        return await Product.create({productId, productName, categoryName, description, unitPrice, unitsInStock});
    }
    async getProducts(){
        return await Product.find({});
    }
    async getProductById(id){
        return await Product.find({_id:id});
    }
}
module.exports = ProductService;