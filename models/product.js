const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({
    postedBy:{
        type:String
    },
    comment:{
        type:String
    }
},{
    timestamps:true
});
const productSchema = mongoose.Schema(
    {
        productName:{
            type:String,
            required:[true, 'product name is required']
        },
        brandName:{
            type:String,
            required:[true, 'brand name is required']
        },
        categoryName:{
            type:String,
            required:[true, 'category name is required']
        },
        description:{
            type:String,
            required:[true, 'description is required']
        },
        unitPrice:{
            type:Number,
            required:[true, 'unit price is required'],
            default:0
        },
        unitsInStock:{
            type:Number,
            required:[true, 'units in stock is required'],
            default:0
        },
        reviews:[reviewSchema]
    },
    {
        timestamps:true
    }
);
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
