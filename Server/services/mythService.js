const Myth = require('../models/Myth');

exports.getAll = async () => await Myth.find();

exports.create = async (mythData) => {
    //mythData.ownerId = '65e4f5d739a62ed0a0329ff3';

    await Myth.create(mythData);
}