const User = require('../models/User')
const jwt = require('jsonwebtoken');

exports.register = async (userData) => {
    // if(userData.password !== userData.rePass) {
    //     throw new Error('Password missmatch!');
    // }

    const user = await User.create(userData);

    const token = jwt.sign({
        _id: user._id,
        email: user.email
    }, '4X5TY98KX45Y89UMC45YT8UK90');


    return{ _id: user._id, email: user.email, token: token }
}