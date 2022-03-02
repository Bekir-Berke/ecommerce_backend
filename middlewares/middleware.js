const jwt = require('jsonwebtoken');
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id, name, isAdmin) => {
    return jwt.sign({id, name, isAdmin}, `${process.env.TOKEN_SECRET}`,{expiresIn:maxAge});
};
const checkAuth = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        req.userData = decodedToken;
        if(req.userData.isAdmin == true){
            next();
        }else{
            return res.status(401).send({message:'You dont have perm to add product'});
        }
    }catch(error){
        return res.status(401).send({
            message: 'Auth failed'
        });
    }
};
module.exports = {createToken, checkAuth};