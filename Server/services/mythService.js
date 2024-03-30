const Myth = require('../models/Myth');
const User = require('../models/User');

exports.getAll = async (limit) => {

    if(limit > 0) {

        return await Myth.find().limit(limit);
    }

    return await Myth.find();
}

exports.getMostPopular = async (limit) => {

    if (limit > 0) {
        return await Myth.find().sort({ likes: -1 }).limit(limit);
    }

    return await Myth.find().sort({ likes: -1 });
}

exports.getOneById = async (mythId) => await Myth.findById(mythId);

exports.create = async (userId, mythData) => {
    const createdMyth = await Myth.create({ ownerId: userId, ...mythData});
    await User.findByIdAndUpdate(userId, { $push: { createdMyths: createdMyth._id }});
    
}

exports.getLatest = () => Myth.find().sort({createdAt: -1}).limit(3);

exports.edit = async (mythId, mythData) => await Myth.findByIdAndUpdate(mythId, mythData, { runValidators: true } )

exports.like = async (mythId, userId) => {
    await Myth.findByIdAndUpdate(mythId, { $push: { favoriteList: userId } });
}
exports.delete = async (mythId) =>  await Myth.findByIdAndDelete(mythId);
