const User = require('../models/user');
class UserService{
    async signup(name, email, password, isAdmin){
        return await User.create({name, email, password, isAdmin});
    }
    async login(email, password){
        return await User.login(email, password);
    }
    async getUserData(id){
        return await User.findById({_id:id});
    }
    async deleteUser(id){
        return await User.findOneAndDelete({_id:id});
    }
}
module.exports = UserService;