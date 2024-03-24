const Myth = require('../models/Myth');

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
    console.log(userId)
    console.log({...mythData})
    //await Myth.create({ ownerId: userId, ...mythData});
}

exports.getLatest = () => Myth.find().sort({createdAt: -1}).limit(3);

exports.like = async (mythId, userId) => await Myth.findByIdAndUpdate(mythId, { $push: {favoriteList: userId }});
