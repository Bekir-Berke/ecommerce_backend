const{Router} = require('express');
const multer = require('multer');
const {addProduct, getProducts, getProductsById, getCategories, getProductsByCategoryName, deleteProduct, addProductComment, updateProduct} = require('../controllers/productController');
const {checkAdmin, checkAuth} = require('../middlewares/middleware');
const productRouter = Router();
let storage = multer.memoryStorage();
let upload = multer({storage:storage});

productRouter.post('/add', checkAdmin, upload.single('product_image'), addProduct);
productRouter.get('/getall', getProducts);
productRouter.get('/:categoryName', getProductsByCategoryName);
productRouter.get('/categories', getCategories);
productRouter.get('/getbyid/:id', getProductsById);
productRouter.post('/getbyid/:id/review',checkAuth ,addProductComment);
productRouter.put('/update/:id', checkAdmin, updateProduct);
productRouter.delete('/delete/:id', checkAdmin, deleteProduct);

module.exports = productRouter;