const User = require('../models/user');
class UserService{
    async signup(name, email, password, isAdmin){
        return await User.create({name, email, password, isAdmin});
    }
    async login(email, password){
        return await User.login(email, password);
    }
}
module.exports = UserService;