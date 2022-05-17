const jwt = require('jsonwebtoken');
const {createToken} = require('../middlewares/middleware');
const UserService = require('../services/userService');
let userService = new UserService();
module.exports.signup = async(req, res)=>{
    const {name, email, password, isAdmin} = req.body;
    try {
        const user = await userService.signup(name, email, password, isAdmin);
        res.status(201).json({message:'success', user:user._id, createdAt:user.createdAt});
    } catch (error){
        res.status(400).json({error:error.message});
    }
};
module.exports.login = async(req, res) => {
    const{email, password} = req.body;
    try {
        const user = await userService.login(email, password);
        const token = await createToken(user._id, user.name, user.isAdmin);
        res.status(200).json({message:'success', accessToken:token, id:user._id, isAdmin:user.isAdmin, username:user.name});
    } catch (error){
        console.log(error);
        res.status(400).json({error:error.message});
    }
};
module.exports.getUserData = async(req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const id = decodedToken.id;
    try {
        const user = await userService.getUserData(id);
        res.status(200).json({username:user.name, email:user.email, createdAt:user.createdAt});
    } catch (error){
        res.status(400).json({error:error});
    }
};
module.exports.deleteUser = async(req, res) => {
    const {id} = req.body;
    try {
        const user = await userService.deleteUser(id);
        res.status(200).json({message:'deleted'});
    } catch (error){
        res.status(400).json({error:error});
    }
};
module.exports.updateUser = async(req, res) => {
    const {id, name, email} = req.body;
    try {
        const user = await userService.updateUser(id, name, email);
        res.status(200).json({message:'updated'});
    } catch (error){
        res.status(400).json({error:error});
    }
};