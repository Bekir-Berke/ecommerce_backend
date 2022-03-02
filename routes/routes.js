const{Router} = require('express');
const {addProduct, getProducts, getProductsById} = require('../controllers/productController');
const {signup, login} = require('../controllers/userController');
const {checkAuth} = require('../middlewares/middleware');
const router = Router();

router.post('/api/products/add', checkAuth,addProduct);
router.get('/api/products/getall', getProducts);
router.get('/api/products/getbyid/:id', getProductsById);
router.post('/api/auth/signup', signup);
router.post('/api/auth/login',login);
module.exports = router;