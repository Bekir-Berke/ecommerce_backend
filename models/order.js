const mongoose = require('mongoose');

const shippingSchema = {
    address:{type:String, required:true},
    city:{type:String, required:true},
    postalCode:{type:String, required:true}
};

const orderItemSchema = mongoose.Schema({
    name:{type:String, required:true},
    qty:{type:Number, required:true},
    price:{type:String, required:true},
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    }
});

const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    orderItems:[orderItemSchema],
    shipping:shippingSchema,
    itemsPrice:{type:Number},
    taxPrice:{type:Number},
    shippingPrice:{type:Number},
    totalPrice:{type:Number},
    isPaid:{type:Boolean, default:false},
    isDelivered:{type:Boolean, default:false},
    deliveredAt:{type:Date}
}, {
    timestamps:true
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;