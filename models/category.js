const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    categoryId:{
        type:Number,
        unique:[true, 'Category ID already exists'],
        required:[true, 'category id is required']
    },
    categoryName:{
        type:String,
        required:[true, 'category name is required']
    }
});
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;