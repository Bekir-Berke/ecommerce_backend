const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {isEmail} = require('validator');
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            validate:[isEmail,'Invalid email'],
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true
    }
);
userSchema.post('save', async function(doc, next){
    next();
});
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect username');
};
const User = mongoose.model('User', userSchema);
module.exports = User;