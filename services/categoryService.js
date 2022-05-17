const Category = require('../models/category');
class CategoryService{
    async addCategory(categoryId, categoryName){
        return await Category.create({categoryId, categoryName});
    }
    async getCategories(){
        return await Category.find({});
    }
    // async getCategoryById(id){
    //     return await Category.find({categoryId:id});
    // }
    // async getCategoryByName(name){
    //     return await Category.findOne({categoryName:name});
    // }
    // async deleteCategory(id){
    //     return await Category.findByIdAndDelete(id);
    // }
}
module.exports = CategoryService;