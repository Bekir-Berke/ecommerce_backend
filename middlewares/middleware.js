const jwt = require('jsonwebtoken');
const createToken = (id, name, isAdmin) => {
    return jwt.sign({id, name, isAdmin}, `${process.env.TOKEN_SECRET}`);
};
const checkAuth = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userData = decodedToken;
    if(req.userData){
        next();
    }else{
        res.status(401).json({message:'Auth failed'});
    }
};
const checkAdmin = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userData = decodedToken;
    if(req.userData.isAdmin){
        next();
    }else{
        res.status(401).json({message:'You dont have permission'});
    }
};
module.exports = {createToken, checkAuth, checkAdmin};