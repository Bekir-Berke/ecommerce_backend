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
        res.status(400).json({error:error});
    }
};
module.exports.login = async(req, res) => {
    const{email, password} = req.body;
    try {
        const user = await userService.login(email, password);
        const token = await createToken(user._id, user.name, user.isAdmin);
        res.status(200).json({message:'success', accessToken:token, id:user._id});
    } catch (error){
        console.log(error);
        res.status(400).json({error:error});
    }
};
module.exports.getUserData = async(req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const id = decodedToken.id;
    try {
        const user = await userService.getUserData(id);
        res.status(200).json({user:user});
    } catch (error){
        res.status(400).json({error:error});
    }
}; 