const{Router} = require('express');
const {addProduct, getProducts, getProductsById, getCategories, getProductsByCategoryName} = require('../controllers/productController');
const {signup, login, getUserData} = require('../controllers/userController');
const {checkAuth, checkAdmin} = require('../middlewares/middleware');
const router = Router();

router.post('/api/products/add', checkAuth, checkAdmin, addProduct);
router.get('/api/products/getall', getProducts);
router.get('/api/products/getproductsbycategoryname', getProductsByCategoryName);
router.get('/api/products/getallcategories', getCategories);
router.get('/api/products/getbyid/:id', getProductsById);
router.post('/api/auth/signup', signup);
router.post('/api/auth/login',login);
router.get('/api/auth/user/', checkAuth, getUserData);
module.exports = router;