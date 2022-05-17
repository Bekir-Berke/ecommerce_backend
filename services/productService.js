const Product = require('../models/product');
class ProductService{
    async addProduct(productName, brandName, categoryName, description, unitPrice, unitsInStock){
        return await Product.create({
            productName:productName,
            brandName:brandName,
            categoryName:categoryName,
            description:description,
            unitPrice:unitPrice,
            unitsInStock:unitsInStock
        });
    }
    async getProducts(){
        return await Product.find({});
    }
    async getProductById(id){
        return await Product.findById({_id:id});
    }
    async getCategories(){
        return await Product.distinct('categoryName');
    }
    async getProductsByCategoryName(categoryName){
        return await Product.find({categoryName:categoryName});
    }
    async addProductComment(id, name, text){
        const product = await Product.findById(id);
        if(product){
            const review = {
                postedBy:name,
                comment:text
            };
            product.reviews.push(review);
            const updatedProduct = await product.save();
            return updatedProduct;
        }else{
            return 'Product not found';
        }
    }
    async updatedProduct(id, unitPrice, unitsInStock){
        return await Product.findByIdAndUpdate(id, {unitPrice:unitPrice, unitsInStock:unitsInStock});
    }
    async deleteProduct(id){
        return await Product.findByIdAndDelete(id);
    }
}
module.exports = ProductService;