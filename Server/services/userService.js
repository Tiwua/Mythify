const User = require('../models/User')
const jwt = require('jsonwebtoken');

exports.register = async (userData) => {
    // if(userData.password !== userData.rePass) {
    //     throw new Error('Password missmatch!');
    // }

    const user = await User.create(userData);
    console.log('User from service:')
    console.log(user);

    const accessToken = jwt.sign({
        _id: user._id,
        email: user.email,
    }, '4X5TY98KX45Y89UMC45YT8UK90');


    return{ _id: user._id, email: user.email, accessToken: accessToken }
}

exports.login = async (userData) => {
    const user = await User.find({ email: userData.email});
}

exports.getAll = async ()  => {
    const users = await User.find();
    console.log(users);

    return users;
}