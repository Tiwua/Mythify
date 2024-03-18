const Myth = require('../models/Myth');

exports.getAll = async (limit) => {

    if(limit > 0) {

        return await Myth.find().limit(limit);
    }

    return await Myth.find();
}

exports.getOneById = async (mythId) => await Myth.findById(mythId);

exports.create = async (mythData) => {
    //mythData.ownerId = '65e4f5d739a62ed0a0329ff3';

    await Myth.create(mythData);
}