const {Router} = require('express');
const {signup, login, getUserData, deleteUser, updateUser} = require('../controllers/userController');
const {checkAuth} = require('../middlewares/middleware');
const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/user/', checkAuth, getUserData);
userRouter.delete('/user/', deleteUser);
userRouter.put('/user/', checkAuth, updateUser);

module.exports = userRouter;
