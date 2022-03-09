const Product = require('../models/product');
class ProductService{
    async addProduct(productId, productName, categoryName, brandName, description, unitPrice, unitsInStock,seller){
        return await Product.create({productId, productName, brandName, categoryName, description, unitPrice, unitsInStock,seller});
    }
    async getProducts(){
        return await Product.find({});
    }
    async getProductById(id){
        return await Product.findById({_id:id});
    }
    async getCategories(){
        return await Product.find({}).distinct('categoryName');
    }
    async getProductsByCategoryName(categoryName){
        return await Product.find({categoryName:categoryName});
    }
}
module.exports = ProductService;