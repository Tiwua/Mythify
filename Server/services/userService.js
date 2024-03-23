const User = require('../models/User')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 

exports.register = async (userData) => {
    // if(userData.password !== userData.rePass) {
    //     throw new Error('Password missmatch!');
    // }

    const user = await User.create(userData);

    return generateAccessToken(user);
}

exports.login = async (userData) => {
    const user = await User.findOne({ email: userData.email});
    if(!user){
        throw new Error("Invalid login!");
    }

    const isValid = await bcrypt.compare(userData.password, user.password);

    if(!isValid){
        throw new Error('Invalid login');
    }

    return generateAccessToken(user);
}

exports.getAll = async ()  => {
    const users = await User.find();

    return users;
};

exports.getUserId = async (userEmail) => {
    const user = await User.findOne({email: userEmail});

    return user._id;
}

function generateAccessToken(user) {
    
    const accessToken = jwt.sign({
        _id: user._id,
        email: user.email,
    }, '4X5TY98KX45Y89UMC45YT8UK90');


    return accessToken;
}