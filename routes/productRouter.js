const{Router} = require('express');
const {addProduct, getProducts, getProductsById, getCategories, getProductsByCategoryName} = require('../controllers/productController');
const {checkAuth, checkAdmin} = require('../middlewares/middleware');
const productRouter = Router();

productRouter.post('/add', checkAuth, checkAdmin, addProduct);
productRouter.get('/getall', getProducts);
productRouter.get('/getproducts/:categoryName', getProductsByCategoryName);
productRouter.get('/getcategories', getCategories);
productRouter.get('/getbyid/:id', getProductsById);

module.exports = productRouter;