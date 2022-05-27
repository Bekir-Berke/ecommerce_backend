const {Router} = require('express');
const categoryRouter = Router();
const {addCategory, getCategories, deleteCategory} = require('../controllers/categoryController');
const {checkAdmin} = require('../middlewares/middleware');
categoryRouter.post('/add', checkAdmin, addCategory);
categoryRouter.get('/getall', getCategories);
// categoryRouter.get('/getbyid/:id', getCategoryById);
// categoryRouter.get('/getbyname/:name', getCategoryByName);
categoryRouter.delete('/delete/:id', checkAdmin, deleteCategory);
module.exports = categoryRouter;